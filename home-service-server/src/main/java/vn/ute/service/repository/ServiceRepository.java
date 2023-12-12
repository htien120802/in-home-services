package vn.ute.service.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import vn.ute.service.entity.ProviderEntity;
import vn.ute.service.entity.ServiceEntity;
import vn.ute.service.enumerate.ServiceStatus;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

public interface ServiceRepository extends JpaRepository<ServiceEntity, UUID> {
    @Query(value = """
    select s from ServiceEntity s where s.status = 'APPROVED'
    """)
    List<ServiceEntity> findAllByStatusIsApproved();

    List<ServiceEntity> findAllByStatusIs(ServiceStatus status);

    List<ServiceEntity> findAllByProvider_Account_Username(String username);

    Optional<ServiceEntity> findByIdAndProvider(UUID serviceId, ProviderEntity provider);

}
