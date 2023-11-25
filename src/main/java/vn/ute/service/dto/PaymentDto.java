package vn.ute.service.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import vn.ute.service.enumerate.PaymentMethod;
import vn.ute.service.enumerate.PaymentStatus;

import java.util.UUID;
@Getter
@Setter
@NoArgsConstructor
public class PaymentDto {
    private UUID id;
    private PaymentMethod method;
    private PaymentStatus paymentStatus;
}
