package vn.ute.service.dto.request;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import vn.ute.service.dto.AddressDto;

@NoArgsConstructor
@Getter
@Setter
public class ProfileRequest {
    private String firstName;
    private String lastName;
    private String phone;
    private AddressDto address;
}
