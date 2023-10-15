package vn.ute.service.reposioty;

import org.springframework.data.jpa.repository.JpaRepository;
import vn.ute.service.entity.ProviderEntity;

import javax.swing.text.html.Option;
import java.util.Optional;
import java.util.UUID;

public interface ProviderRepository extends JpaRepository<ProviderEntity, UUID>{
    Optional<ProviderEntity> findByAccount_Username(String username);
}
