package vn.ute.service.reposioty;

import org.springframework.data.jpa.repository.JpaRepository;
import vn.ute.service.entity.ProviderEntity;

import java.util.UUID;

public interface ProviderRepository extends JpaRepository<ProviderEntity, UUID>{
}
