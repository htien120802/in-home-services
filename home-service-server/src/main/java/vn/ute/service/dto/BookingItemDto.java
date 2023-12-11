package vn.ute.service.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.UUID;

@Setter
@Getter
@NoArgsConstructor
public class BookingItemDto {
    private UUID id;
    private WorkDto work;
    private int quantity;
}
