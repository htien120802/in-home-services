package vn.ute.service.reposioty;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import vn.ute.service.entity.AccountEntity;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

public interface AccountRepository extends JpaRepository<AccountEntity, UUID> {
    boolean existsByCustomer_Email(String email);
    boolean existsByProvider_Email(String email);
    boolean existsByUsername(String username);

    Optional<AccountEntity> findByUsername(String username);
    @Query(value = """
    select a from AccountEntity a where a.customer.email = :email or a.provider.email = :email
    """)
    Optional<AccountEntity> findByEmail(String email);

}
