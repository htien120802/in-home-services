package vn.ute.service.reposioty;

import org.springframework.data.jpa.repository.JpaRepository;
import vn.ute.service.entity.CategoryEntity;

import java.util.UUID;

public interface CategoryRepository extends JpaRepository<CategoryEntity, UUID> {
}
