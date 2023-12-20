package vn.ute.service.dto.response;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import vn.ute.service.dto.CustomerDto;
import vn.ute.service.dto.ServiceDto;

import java.sql.Timestamp;
import java.util.UUID;

@Getter
@Setter
@NoArgsConstructor
public class ReviewResponse {
    private UUID id;
    private int rating;
    private String comment;
    private Timestamp date;
    private CustomerDto customer;
    private ServiceDto service;
}
