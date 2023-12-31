package vn.ute.service.controller;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import vn.ute.service.dto.request.ResetPasswordRequest;
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
    public ResponseEntity<ResponseDto<?>> signin(@RequestBody SignInRequest signInRequest, HttpServletResponse response){
        return authService.signIn(signInRequest, response);
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
    public ResponseEntity<ResponseDto<?>> logout(HttpServletRequest request, HttpServletResponse response){
        return authService.logout(request, response);
    }

    @PostMapping("/refresh-token")
    public  ResponseEntity<ResponseDto<?>> refreshToken(HttpServletRequest request){
     return authService.refreshToken(request);
    }

    @GetMapping("/resetpasswordtoken")
    public ResponseEntity<?> generateResetPasswordToken(@RequestParam("loginName") String loginName){
        return authService.generateResetPasswordToken(loginName);
    }

    @PostMapping("/resetpassword")
    public ResponseEntity<?> resetPassword(@RequestBody ResetPasswordRequest resetPasswordRequest){
        return authService.resetPassword(resetPasswordRequest);
    }



}
