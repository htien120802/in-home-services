package vn.ute.service.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import vn.ute.service.entity.RoleEntity;

import java.util.UUID;

public interface RoleRepository extends JpaRepository<RoleEntity, UUID> {
    RoleEntity findByRoleName(String roleName);
}
