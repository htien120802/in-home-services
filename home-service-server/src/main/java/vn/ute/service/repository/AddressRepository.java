package vn.ute.service.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import vn.ute.service.entity.AddressEntity;

import java.util.Optional;
import java.util.UUID;

public interface AddressRepository extends JpaRepository<AddressEntity, UUID> {
    Optional<AddressEntity> findByIdAndProvider_Account_Username(UUID id, String username);
    Optional<AddressEntity> findByIdAndCustomer_Account_Username(UUID id, String username);
}
