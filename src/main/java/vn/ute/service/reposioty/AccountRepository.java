package vn.ute.service.reposioty;

import io.swagger.v3.oas.annotations.Parameter;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import vn.ute.service.entity.AccountEntity;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

public interface AccountRepository extends JpaRepository<AccountEntity, UUID> {
    boolean existsByCustomer_Email(String email);
    boolean existsByProvider_Email(String email);
    boolean existsByUsername(String username);

    Optional<AccountEntity> findByUsername(String username);
    Optional<AccountEntity> findByCustomer_EmailOrProvider_Email(String email1, String email2);

}
