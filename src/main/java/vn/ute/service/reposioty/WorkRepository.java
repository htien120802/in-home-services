package vn.ute.service.reposioty;

import org.springframework.data.jpa.repository.JpaRepository;
import vn.ute.service.entity.WorkEntity;

import java.util.UUID;

public interface WorkRepository extends JpaRepository<WorkEntity, UUID> {
}
