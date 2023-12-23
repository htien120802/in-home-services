package vn.ute.service.dto.request;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class ResetPasswordRequest {
    private String email;
    private String resetToken;
    private String password;
    private String passwordConfirm;
}
