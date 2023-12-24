package vn.ute.service.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.UuidGenerator;

import java.util.HashSet;
import java.util.Set;
import java.util.UUID;

@Entity
@Table(name = "Provider")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ProviderEntity {
    @Id
    @UuidGenerator(style = UuidGenerator.Style.TIME)
    private UUID id;

    private String firstName;

    private String lastName;

    @Email
    private String email;


    private String phone;

    private String avatar;

    private double avgRating;

//    private String specialization;

//    private double rating;

    @OneToMany(mappedBy = "provider", cascade = CascadeType.ALL)
    private Set<BookingEntity> bookings;

    // One provider can offer multiple services
    @OneToMany(mappedBy = "provider", cascade = CascadeType.ALL)
    private Set<ServiceEntity> services;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "account_id")
    private AccountEntity account;

    @OneToMany(mappedBy = "provider", cascade = CascadeType.ALL)
    private Set<AddressEntity> addresses = new HashSet<>();
//
//    @OneToOne
//    @JoinColumn(name = "image_id")
//    private ImageEntity avatar;
    @PrePersist
    private void prePersist(){
        this.avgRating = 0.0;
    }

    public void calcAvgRating(){
        this.avgRating = this.getServices().stream().mapToDouble(ServiceEntity::getAvgRating).average().orElse(0.0);
    }
}
