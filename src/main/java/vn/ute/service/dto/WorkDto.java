package vn.ute.service.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.UUID;

@Getter
@Setter
@NoArgsConstructor
public class WorkDto {
    private UUID id;
    private String description;
    private Integer price;
}
