package vn.ute.service.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.UuidGenerator;
import vn.ute.service.enumerate.BookingStatus;
import vn.ute.service.enumerate.ServiceStatus;

import java.sql.Date;
import java.sql.Time;
import java.sql.Timestamp;
import java.util.HashSet;
import java.util.Set;
import java.util.UUID;

@Entity
@Table(name = "Booking")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class BookingEntity {
    @Id
    @UuidGenerator(style = UuidGenerator.Style.TIME)
    private UUID id;

    private String address;

    private String note;

    @ManyToOne
    @JoinColumn(name = "customer_id")
    private CustomerEntity customer;

    @ManyToOne
    @JoinColumn(name = "provider_id")
    private ProviderEntity provider;

    @ManyToOne
    @JoinColumn(name = "service_id")
    private ServiceEntity service;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "payment_id")
    private PaymentEntity payment;

    @OneToMany(mappedBy = "booking", cascade = CascadeType.ALL)
    private Set<BookingItemEntity> bookingItems = new HashSet<>();

//    @ManyToOne
//    @JoinColumn(name = "providerId")
//    private Provider provider;

//    @ManyToOne
//    @JoinColumn(name = "service_id")
//    private ServiceEntity service;

//    @ManyToMany(fetch = FetchType.EAGER)
//    @JoinTable(name = "booking_work",
//            joinColumns = @JoinColumn(name = "booking_id"),
//            inverseJoinColumns = @JoinColumn(name = "work_id"))
//    private Set<WorkEntity> works = new HashSet<>();

    private long movingFee;

    private long subTotal;

    private long totalPrice;

    private Date date;

    private Time time;

    private Time arriveTime;

//    @Column(columnDefinition = "enum ('BOOKED','COMING','DOING','DONE') default 'BOOKED'")
    @Enumerated(EnumType.STRING)
    private BookingStatus status;

    private String reasonCancel;

    private String review;

    private int rating;

    private Timestamp reviewTime;
    @PrePersist
    private void prePersist(){
        if (this.status == null){
            this.status = BookingStatus.BOOKED;
        }
        this.rating = 0;
        calcTotalPrice();
    }
    @PreUpdate
    private void preUpdate(){
        calcTotalPrice();
    }

    public void calcTotalPrice(){
        this.subTotal = 0;
        for (BookingItemEntity item : this.bookingItems){
            this.subTotal = this.subTotal + (long) item.getWork().getPricePerUnit() * item.getQuantity();
        }
        this.totalPrice = this.subTotal + this.movingFee;
    }

//    @PostPersist
//    @PostUpdate
//    private void postPersist(){
//        this.totalPrice = this.works.stream().mapToInt(WorkEntity::getPrice).sum();
//    }
}
