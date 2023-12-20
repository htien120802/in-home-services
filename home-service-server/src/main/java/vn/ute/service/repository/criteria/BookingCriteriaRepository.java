package vn.ute.service.repository.criteria;

import jakarta.persistence.EntityManager;
import jakarta.persistence.TypedQuery;
import jakarta.persistence.criteria.*;
import org.springframework.data.domain.*;
import org.springframework.stereotype.Repository;
import vn.ute.service.entity.*;
import vn.ute.service.enumerate.BookingStatus;

import java.util.ArrayList;
import java.util.List;

@Repository
public class BookingCriteriaRepository {
    private final EntityManager entityManager;
    private final CriteriaBuilder criteriaBuilder;

    public BookingCriteriaRepository(EntityManager entityManager) {
        this.entityManager = entityManager;
        this.criteriaBuilder = entityManager.getCriteriaBuilder();
    }

    public Page<BookingEntity> findAllWithFilters(int pageNumber, int size, BookingStatus bookingStatus, String providerName, String customerName, String serviceCategorySlug){
        CriteriaQuery<BookingEntity> criteriaQuery = criteriaBuilder.createQuery(BookingEntity.class);
        Root<BookingEntity> bookingRoot = criteriaQuery.from(BookingEntity.class);
        criteriaQuery.select(bookingRoot);

        Predicate predicate = getPredicate(bookingStatus, providerName, customerName, serviceCategorySlug, bookingRoot);
        criteriaQuery.where(predicate);
        setOrder(criteriaQuery, bookingRoot);

        TypedQuery<BookingEntity> typedQuery = entityManager.createQuery(criteriaQuery);
        typedQuery.setFirstResult(pageNumber * size);
        typedQuery.setMaxResults(size);

        Pageable pageable = getPageable(pageNumber, size);

        long bookingsCount = getBookingsCount(bookingStatus, providerName, customerName, serviceCategorySlug);

        return new PageImpl<>(typedQuery.getResultList(), pageable, bookingsCount);
    }



    private Predicate getPredicate(BookingStatus bookingStatus, String providerName, String customerName, String serviceCategorySlug, Root<BookingEntity> bookingRoot) {


        List<Predicate> predicates = new ArrayList<>();
        if (bookingStatus != null){
            predicates.add(criteriaBuilder.equal(bookingRoot.get("status"),bookingStatus));
        }

        if (providerName != null){
            List<Predicate> temp = new ArrayList<>();
            Join<BookingEntity, ProviderEntity> provider = bookingRoot.join("provider");
            temp.add(criteriaBuilder.like(provider.get("firstName"),"%" + providerName + "%"));
            temp.add(criteriaBuilder.like(provider.get("lastName"),"%" + providerName + "%"));
            predicates.add(criteriaBuilder.or(temp.toArray(new Predicate[0])));
        }

        if (customerName != null){
            List<Predicate> temp = new ArrayList<>();
            Join<BookingEntity, CustomerEntity> customer = bookingRoot.join("customer");
            temp.add(criteriaBuilder.like(customer.get("firstName"),"%" + customerName + "%"));
            temp.add(criteriaBuilder.like(customer.get("lastName"),"%" + customerName + "%"));
            predicates.add(criteriaBuilder.or(temp.toArray(new Predicate[0])));
        }

        if (serviceCategorySlug != null){
            Join<BookingEntity, ServiceEntity> service = bookingRoot.join("service");
            Join<ServiceEntity, CategoryEntity> category = service.join("category");
            predicates.add(criteriaBuilder.equal(category.get("slug"),serviceCategorySlug));
        }

        return criteriaBuilder.and(predicates.toArray(new Predicate[0]));
    }

    private void setOrder(CriteriaQuery<BookingEntity> criteriaQuery, Root<BookingEntity> bookingRoot) {
        criteriaQuery.orderBy(criteriaBuilder.desc(bookingRoot.get("date")), criteriaBuilder.desc(bookingRoot.get("time")));
    }

    private Pageable getPageable(int pageNumber, int size) {
        Sort sort = Sort.by(Sort.Direction.DESC, "date").and(Sort.by(Sort.Direction.DESC, "time"));
        return PageRequest.of(pageNumber,size, sort);
    }

    private long getBookingsCount(BookingStatus bookingStatus, String providerName, String customerName, String serviceCategorySlug) {
        CriteriaQuery<Long> countQuery = criteriaBuilder.createQuery(Long.class);
        Root<BookingEntity> countRoot = countQuery.from(BookingEntity.class);
        Predicate predicate = getPredicate(bookingStatus, providerName, customerName, serviceCategorySlug, countRoot);
        countQuery.select(criteriaBuilder.count(countRoot)).where(predicate);
        return entityManager.createQuery(countQuery).getSingleResult();
    }
}
