package vn.ute.service.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.UuidGenerator;
import vn.ute.service.validation.custom.Phone;

import java.util.HashSet;
import java.util.Set;
import java.util.UUID;

@Entity
@Table(name = "Customer")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
//@Table(uniqueConstraints = {@UniqueConstraint(columnNames = {"email"})})
public class CustomerEntity {
    @Id
    @UuidGenerator(style = UuidGenerator.Style.TIME)
    private UUID id;

    private String firstName;

    private String lastName;

    @Column(unique = true)
    @Email
    private String email;

    @Phone
    private String phone;

    private String avatar;

    // One user can create multiple reviews
    @OneToMany(mappedBy = "customer", cascade = CascadeType.ALL)
    private Set<ReviewEntity> reviews;

    // One user can make multiple service bookings
    @OneToMany(mappedBy = "customer", cascade = CascadeType.ALL)
    private Set<BookingEntity> bookings;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "account_id")
    private AccountEntity account;

    @OneToMany(mappedBy = "customer")
    private Set<AddressEntity> addresses = new HashSet<>();

//    @OneToOne
//    @JoinColumn(name = "image_id")
//    private ImageEntity avatar;


}
