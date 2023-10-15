package vn.ute.service.dto.request;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.UUID;
@NoArgsConstructor
@Getter
@Setter
public class RegisterServiceRequest {

    private String name;

    private String description;

    private double price;

    private UUID category;
}
