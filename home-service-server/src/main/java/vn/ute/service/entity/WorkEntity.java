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
@Getter
@Setter
@Table(name = "work")
@NoArgsConstructor
public class WorkEntity {
    @Id
    @UuidGenerator(style = UuidGenerator.Style.TIME)
    private UUID id;

    @Column(nullable = false)
    private String description;

    @Column(nullable = false)
    private String unit;

    @Column(nullable = false)
    private Integer pricePerUnit;

    @ManyToOne
    @JoinColumn(name = "service_id")
    private ServiceEntity service;

    @OneToMany(mappedBy = "work", cascade = CascadeType.ALL)
    private Set<BookingItemEntity> bookingItems = new HashSet<>();

}
