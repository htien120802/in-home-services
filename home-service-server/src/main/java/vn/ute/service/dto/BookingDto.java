package vn.ute.service.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import vn.ute.service.enumerate.BookingStatus;

import java.sql.Date;
import java.sql.Time;
import java.sql.Timestamp;
import java.util.Set;
import java.util.UUID;
@Setter
@Getter
@NoArgsConstructor
public class BookingDto {
    private UUID id;
    private String address;
    private String note;
    private CustomerDto customer;
    private ProviderDto provider;
    private ServiceDto service;
    private Set<BookingItemDto> bookingItems;
    private long movingFee;
    private long subTotal;
    private long totalPrice;
    private Time time;
    private Date date;
    private Time arriveTime;
    private BookingStatus status;
    private PaymentDto payment;
    private String rating;
    private String review;
    private Timestamp reviewTime;
}
