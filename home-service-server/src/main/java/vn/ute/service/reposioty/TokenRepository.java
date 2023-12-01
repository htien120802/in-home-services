package vn.ute.service.reposioty;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import vn.ute.service.entity.TokenEntity;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

public interface TokenRepository extends JpaRepository<TokenEntity, UUID> {
    @Query(value = """
      select t from TokenEntity t inner join AccountEntity a\s
      on t.account.id = a.id\s
      where a.id = :id and (t.expired = false or t.revoked = false)\s
      """)
    List<TokenEntity> findAllValidTokenByAccount(UUID id);
    Optional<TokenEntity> findByToken(String token);
}
