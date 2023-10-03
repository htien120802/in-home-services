package vn.ute.service.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import vn.ute.service.dto.request.SignInRequest;
import vn.ute.service.dto.request.SignUpRequest;
import vn.ute.service.dto.response.ResponseDto;
import vn.ute.service.service.AuthService;

@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
public class AuthController {
    @Autowired
    private AuthService authService;

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
    public ResponseEntity<ResponseDto<?>> logout(@RequestHeader("Authorization") String authorization){
        if (authorization.isEmpty())
            return ResponseEntity.ok(new ResponseDto<>("fail","Token is empty",null));
        return authService.logout(authorization);
    }

    @PostMapping("/refresh-token")
    public  ResponseEntity<ResponseDto<?>> refreshToken(@RequestHeader("Authorization") String authorization){
        if (authorization.isEmpty())
            return ResponseEntity.ok(new ResponseDto<>("fail","Token is empty",null));
        return authService.refreshToken(authorization);
    }

}
