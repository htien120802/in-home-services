package vn.ute.service.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.UuidGenerator;
import vn.ute.service.validation.custom.PhoneNumber;

import javax.validation.constraints.Email;
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

    @Email(message = "Email is not valid!")
    private String email;

    @PhoneNumber
    private String phone;

    private String avatar;

//    private String specialization;

    private double rating;

    @OneToMany(mappedBy = "provider", cascade = CascadeType.ALL)
    private Set<BookingEntity> bookings;

    // One provider can offer multiple services
    @OneToMany(mappedBy = "provider", cascade = CascadeType.ALL)
    private Set<ServiceEntity> services;

    @OneToOne
    @JoinColumn(name = "account_id")
    private AccountEntity account;

    @OneToMany(mappedBy = "provider")
    private Set<AddressEntity> addresses = new HashSet<>();
//
//    @OneToOne
//    @JoinColumn(name = "image_id")
//    private ImageEntity avatar;
}
