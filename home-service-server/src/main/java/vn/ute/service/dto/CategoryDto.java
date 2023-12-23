package vn.ute.service.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.UUID;
@Getter
@Setter
@NoArgsConstructor
public class CategoryDto {
    private UUID id;
    private String categoryName;
    private String slug;
    private String thumbnail;
}
