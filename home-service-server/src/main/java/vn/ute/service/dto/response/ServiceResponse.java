package vn.ute.service.dto.response;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import vn.ute.service.dto.CategoryDto;
import vn.ute.service.dto.ProviderDto;
import vn.ute.service.dto.WorkDto;
import vn.ute.service.enumerate.ServiceStatus;

import java.sql.Time;
import java.util.Set;
import java.util.UUID;
@Getter
@Setter
@NoArgsConstructor
public class ServiceResponse {
    private UUID id;

    private String name;

    private ServiceStatus status;

    private String thumbnail;

    private Time openTime;

    private Time closeTime;

    private Set<WorkDto> works;

    private CategoryDto category;

    private Double avgRating;

    private Double distance;

    private ProviderDto provider;
}
