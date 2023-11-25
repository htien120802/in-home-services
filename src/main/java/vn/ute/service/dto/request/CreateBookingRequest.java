package vn.ute.service.dto.request;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import vn.ute.service.dto.WorkDto;

import java.sql.Date;
import java.sql.Time;
import java.util.Set;
@Getter
@Setter
@NoArgsConstructor
public class CreateBookingRequest {
    private Set<WorkDto> works;
    private Time time;
    private Date date;
    private String paymentMethoad;
}
