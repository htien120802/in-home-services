package vn.ute.service.dto.response;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import vn.ute.service.dto.CategoryDto;
import vn.ute.service.dto.ImageDto;
import vn.ute.service.dto.ReviewDto;

import java.util.Set;
import java.util.UUID;
@Getter
@Setter
@NoArgsConstructor
public class ServiceDto {
    private UUID id;

    private String name;

    private Set<DescriptionDto> descriptions;

    private double price;

    private CategoryDto category;

    private Set<ImageDto> images;

    private Set<ReviewDto> reviews;
}
