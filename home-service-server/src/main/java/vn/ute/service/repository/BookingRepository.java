package vn.ute.service.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import vn.ute.service.entity.BookingEntity;
import vn.ute.service.entity.CustomerEntity;
import vn.ute.service.entity.ProviderEntity;
import vn.ute.service.entity.ServiceEntity;
import vn.ute.service.enumerate.BookingStatus;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

public interface BookingRepository extends JpaRepository<BookingEntity, UUID> {
    Page<BookingEntity> findAllByCustomer(CustomerEntity customer, Pageable pageable);

    Page<BookingEntity> findAllByCustomerAndStatus(CustomerEntity customer, BookingStatus bookingStatus, Pageable pageable);

    Page<BookingEntity> findAllByProvider(ProviderEntity provider, Pageable pageable);

    Page<BookingEntity> findAllByProviderAndStatus(ProviderEntity provider, BookingStatus bookingStatus, Pageable pageable);
    List<BookingEntity> findAllByCustomerAndStatus(CustomerEntity customer, BookingStatus status);
    Optional<BookingEntity> findByCustomerAndService(CustomerEntity customer, ServiceEntity service);

    Optional<BookingEntity> findByIdAndCustomer(UUID id, CustomerEntity customer);

    Optional<BookingEntity> findByIdAndProvider(UUID id, ProviderEntity provider);

    Optional<BookingEntity> findByCustomerAndServiceAndStatus(CustomerEntity customer, ServiceEntity service, BookingStatus status);

    long countAllByStatus(BookingStatus status);
}
