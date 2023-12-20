package vn.ute.service.dto.request;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import vn.ute.service.dto.WorkDto;

import java.sql.Time;
import java.util.List;
import java.util.UUID;
@Getter
@Setter
@NoArgsConstructor
public class CreateServiceRequest {
    private String name;

    private Time openTime;

    private Time closeTime;

    private List<WorkDto> works;

    private UUID provider;

    private UUID category;
}
