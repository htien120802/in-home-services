package vn.ute.service.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import vn.ute.service.entity.BookingEntity;
import vn.ute.service.entity.CustomerEntity;
import vn.ute.service.entity.ProviderEntity;
import vn.ute.service.entity.ServiceEntity;
import vn.ute.service.enumerate.BookingStatus;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

public interface BookingRepository extends JpaRepository<BookingEntity, UUID> {
    Page<BookingEntity> findAllByCustomer(CustomerEntity customer, Pageable pageable);

    Page<BookingEntity> findAllByCustomerAndStatus(CustomerEntity customer, BookingStatus bookingStatus, Pageable pageable);

    Page<BookingEntity> findAllByProvider(ProviderEntity provider, Pageable pageable);

    Page<BookingEntity> findAllByProviderAndStatus(ProviderEntity provider, BookingStatus bookingStatus, Pageable pageable);
    List<BookingEntity> findAllByCustomerAndStatus(CustomerEntity customer, BookingStatus status);
    Optional<BookingEntity> findByCustomerAndService(CustomerEntity customer, ServiceEntity service);

    Optional<BookingEntity> findByIdAndCustomer(UUID id, CustomerEntity customer);

    Optional<BookingEntity> findByIdAndProvider(UUID id, ProviderEntity provider);

    Optional<BookingEntity> findByCustomerAndServiceAndStatus(CustomerEntity customer, ServiceEntity service, BookingStatus status);

    long countAllByStatus(BookingStatus status);

    @Query("""
    select b.date, count(b.id)
    from BookingEntity b 
    where b.status = 'DONE' and function('YEAR',b.date) = :year and function('MONTH',b.date) = :month
    group by b.date 
    order by b.date asc 
    """)
    List<Object[]> quantityStatistics(@Param("month") int month, @Param("year") int year);
    @Query("""
    select function('MONTH',b.date), count(b.id)
    from BookingEntity b 
    where b.status = 'DONE' and function('YEAR',b.date) = :year
    group by function('MONTH',b.date) 
    order by function('MONTH',b.date) asc 
    """)
    List<Object[]> quantityStatistics(@Param("year") int year);

    @Query("""
    select b.date, sum(b.totalPrice)
    from BookingEntity b 
    where b.status = 'DONE' and function('YEAR',b.date) = :year and function('MONTH',b.date) = :month
    group by b.date 
    order by b.date asc 
    """)
    List<Object[]> salesStatistics(@Param("month") int month, @Param("year") int year);

    @Query("""
    select function('MONTH',b.date), sum(b.totalPrice)
    from BookingEntity b 
    where b.status = 'DONE' and function('YEAR',b.date) = :year
    group by function('MONTH',b.date) 
    order by function('MONTH',b.date) asc 
    """)
    List<Object[]> salesStatistics(@Param("year") int year);
    @Query("""
    select b.date, count(b.id)
    from BookingEntity b 
    where b.provider = :provider and b.status = 'DONE' and function('YEAR',b.date) = :year and function('MONTH',b.date) = :month
    group by b.date 
    order by b.date asc 
    """)
    List<Object[]> quantityStatisticsForProvider(@Param("month") int month, @Param("year") int year, @Param("provider") ProviderEntity provider);
    @Query("""
    select function('MONTH',b.date), count(b.id)
    from BookingEntity b 
    where b.provider = :provider and b.status = 'DONE' and function('YEAR',b.date) = :year
    group by function('MONTH',b.date) 
    order by function('MONTH',b.date) asc 
    """)
    List<Object[]> quantityStatisticsForProvider(@Param("year") int year, @Param("provider") ProviderEntity provider);

    @Query("""
    select b.date, sum(b.totalPrice)
    from BookingEntity b 
    where b.provider = :provider and b.status = 'DONE' and function('YEAR',b.date) = :year and function('MONTH',b.date) = :month
    group by b.date 
    order by b.date asc 
    """)
    List<Object[]> salesStatisticsForProvider(@Param("month") int month, @Param("year") int year, @Param("provider") ProviderEntity provider);

    @Query("""
    select function('MONTH',b.date), sum(b.totalPrice)
    from BookingEntity b 
    where b.provider = :provider and b.status = 'DONE' and function('YEAR',b.date) = :year
    group by function('MONTH',b.date) 
    order by function('MONTH',b.date) asc 
    """)
    List<Object[]> salesStatisticsForProvider(@Param("year") int year, @Param("provider") ProviderEntity provider);
}
