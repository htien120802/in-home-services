package vn.ute.service.repository.criteria;

import jakarta.persistence.EntityManager;
import jakarta.persistence.TypedQuery;
import jakarta.persistence.criteria.*;
import org.springframework.data.domain.*;
import org.springframework.stereotype.Repository;
import vn.ute.service.entity.*;

import java.util.ArrayList;
import java.util.List;

@Repository
public class ReviewCriteriaRepository {
    private final EntityManager entityManager;
    private final CriteriaBuilder criteriaBuilder;

    public ReviewCriteriaRepository(EntityManager entityManager) {
        this.entityManager = entityManager;
        this.criteriaBuilder = entityManager.getCriteriaBuilder();
    }

    public Page<ReviewEntity> findAllWithFilters(int pageNumber, int size, int rating, String customerName, String serviceName){
        CriteriaQuery<ReviewEntity> criteriaQuery = criteriaBuilder.createQuery(ReviewEntity.class);
        Root<ReviewEntity> reviewRoot = criteriaQuery.from(ReviewEntity.class);
        criteriaQuery.select(reviewRoot);

        Predicate predicate = getPredicate(rating, customerName, serviceName, reviewRoot);
        criteriaQuery.where(predicate);
        setOrder(criteriaQuery, reviewRoot);

        TypedQuery<ReviewEntity> typedQuery = entityManager.createQuery(criteriaQuery);
        typedQuery.setFirstResult(pageNumber * size);
        typedQuery.setMaxResults(size);

        Pageable pageable = getPageable(pageNumber, size);

        long reviewsCount = getReviewsCount(rating, customerName, serviceName);

        return new PageImpl<>(typedQuery.getResultList(), pageable, reviewsCount);
    }



    private Predicate getPredicate(int rating, String customerName, String serviceName, Root<ReviewEntity> reviewRoot) {


        List<Predicate> predicates = new ArrayList<>();
        if (rating > 0){
            predicates.add(criteriaBuilder.equal(reviewRoot.get("rating"),rating));
        }

        if (customerName != null){
            List<Predicate> temp = new ArrayList<>();
            Join<ReviewEntity, CustomerEntity> customer = reviewRoot.join("customer");
            temp.add(criteriaBuilder.like(customer.get("firstName"),"%" + customerName + "%"));
            temp.add(criteriaBuilder.like(customer.get("lastName"),"%" + customerName + "%"));
            predicates.add(criteriaBuilder.or(temp.toArray(new Predicate[0])));
        }

        if (serviceName != null){
            Join<ReviewEntity, ServiceEntity> service = reviewRoot.join("service");
            predicates.add(criteriaBuilder.equal(service.get("name"),"%" + serviceName.toLowerCase() + "%"));
        }

        return criteriaBuilder.and(predicates.toArray(new Predicate[0]));
    }

    private void setOrder(CriteriaQuery<ReviewEntity> criteriaQuery, Root<ReviewEntity> reviewRoot) {
        criteriaQuery.orderBy(criteriaBuilder.desc(reviewRoot.get("date")));
    }

    private Pageable getPageable(int pageNumber, int size) {
        Sort sort = Sort.by(Sort.Direction.DESC, "date");
        return PageRequest.of(pageNumber,size, sort);
    }

    private long getReviewsCount(int rating, String customerName, String serviceName) {
        CriteriaQuery<Long> countQuery = criteriaBuilder.createQuery(Long.class);
        Root<ReviewEntity> countRoot = countQuery.from(ReviewEntity.class);
        Predicate predicate = getPredicate(rating, customerName, serviceName, countRoot);
        countQuery.select(criteriaBuilder.count(countRoot)).where(predicate);
        return entityManager.createQuery(countQuery).getSingleResult();
    }
}
