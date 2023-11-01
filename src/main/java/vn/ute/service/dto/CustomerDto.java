package vn.ute.service.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Set;

@Getter
@Setter
@NoArgsConstructor
public class CustomerDto {
    private String email;
    private String firstName;
    private String lastName;
    private String phone;
    private Set<AddressDto> addresses;
    private String avatar;
}
