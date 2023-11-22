package vn.ute.service;

import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import vn.ute.service.entity.*;
import vn.ute.service.reposioty.*;
import vn.ute.service.service.ServiceService;

import java.util.List;
import java.util.Set;
import java.util.UUID;

@SpringBootApplication
public class ServiceApplication {
    @Autowired
    ServiceRepository serviceRepository;

    @Autowired
    ProviderRepository providerRepository;

    @Autowired
    CategoryRepository categoryRepository;

    @Autowired
    DescriptionRepository descriptionRepository;

    @Autowired
    AccountRepository accountRepository;

    @Autowired
    RoleRepository roleRepository;

    public static void main(String[] args) {
        SpringApplication.run(ServiceApplication.class, args);
    }

    @PostConstruct
    public void initial(){
//
//
//        AccountEntity account = accountRepository.findByCustomer_EmailOrProvider_Email("dhtien120802@gmail.com","dhtien120802@gmail.com").orElse(null);
//        System.out.println(account.getCustomer().getEmail());
    }

}
