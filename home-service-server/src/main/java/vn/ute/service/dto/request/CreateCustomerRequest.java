package vn.ute.service.dto.request;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.web.multipart.MultipartFile;

@NoArgsConstructor
@Getter
@Setter
public class CreateCustomerRequest {
    private String username;
    private String password;
    private String passwordConfirm;
    private String firstName;
    private String lastName;
    private String email;
    private String phone;
    private MultipartFile avatar;
}
