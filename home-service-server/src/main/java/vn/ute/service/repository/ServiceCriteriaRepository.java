package vn.ute.service.repository;

import jakarta.persistence.EntityManager;
import jakarta.persistence.TypedQuery;
import jakarta.persistence.criteria.*;
import org.springframework.data.domain.*;
import org.springframework.stereotype.Repository;
import vn.ute.service.entity.CategoryEntity;
import vn.ute.service.entity.ServiceEntity;
import vn.ute.service.enumerate.ServiceStatus;

import java.util.ArrayList;
import java.util.List;
@Repository
public class ServiceCriteriaRepository {
    private final EntityManager entityManager;
    private final CriteriaBuilder criteriaBuilder;

    public ServiceCriteriaRepository(EntityManager entityManager) {
        this.entityManager = entityManager;
        this.criteriaBuilder = entityManager.getCriteriaBuilder();
    }

    public Page<ServiceEntity> findAllWithFilters(int pageNumber, int size, Sort.Direction sortDirection, String sortBy, String name, String categorySlug, String rating){
        CriteriaQuery<ServiceEntity> criteriaQuery = criteriaBuilder.createQuery(ServiceEntity.class);
        Root<ServiceEntity> serviceRoot = criteriaQuery.from(ServiceEntity.class);
        criteriaQuery.select(serviceRoot);

        Predicate predicate = getPredicate(name, categorySlug, rating, serviceRoot);
        criteriaQuery.where(predicate);
        setOrder(sortDirection, sortBy, criteriaQuery, serviceRoot);

        TypedQuery<ServiceEntity> typedQuery = entityManager.createQuery(criteriaQuery);
        typedQuery.setFirstResult(pageNumber * size);
        typedQuery.setMaxResults(size);

        Pageable pageable = getPageable(pageNumber, size, sortDirection, sortBy);

        long servicesCount = getCustomersCount(name, categorySlug, rating);

        return new PageImpl<>(typedQuery.getResultList(), pageable, servicesCount);
    }

    public List<ServiceEntity> findAllWithFilters(String name, String categorySlug, String rating){
        CriteriaQuery<ServiceEntity> criteriaQuery = criteriaBuilder.createQuery(ServiceEntity.class);
        Root<ServiceEntity> serviceRoot = criteriaQuery.from(ServiceEntity.class);
        criteriaQuery.select(serviceRoot);

        Predicate predicate = getPredicate(name, categorySlug, rating, serviceRoot);
        criteriaQuery.where(predicate);

        TypedQuery<ServiceEntity> typedQuery = entityManager.createQuery(criteriaQuery);

        return typedQuery.getResultList();
    }





    private Predicate getPredicate(String name, String categorySlug, String rating, Root<ServiceEntity> serviceRoot) {


        List<Predicate> predicates = new ArrayList<>();
        predicates.add(criteriaBuilder.equal(serviceRoot.get("status"), ServiceStatus.APPROVED));
        if (name != null){
            predicates.add(criteriaBuilder.like(serviceRoot.get("name"),"%" + name.toLowerCase() + "%"));
        }

        if (categorySlug != null){
            Join<ServiceEntity, CategoryEntity> category = serviceRoot.join("category");
            predicates.add(criteriaBuilder.equal(category.get("slug"),categorySlug));
        }

        if (rating != null){
            predicates.add(criteriaBuilder.greaterThan(serviceRoot.get("avgRating"), rating));
        }

        return criteriaBuilder.and(predicates.toArray(new Predicate[0]));
    }

    private void setOrder(Sort.Direction sortDirection, String sortBy, CriteriaQuery<ServiceEntity> criteriaQuery, Root<ServiceEntity> serviceRoot) {
        if (sortDirection.equals(Sort.Direction.ASC)){
            criteriaQuery.orderBy(criteriaBuilder.asc(serviceRoot.get(sortBy)));
        } else {
            criteriaQuery.orderBy(criteriaBuilder.desc(serviceRoot.get(sortBy)));
        }
    }

    private Pageable getPageable(int pageNumber, int size, Sort.Direction sortDirection, String sortBy) {
        Sort sort = Sort.by(sortDirection, sortBy);
        return PageRequest.of(pageNumber,size, sort);
    }

    private long getCustomersCount(String name, String categorySlug, String rating) {
        CriteriaQuery<Long> countQuery = criteriaBuilder.createQuery(Long.class);
        Root<ServiceEntity> countRoot = countQuery.from(ServiceEntity.class);
        Predicate predicate = getPredicate(name, categorySlug, rating, countRoot);
        countQuery.select(criteriaBuilder.count(countRoot)).where(predicate);
        return entityManager.createQuery(countQuery).getSingleResult();
    }
}
