package vn.ute.service.dto;

import lombok.Getter;
import lombok.Setter;

import java.sql.Timestamp;
import java.util.UUID;

@Getter
@Setter
public class BookingReviewDto {
    private UUID id;
    private String review;
    private int rating;
    private Timestamp reviewTime;
}
