package vn.ute.service.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import vn.ute.service.entity.CustomerEntity;
import vn.ute.service.entity.ReviewEntity;
import vn.ute.service.entity.ServiceEntity;

import java.util.Optional;
import java.util.UUID;

public interface ReviewRepository extends JpaRepository<ReviewEntity, UUID> {
    Optional<ReviewEntity> findByCustomerAndService(CustomerEntity customer, ServiceEntity service);
}
