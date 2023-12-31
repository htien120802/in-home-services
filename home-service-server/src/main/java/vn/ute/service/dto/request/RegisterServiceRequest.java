package vn.ute.service.dto.request;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.web.multipart.MultipartFile;
import vn.ute.service.dto.WorkDto;

import java.sql.Time;
import java.util.List;
import java.util.Set;
import java.util.UUID;
@NoArgsConstructor
@Getter
@Setter
public class RegisterServiceRequest {

    private String name;

    private Time openTime;

    private Time closeTime;

    private List<WorkDto> works;

    private UUID category;
}
