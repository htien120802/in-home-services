package vn.ute.service.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.UuidGenerator;

import java.util.Date;
import java.util.UUID;

@Entity
@Table(name = "Payment")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class PaymentEntity {
    @Id
    @UuidGenerator(style = UuidGenerator.Style.TIME)
    private UUID id;

//    @ManyToOne
//    @JoinColumn(name = "userId")
//    private User user;

    @ManyToOne
    @JoinColumn(name = "booking_id")
    private BookingEntity booking;

    private double amount;
    private Date paymentDate;
    private String paymentStatus;
}
