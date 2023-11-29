package vn.ute.service.reposioty;

import org.springframework.data.jpa.repository.JpaRepository;
import vn.ute.service.entity.BookingEntity;
import vn.ute.service.entity.CustomerEntity;
import vn.ute.service.enumerate.BookingStatus;

import java.util.List;
import java.util.UUID;

public interface BookingRepository extends JpaRepository<BookingEntity, UUID> {
    List<BookingEntity> findAllByCustomer(CustomerEntity customer);
    List<BookingEntity> findAllByCustomerAndStatus(CustomerEntity customer, BookingStatus status);
}
