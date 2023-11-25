package vn.ute.service.reposioty;

import org.springframework.data.jpa.repository.JpaRepository;
import vn.ute.service.entity.PaymentEntity;

import java.util.UUID;

public interface PaymentRepository extends JpaRepository<PaymentEntity, UUID> {
}
