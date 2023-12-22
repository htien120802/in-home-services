package vn.ute.service.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


import java.sql.Date;
import java.sql.Timestamp;
import java.util.UUID;

@Getter
@Setter
@NoArgsConstructor
public class ReviewDto {
    private UUID id;
    private int rating;
    private String comment;
    private Timestamp date;
    private CustomerReviewDto customer;
}
