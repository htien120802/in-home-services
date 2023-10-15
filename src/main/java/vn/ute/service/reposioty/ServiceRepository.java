package vn.ute.service.reposioty;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import vn.ute.service.entity.ServiceEntity;

import java.util.List;
import java.util.UUID;

public interface ServiceRepository extends JpaRepository<ServiceEntity, UUID> {
    @Query(value = """
    select s from ServiceEntity s where s.status = 'APPROVED'
    """)
    List<ServiceEntity> findAllByStatusIsApproved();

    boolean existsByIdAndProvider_Account_Username(UUID serviceId, String providerUsername);
}
