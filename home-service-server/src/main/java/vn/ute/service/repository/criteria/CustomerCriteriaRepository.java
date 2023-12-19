package vn.ute.service.repository.criteria;

import jakarta.persistence.EntityManager;
import jakarta.persistence.TypedQuery;
import jakarta.persistence.criteria.*;
import org.springframework.data.domain.*;
import org.springframework.stereotype.Repository;
import vn.ute.service.entity.AccountEntity;
import vn.ute.service.entity.CustomerEntity;

import java.util.ArrayList;
import java.util.List;
@Repository
public class CustomerCriteriaRepository {
    private final EntityManager entityManager;
    private final CriteriaBuilder criteriaBuilder;

    public CustomerCriteriaRepository(EntityManager entityManager) {
        this.entityManager = entityManager;
        this.criteriaBuilder = entityManager.getCriteriaBuilder();
    }

    public Page<CustomerEntity> findAllWithFilters(int pageNumber, int size, Sort.Direction sortDirection, String sortBy, String name, String email, String username){
        CriteriaQuery<CustomerEntity> criteriaQuery = criteriaBuilder.createQuery(CustomerEntity.class);
        Root<CustomerEntity> customerRoot = criteriaQuery.from(CustomerEntity.class);
        criteriaQuery.select(customerRoot);

        Predicate predicate = getPredicate(name, email, username, customerRoot);
        criteriaQuery.where(predicate);
        setOrder(sortDirection, sortBy, criteriaQuery, customerRoot);

        TypedQuery<CustomerEntity> typedQuery = entityManager.createQuery(criteriaQuery);
        typedQuery.setFirstResult(pageNumber * size);
        typedQuery.setMaxResults(size);

        Pageable pageable = getPageable(pageNumber, size, sortDirection, sortBy);

        long customersCount = getCustomersCount(name, email, username);

        return new PageImpl<>(typedQuery.getResultList(), pageable, customersCount);
    }



    private Predicate getPredicate(String name, String email, String username, Root<CustomerEntity> customerRoot) {


        List<Predicate> predicates = new ArrayList<>();
        if (name != null){
            List<Predicate> temp = new ArrayList<>();
            temp.add(criteriaBuilder.like(customerRoot.get("firstName"), "%" + name.toLowerCase() + "%"));
            temp.add(criteriaBuilder.like(customerRoot.get("lastName"), "%" + name.toLowerCase() + "%"));
            predicates.add(criteriaBuilder.or(temp.toArray(new Predicate[0])));
        }

        if (email != null){
            predicates.add(criteriaBuilder.equal(customerRoot.get("email"),email));
        }

        if (username != null){
            Join<CustomerEntity, AccountEntity> account = customerRoot.join("account");
            predicates.add(criteriaBuilder.equal(account.get("username"), username));
        }

        return criteriaBuilder.and(predicates.toArray(new Predicate[0]));
    }

    private void setOrder(Sort.Direction sortDirection, String sortBy, CriteriaQuery<CustomerEntity> criteriaQuery, Root<CustomerEntity> customerRoot) {
        if (sortDirection.equals(Sort.Direction.ASC)){
            criteriaQuery.orderBy(criteriaBuilder.asc(customerRoot.get(sortBy)));
        } else {
            criteriaQuery.orderBy(criteriaBuilder.desc(customerRoot.get(sortBy)));
        }
    }

    private Pageable getPageable(int pageNumber, int size, Sort.Direction sortDirection, String sortBy) {
        Sort sort = Sort.by(sortDirection, sortBy);
        return PageRequest.of(pageNumber,size, sort);
    }

    private long getCustomersCount(String name, String email, String username) {
        CriteriaQuery<Long> countQuery = criteriaBuilder.createQuery(Long.class);
        Root<CustomerEntity> countRoot = countQuery.from(CustomerEntity.class);
        Predicate predicate = getPredicate(name, email, username, countRoot);
        countQuery.select(criteriaBuilder.count(countRoot)).where(predicate);
        return entityManager.createQuery(countQuery).getSingleResult();
    }
}
