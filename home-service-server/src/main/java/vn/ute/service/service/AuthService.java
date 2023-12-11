package vn.ute.service.service;

import jakarta.servlet.http.HttpServletRequest;
import org.apache.commons.validator.routines.EmailValidator;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
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

import java.util.List;
import java.util.Optional;

@Service
public class AuthService {
    @Autowired
    private AccountRepository accountRepository;

    @Autowired
    private CustomerRepository customerRepository;

    @Autowired
    private ProviderRepository providerRepository;

    @Autowired
    private TokenRepository tokenRepository;

    @Autowired
    private RoleRepository roleRepository;
    @Autowired
    private JwtService jwtService;
    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private ModelMapper mapper;
    @Transactional
    public ResponseEntity<ResponseDto<?>> createAccount(SignUpRequest signUpRequest) {
        if (accountRepository.existsByUsername(signUpRequest.getUsername()))
            return ResponseEntity.ok(new ResponseDto<>("fail","Username is already exist",null));
        if (accountRepository.existsByCustomer_Email(signUpRequest.getEmail()) || accountRepository.existsByProvider_Email(signUpRequest.getEmail()))
            return ResponseEntity.ok(new ResponseDto<>("fail","This email has been used",null));

        if (!signUpRequest.getPassword().equals(signUpRequest.getConfirmPassword()))
            return ResponseEntity.ok(new ResponseDto<>("fail","Password and confirm password don't match!",null));


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

        String jwtToken = jwtService.generateToken(account);
        String refreshToken = jwtService.generateRefreshToken(account);

        saveToken(jwtToken,account);

        return ResponseEntity.ok(new ResponseDto<>("success","Create account successfully", new AuthenticationResponse(jwtToken,refreshToken)));
    }
    @Transactional
    public ResponseEntity<ResponseDto<?>> signIn(SignInRequest signInRequest){
        if (EmailValidator.getInstance().isValid(signInRequest.getUsername())){
            Optional<AccountEntity> temp = accountRepository.findByCustomer_EmailOrProvider_Email(signInRequest.getUsername(),signInRequest.getUsername());
            if (temp.isPresent())
                signInRequest.setUsername(temp.get().getUsername());
        }
        Optional<AccountEntity> account = accountRepository.findByUsername(signInRequest.getUsername());
        if (account.isEmpty())
            return ResponseEntity.ok(new ResponseDto<>("fail","Login name is incorrect!",null));

        if (!passwordEncoder.matches(signInRequest.getPassword(), account.get().getPassword()))
            return ResponseEntity.ok(new ResponseDto<>("fail","Password is incorrect!",null));

        authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(signInRequest.getUsername(),signInRequest.getPassword()));
        String jwtToken = jwtService.generateToken(account.get());
        String refreshToken = jwtService.generateRefreshToken(account.get());
        revokeAllUserTokens(account.get());
        saveToken(jwtToken,account.get());
        return ResponseEntity.ok(new ResponseDto<>("success","Sign in successfully",new AuthenticationResponse(jwtToken,refreshToken)));
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
        String refreshToken = jwtService.getTokenFromRequest(request);
        String username = jwtService.extractUsername(refreshToken);
        if (username != null) {
            Optional<AccountEntity> account = accountRepository.findByUsername(username);
            if (account.isEmpty())
                return ResponseEntity.ok(new ResponseDto<>("fail","Account not found",null));
            if (jwtService.isTokenValid(refreshToken, account.get())) {
                String accessToken = jwtService.generateToken(account.get());
                revokeAllUserTokens(account.get());
                saveToken(accessToken, account.get());
                return ResponseEntity.ok(new ResponseDto<>("success","Refresh token successfully",new AuthenticationResponse(accessToken,refreshToken)));
            }
        }
        return ResponseEntity.ok(new ResponseDto<>("fail","Refresh token is not valid",null));
    }
    @Transactional
    public ResponseEntity<ResponseDto<?>> logout(HttpServletRequest request) {
        if (request.getHeader("Authorization").isEmpty())
            return ResponseEntity.ok(new ResponseDto<>("fail","Token not found",null));
        String jwt = jwtService.getTokenFromRequest(request);
        TokenEntity storedToken = tokenRepository.findByToken(jwt)
                .orElse(null);
        if (storedToken != null) {
            storedToken.setExpired(true);
            storedToken.setRevoked(true);
            tokenRepository.save(storedToken);
            SecurityContextHolder.clearContext();
        }
        return ResponseEntity.ok(new ResponseDto<>("success","Logout successfully",null));
    }
}
