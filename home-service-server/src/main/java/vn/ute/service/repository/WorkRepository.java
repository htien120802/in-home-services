package vn.ute.service.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import vn.ute.service.entity.ServiceEntity;
import vn.ute.service.entity.WorkEntity;

import java.util.UUID;

public interface WorkRepository extends JpaRepository<WorkEntity, UUID> {
    boolean existsByIdAndService(UUID id, ServiceEntity service);
}
