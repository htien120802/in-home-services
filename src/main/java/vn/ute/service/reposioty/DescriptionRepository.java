package vn.ute.service.reposioty;

import org.springframework.data.jpa.repository.JpaRepository;
import vn.ute.service.entity.DescriptionEntity;

import java.util.UUID;

public interface DescriptionRepository extends JpaRepository<DescriptionEntity, UUID> {
}
