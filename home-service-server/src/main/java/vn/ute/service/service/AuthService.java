package vn.ute.service.service;

import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.apache.commons.validator.routines.EmailValidator;
import org.json.JSONObject;
import org.modelmapper.ModelMapper;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import vn.ute.service.dto.request.ResetPasswordRequest;
import vn.ute.service.dto.request.SignInRequest;
import vn.ute.service.dto.request.SignUpRequest;
import vn.ute.service.dto.response.AuthenticationResponse;
import vn.ute.service.dto.response.ResponseDto;
import vn.ute.service.entity.AccountEntity;
import vn.ute.service.entity.CustomerEntity;
import vn.ute.service.entity.ProviderEntity;
import vn.ute.service.entity.TokenEntity;
import vn.ute.service.jwt.JwtService;
import vn.ute.service.repository.*;
import vn.ute.service.utils.UUIDUtil;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class AuthService {
    private final AccountRepository accountRepository;
    private final CustomerRepository customerRepository;
    private final ProviderRepository providerRepository;
    private final TokenRepository tokenRepository;
    private final RoleRepository roleRepository;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;
    private final PasswordEncoder passwordEncoder;
    private final ModelMapper mapper;

    public AuthService(AccountRepository accountRepository, CustomerRepository customerRepository, ProviderRepository providerRepository, TokenRepository tokenRepository, RoleRepository roleRepository, JwtService jwtService, AuthenticationManager authenticationManager, PasswordEncoder passwordEncoder, ModelMapper mapper) {
        this.accountRepository = accountRepository;
        this.customerRepository = customerRepository;
        this.providerRepository = providerRepository;
        this.tokenRepository = tokenRepository;
        this.roleRepository = roleRepository;
        this.jwtService = jwtService;
        this.authenticationManager = authenticationManager;
        this.passwordEncoder = passwordEncoder;
        this.mapper = mapper;
    }

    @Transactional
    public ResponseEntity<ResponseDto<?>> createAccount(SignUpRequest signUpRequest) {
        if (accountRepository.existsByUsername(signUpRequest.getUsername()))
            return ResponseEntity.status(400).body(new ResponseDto<>("fail","Username is already exist",null));
        if (accountRepository.existsByCustomer_Email(signUpRequest.getEmail()) || accountRepository.existsByProvider_Email(signUpRequest.getEmail()))
            return ResponseEntity.status(400).body(new ResponseDto<>("fail","This email has been used",null));

        if (!signUpRequest.getPassword().equals(signUpRequest.getConfirmPassword()))
            return ResponseEntity.status(400).body(new ResponseDto<>("fail","Password and confirm password don't match!",null));


        AccountEntity account = mapper.map(signUpRequest,AccountEntity.class);
        account.setPassword(passwordEncoder.encode(account.getPassword()));
        account.getRoles().add(roleRepository.findByRoleName("ROLE_"+signUpRequest.getRoleName().toUpperCase()));
//        account = accountRepository.save(account);

        if (signUpRequest.getRoleName().equals("customer")){
            CustomerEntity customer = mapper.map(signUpRequest,CustomerEntity.class);
            customer.setAccount(account);
            account.setCustomer(customer);
            customerRepository.save(customer);
        }else {
            ProviderEntity provider = mapper.map(signUpRequest,ProviderEntity.class);
            provider.setAccount(account);
            account.setProvider(provider);
            providerRepository.save(provider);
        }

//        String jwtToken = jwtService.generateToken(account);
//        String refreshToken = jwtService.generateRefreshToken(account);
//
//        saveToken(jwtToken,account);

        return ResponseEntity.status(201).body(new ResponseDto<>("success","Create account successfully", null));
    }
    @Transactional
    public ResponseEntity<ResponseDto<?>> signIn(SignInRequest signInRequest, HttpServletResponse response){
        if (EmailValidator.getInstance().isValid(signInRequest.getUsername())){
            Optional<AccountEntity> temp = accountRepository.findByCustomer_EmailOrProvider_Email(signInRequest.getUsername(),signInRequest.getUsername());
            temp.ifPresent(accountEntity -> signInRequest.setUsername(accountEntity.getUsername()));
        }
        Optional<AccountEntity> account = accountRepository.findByUsername(signInRequest.getUsername());
        if (account.isEmpty())
            return ResponseEntity.status(400).body(new ResponseDto<>("fail","Login name is incorrect!",null));

        if (!passwordEncoder.matches(signInRequest.getPassword(), account.get().getPassword()))
            return ResponseEntity.status(400).body(new ResponseDto<>("fail","Password is incorrect!",null));

        authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(signInRequest.getUsername(),signInRequest.getPassword()));
        String jwtToken = jwtService.generateToken(account.get());

        String refreshToken = jwtService.generateRefreshToken(account.get());
        Cookie cookie = new Cookie("refreshToken", refreshToken);
        cookie.setMaxAge((int) jwtService.getRefreshExpiration());
        cookie.setSecure(false);
        cookie.setHttpOnly(true);
        cookie.setPath("/");
        response.addCookie(cookie);

        revokeAllUserTokens(account.get());
        saveToken(jwtToken,account.get());
        return ResponseEntity.status(200).body(new ResponseDto<>("success","Sign in successfully",new AuthenticationResponse(jwtToken,refreshToken)));
    }

    private void saveToken(String jwtToken, AccountEntity account){
        TokenEntity token = new TokenEntity();
        token.setAccount(account);
        token.setTokenType("BEARER");
        token.setRevoked(false);
        token.setExpired(false);
        token.setToken(jwtToken);
        tokenRepository.save(token);
    }

    private void revokeAllUserTokens(AccountEntity account) {
        List<TokenEntity> validUserTokens = tokenRepository.findAllValidTokenByAccount(account.getId());
        if (validUserTokens.isEmpty())
            return;
        validUserTokens.forEach(token -> {
            token.setExpired(true);
            token.setRevoked(true);
        });
        tokenRepository.saveAll(validUserTokens);
    }
    @Transactional
    public ResponseEntity<ResponseDto<?>> refreshToken(HttpServletRequest request) {
        String refreshToken = getRefreshTokenInCookies(request);
        if (refreshToken == null)
            return ResponseEntity.status(404).body(new ResponseDto<>("fail","Refresh token not found",null));

        String username = jwtService.extractUsername(refreshToken);
        if (username != null) {
            Optional<AccountEntity> account = accountRepository.findByUsername(username);
            if (account.isEmpty())
                return ResponseEntity.status(404).body(new ResponseDto<>("fail","Account not found",null));
            if (jwtService.isTokenValid(refreshToken, account.get())) {
                String accessToken = jwtService.generateToken(account.get());
                revokeAllUserTokens(account.get());
                saveToken(accessToken, account.get());
                return ResponseEntity.status(200).body(new ResponseDto<>("success","Refresh token successfully",new AuthenticationResponse(accessToken,refreshToken)));
            }
        }
        return ResponseEntity.status(400).body(new ResponseDto<>("fail","Refresh token is not valid",null));
    }
    @Transactional
    public ResponseEntity<ResponseDto<?>> logout(HttpServletRequest request, HttpServletResponse response) {
        if (request.getHeader("Authorization").isEmpty())
            return ResponseEntity.status(404).body(new ResponseDto<>("fail","Token not found",null));
        String jwt = jwtService.getTokenFromRequest(request);
        TokenEntity storedToken = tokenRepository.findByToken(jwt)
                .orElse(null);
        if (storedToken != null) {
            storedToken.setExpired(true);
            storedToken.setRevoked(true);
            tokenRepository.save(storedToken);
            SecurityContextHolder.clearContext();
        }
        Cookie cookie = new Cookie("refreshToken", null);
        cookie.setMaxAge(0);
        cookie.setSecure(false);
        cookie.setHttpOnly(true);
        cookie.setPath("/");
        response.addCookie(cookie);
        return ResponseEntity.status(200).body(new ResponseDto<>("success","Logout successfully",null));
    }

    private String getRefreshTokenInCookies(HttpServletRequest req) {
        for (Cookie c : req.getCookies()) {
            if (c.getName().equals("refreshToken"))
                return c.getValue();
        }
        return null;
    }

    public ResponseEntity<?> generateResetPasswordToken(String loginName) {
        if (EmailValidator.getInstance().isValid(loginName)){
            Optional<AccountEntity> temp = accountRepository.findByCustomer_EmailOrProvider_Email(loginName,loginName);
            if (temp.isPresent())
                loginName = temp.get().getUsername();
        }
        Optional<AccountEntity> account = accountRepository.findByUsername(loginName);
        if (account.isEmpty())
            return ResponseEntity.status(404).body(new ResponseDto<>("fail","Not found account with this login name!", null));

        String resetToken = UUIDUtil.getUuid();
        account.get().setResetPasswordToken(resetToken);
        accountRepository.save(account.get());

        JSONObject object = new JSONObject();
        object.put("success",true);
        object.put("email",account.get().getCustomer().getEmail() != null ? account.get().getCustomer().getEmail() : account.get().getProvider().getEmail());
        object.put("resetToken", resetToken);
        return ResponseEntity.status(200).body(object.toString(3));
    }

    public ResponseEntity<?> resetPassword(ResetPasswordRequest resetPasswordRequest){
        AccountEntity account = accountRepository.findByCustomer_EmailOrProvider_Email(resetPasswordRequest.getEmail(),resetPasswordRequest.getEmail()).orElse(null);
        if (account == null)
            return ResponseEntity.status(404).body(new ResponseDto<>("fail","Not found account with this login name!", null));

        String resetToken = account.getResetPasswordToken();
        account.setResetPasswordToken(null);
        account = accountRepository.save(account);

        if (resetToken != null && resetToken.equals(resetPasswordRequest.getResetToken())){
            if (!resetPasswordRequest.getPassword().equals(resetPasswordRequest.getPasswordConfirm()))
                return ResponseEntity.status(400).body(new ResponseDto<>("fail","Password and password confirm don't match!", null));

            account.setPassword(passwordEncoder.encode(resetPasswordRequest.getPassword()));
            accountRepository.save(account);

            return ResponseEntity.status(200).body(new ResponseDto<>("success","Reset password successfully!", null));
        }

        return ResponseEntity.status(400).body(new ResponseDto<>("fail","Reset token is invalid!", null));
    }
}
