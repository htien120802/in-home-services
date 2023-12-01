package vn.ute.service.reposioty;

import org.springframework.data.jpa.repository.JpaRepository;
import vn.ute.service.entity.AddressEntity;

import java.util.UUID;

public interface AddressRepository extends JpaRepository<AddressEntity, UUID> {
    boolean existsByIdAndAndCustomer_Account_Username(UUID id, String username);
}
