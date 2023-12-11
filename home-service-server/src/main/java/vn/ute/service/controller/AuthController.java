package vn.ute.service.controller;

import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import vn.ute.service.dto.request.SignInRequest;
import vn.ute.service.dto.request.SignUpRequest;
import vn.ute.service.dto.response.ResponseDto;
import vn.ute.service.service.AuthService;
import vn.ute.service.service.BingMapsService;

@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
public class AuthController {
    @Autowired
    private AuthService authService;

    @Autowired
    private BingMapsService bingMapsService;

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

//    @GetMapping
//    public double calcDistance(@RequestParam String origin, @RequestParam String destination){
//        return googleMapService.calculateDistance(origin, destination);
//    }

}
