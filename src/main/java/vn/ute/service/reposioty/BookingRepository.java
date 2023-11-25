package vn.ute.service.reposioty;

import org.springframework.data.jpa.repository.JpaRepository;
import vn.ute.service.entity.BookingEntity;

import java.util.UUID;

public interface BookingRepository extends JpaRepository<BookingEntity, UUID> {
}
