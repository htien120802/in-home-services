package vn.ute.service.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import vn.ute.service.dto.request.SignUpRequest;
import vn.ute.service.dto.response.ResponseDto;
import vn.ute.service.service.AuthService;

@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
public class AuthController {
    @Autowired
    private AuthService authService;
    @PostMapping("/signup")
    public ResponseEntity<ResponseDto<?>> signupAccount(@RequestBody SignUpRequest signUpRequest){
        if (signUpRequest.getRoleName().equals("admin"))
            return ResponseEntity.ok(new ResponseDto<>("fail","Permitted",null));
        else {
            return authService.createAccount(signUpRequest);
        }
    }
}
