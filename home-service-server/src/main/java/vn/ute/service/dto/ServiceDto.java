package vn.ute.service.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Set;
import java.util.UUID;
@Getter
@Setter
@NoArgsConstructor
public class ServiceDto {
    private UUID id;

    private String name;

    private Set<WorkDto> works;

    private CategoryDto category;

    private Set<ImageDto> images;

    private Double avgRating;

    private Double distance;

//    private Set<ReviewDto> reviews;
}
