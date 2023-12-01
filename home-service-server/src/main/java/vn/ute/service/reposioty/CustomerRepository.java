package vn.ute.service.reposioty;

import org.springframework.data.jpa.repository.JpaRepository;
import vn.ute.service.entity.CustomerEntity;

import java.util.Optional;
import java.util.UUID;

public interface CustomerRepository extends JpaRepository<CustomerEntity, UUID> {
    Optional<CustomerEntity> findByAccount_Username(String username);
}
