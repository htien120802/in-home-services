package vn.ute.service.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import vn.ute.service.enumerate.BookingStatus;

import java.sql.Date;
import java.sql.Time;
import java.util.Set;
import java.util.UUID;
@Setter
@Getter
@NoArgsConstructor
public class BookingDto {
    private UUID id;
    private CustomerDto customer;
    private ProviderDto provider;
    private ServiceDto service;
    private Set<WorkDto> works;
    private Integer totalPrice;
    private Time time;
    private Date date;
    private BookingStatus status;
    private PaymentDto payment;
}
