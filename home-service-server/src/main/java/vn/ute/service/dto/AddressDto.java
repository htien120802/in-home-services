package vn.ute.service.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.UUID;

@Getter
@Setter
@NoArgsConstructor
public class AddressDto {
    private UUID id;

    private String number;

    private String street;

    private String ward;

    private String district;

    private String city;
}
