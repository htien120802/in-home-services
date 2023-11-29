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
@Table(name = "Review")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ReviewEntity {
    @Id
    @UuidGenerator(style = UuidGenerator.Style.TIME)
    private UUID id;

    @ManyToOne
    @JoinColumn(name = "service_id") // Name of the foreign key column in the Review table
    private ServiceEntity service; // This field represents the relationship with Service

    @ManyToOne
    @JoinColumn(name = "customer_id") // Name of the foreign key column in the Review table
    private CustomerEntity customer; // This field represents the relationship with User

    @Column(nullable = false)
    private int rating;
    @Column(nullable = false)
    private String comment;
    @Column(nullable = false)
    private Date date;
}

