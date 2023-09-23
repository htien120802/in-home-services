package vn.ute.service.service;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import vn.ute.service.dto.request.SignUpRequest;
import vn.ute.service.dto.response.AuthenticationResponse;
import vn.ute.service.dto.response.ResponseDto;
import vn.ute.service.entity.AccountEntity;
import vn.ute.service.entity.CustomerEntity;
import vn.ute.service.entity.ProviderEntity;
import vn.ute.service.entity.TokenEntity;
import vn.ute.service.jwt.JwtService;
import vn.ute.service.reposioty.AccountRepository;
import vn.ute.service.reposioty.CustomerRepository;
import vn.ute.service.reposioty.ProviderRepository;
import vn.ute.service.reposioty.TokenRepository;

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
    private JwtService jwtService;
    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private ModelMapper mapper;

    public ResponseEntity<ResponseDto<?>> createAccount(SignUpRequest signUpRequest) {
        if (accountRepository.existsByUsername(signUpRequest.getUsername()))
            return ResponseEntity.ok(new ResponseDto<>("fail","Username is already exist",null));
        if (accountRepository.existsByCustomer_Email(signUpRequest.getEmail()) || accountRepository.existsByProvider_Email(signUpRequest.getEmail()))
            return ResponseEntity.ok(new ResponseDto<>("fail","This email has been used",null));

        AccountEntity account = mapper.map(signUpRequest,AccountEntity.class);
        account.setPassword(passwordEncoder.encode(account.getPassword()));
        account = accountRepository.save(account);

        if (signUpRequest.getRoleName().equals("customer")){
            CustomerEntity customer = mapper.map(signUpRequest,CustomerEntity.class);
            customer.setAccount(account);
            customerRepository.save(customer);
        }else {
            ProviderEntity provider = mapper.map(signUpRequest,ProviderEntity.class);
            provider.setAccount(account);
            providerRepository.save(provider);
        }

        String jwtToken = jwtService.generateToken(account);
        String refreshToken = jwtService.generateRefreshToken(account);

        TokenEntity token = new TokenEntity();
        token.setAccount(account);
        token.setTokenType("BEARER");
        token.setRevoked(false);
        token.setExpired(false);
        token.setToken(jwtToken);
        tokenRepository.save(token);
        return ResponseEntity.ok(new ResponseDto<>("success","Create account successfully", new AuthenticationResponse(jwtToken,refreshToken)));
    }
}
