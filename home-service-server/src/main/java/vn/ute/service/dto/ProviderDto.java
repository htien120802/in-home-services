package vn.ute.service.dto;

import jakarta.persistence.Entity;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Set;
import java.util.UUID;

@Getter
@Setter
@NoArgsConstructor
public class ProviderDto {
    private UUID id;
    private String email;
    private String firstName;
    private String lastName;
    private String phone;
    private Set<AddressDto> addresses;
    private String avatar;
}
