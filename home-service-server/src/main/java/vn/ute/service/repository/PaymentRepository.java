package vn.ute.service.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import vn.ute.service.entity.BookingEntity;
import vn.ute.service.entity.PaymentEntity;

import java.util.Optional;
import java.util.UUID;

public interface PaymentRepository extends JpaRepository<PaymentEntity, UUID> {
    Optional<PaymentEntity> findByBooking(BookingEntity booking);
    PaymentEntity findByBooking_Id(UUID bookingId);
}
