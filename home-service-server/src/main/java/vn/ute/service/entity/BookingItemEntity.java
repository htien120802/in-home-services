package vn.ute.service.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.UuidGenerator;

import java.util.HashSet;
import java.util.Set;
import java.util.UUID;

@Entity
@Table(name = "booking_item")
@Getter
@Setter
@NoArgsConstructor
public class BookingItemEntity {
    @Id
    @UuidGenerator(style = UuidGenerator.Style.TIME)
    private UUID id;

    @OneToOne
    @JoinColumn(name = "work_id")
    private WorkEntity work;

    @ManyToOne
    @JoinColumn(name = "booking_id")
    private BookingEntity booking;

    private int quantity;
}
