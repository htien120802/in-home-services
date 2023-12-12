package vn.ute.service.controller;

import jakarta.servlet.http.HttpServletRequest;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import vn.ute.service.dto.request.SignInRequest;
import vn.ute.service.dto.request.SignUpRequest;
import vn.ute.service.dto.response.ResponseDto;
import vn.ute.service.service.AuthService;

@RestController
@RequestMapping("/auth")
public class AuthController {
    private final AuthService authService;

    public AuthController(AuthService authService) {
        this.authService = authService;
    }

    @PostMapping("/signin")
    public ResponseEntity<ResponseDto<?>> signin(@RequestBody SignInRequest signInRequest){
        return authService.signIn(signInRequest);
    }
    @PostMapping("/signup")
    public ResponseEntity<ResponseDto<?>> signupAccount(@RequestBody SignUpRequest signUpRequest){
        if (signUpRequest.getRoleName().equals("admin"))
            return ResponseEntity.ok(new ResponseDto<>("fail","Permitted",null));
        else {
            return authService.createAccount(signUpRequest);
        }
    }

    @PostMapping("/logout")
    public ResponseEntity<ResponseDto<?>> logout(HttpServletRequest request){
        return authService.logout(request);
    }

    @PostMapping("/refresh-token")
    public  ResponseEntity<ResponseDto<?>> refreshToken(HttpServletRequest request){
     return authService.refreshToken(request);
    }


}
