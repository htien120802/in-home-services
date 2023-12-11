package vn.ute.service.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.UuidGenerator;
import vn.ute.service.enumerate.PaymentMethod;
import vn.ute.service.enumerate.PaymentStatus;

import java.sql.Date;
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


    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "booking_id")
    private BookingEntity booking;

    @Enumerated(EnumType.STRING)
    private PaymentMethod method;

    private Integer amount;

    private Date paymentDate;

    private Integer transactionNo;

//    @Column(columnDefinition = "enum ('PAID','UNPAID') default 'UNPAID'")
    @Enumerated(EnumType.STRING)
    private PaymentStatus paymentStatus;

    @PrePersist
    private void prePersist(){
        if (this.paymentStatus == null){
            this.paymentStatus = PaymentStatus.UNPAID;
        }
    }
}
