package vn.ute.service.dto.request;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import vn.ute.service.dto.CategoryDto;

import java.util.UUID;
@NoArgsConstructor
@Getter
@Setter
public class NewServiceRequest {

    private String name;

    private String description;

    private double price;

    private UUID category;
}
