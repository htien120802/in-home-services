package vn.ute.service.repository.criteria;

import jakarta.persistence.EntityManager;
import jakarta.persistence.TypedQuery;
import jakarta.persistence.criteria.*;
import org.springframework.data.domain.*;
import org.springframework.stereotype.Repository;
import vn.ute.service.entity.AccountEntity;
import vn.ute.service.entity.ProviderEntity;

import java.util.ArrayList;
import java.util.List;
@Repository
public class ProviderCriteriaRepository {
    private final EntityManager entityManager;
    private final CriteriaBuilder criteriaBuilder;

    public ProviderCriteriaRepository(EntityManager entityManager) {
        this.entityManager = entityManager;
        this.criteriaBuilder = entityManager.getCriteriaBuilder();
    }

    public Page<ProviderEntity> findAllWithFilters(int pageNumber, int size, Sort.Direction sortDirection, String sortBy, String name, String email, String username){
        CriteriaQuery<ProviderEntity> criteriaQuery = criteriaBuilder.createQuery(ProviderEntity.class);
        Root<ProviderEntity> providerRoot = criteriaQuery.from(ProviderEntity.class);
        criteriaQuery.select(providerRoot);

        Predicate predicate = getPredicate(name, email, username, providerRoot);
        criteriaQuery.where(predicate);
        setOrder(sortDirection, sortBy, criteriaQuery, providerRoot);

        TypedQuery<ProviderEntity> typedQuery = entityManager.createQuery(criteriaQuery);
        typedQuery.setFirstResult(pageNumber * size);
        typedQuery.setMaxResults(size);

        Pageable pageable = getPageable(pageNumber, size, sortDirection, sortBy);

        long providersCount = getProvidersCount(name, email, username);

        return new PageImpl<>(typedQuery.getResultList(), pageable, providersCount);
    }



    private Predicate getPredicate(String name, String email, String username, Root<ProviderEntity> providerRoot) {


        List<Predicate> predicates = new ArrayList<>();
        if (name != null){
            List<Predicate> temp = new ArrayList<>();
            temp.add(criteriaBuilder.like(providerRoot.get("firstName"), "%" + name.toLowerCase() + "%"));
            temp.add(criteriaBuilder.like(providerRoot.get("lastName"), "%" + name.toLowerCase() + "%"));
            predicates.add(criteriaBuilder.or(temp.toArray(new Predicate[0])));
        }

        if (email != null){
            predicates.add(criteriaBuilder.equal(providerRoot.get("email"),email));
        }

        if (username != null){
            Join<ProviderEntity, AccountEntity> account = providerRoot.join("account");
            predicates.add(criteriaBuilder.equal(account.get("username"), username));
        }

        return criteriaBuilder.and(predicates.toArray(new Predicate[0]));
    }

    private void setOrder(Sort.Direction sortDirection, String sortBy, CriteriaQuery<ProviderEntity> criteriaQuery, Root<ProviderEntity> providerRoot) {
        if (sortDirection.equals(Sort.Direction.ASC)){
            criteriaQuery.orderBy(criteriaBuilder.asc(providerRoot.get(sortBy)));
        } else {
            criteriaQuery.orderBy(criteriaBuilder.desc(providerRoot.get(sortBy)));
        }
    }

    private Pageable getPageable(int pageNumber, int size, Sort.Direction sortDirection, String sortBy) {
        Sort sort = Sort.by(sortDirection, sortBy);
        return PageRequest.of(pageNumber,size, sort);
    }

    private long getProvidersCount(String name, String email, String username) {
        CriteriaQuery<Long> countQuery = criteriaBuilder.createQuery(Long.class);
        Root<ProviderEntity> countRoot = countQuery.from(ProviderEntity.class);
        Predicate predicate = getPredicate(name, email, username, countRoot);
        countQuery.select(criteriaBuilder.count(countRoot)).where(predicate);
        return entityManager.createQuery(countQuery).getSingleResult();
    }
}
