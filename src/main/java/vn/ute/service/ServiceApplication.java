package vn.ute.service;

import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import vn.ute.service.entity.CategoryEntity;
import vn.ute.service.entity.DescriptionEntity;
import vn.ute.service.entity.ProviderEntity;
import vn.ute.service.entity.ServiceEntity;
import vn.ute.service.reposioty.CategoryRepository;
import vn.ute.service.reposioty.DescriptionRepository;
import vn.ute.service.reposioty.ProviderRepository;
import vn.ute.service.reposioty.ServiceRepository;
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

    public static void main(String[] args) {
        SpringApplication.run(ServiceApplication.class, args);
    }

    @PostConstruct
    public void initial(){
//        ServiceEntity service = new ServiceEntity();
//        service.setName("Cleaning kitchen");
//        service.setCategory(categoryRepository.findById(UUID.fromString("c0a80566-8aac-1d7c-818a-ac4d81510000")).get());
//        Set<DescriptionEntity> descriptions = service.getDescriptions();
//        descriptions.add(new DescriptionEntity("Wiping down countertops to remove crumbs, spills, and stains."));
//        descriptions.add(new DescriptionEntity("Cleaning the exterior of kitchen appliances, including the refrigerator, oven, microwave, dishwasher, and toaster."));
//
//        descriptions.add(new DescriptionEntity("Cleaning and degreasing the stovetop, range hood, and oven interior."));
//        descriptions.add(new DescriptionEntity("Cleaning and disinfecting the sink basin."));
//        descriptions.add(new DescriptionEntity("Polishing and cleaning the faucet."));
//
//        descriptions.add(new DescriptionEntity("Cleaning, disinfecting the trash, recycling bins and replacing trash bags as needed."));
//        service.setDescriptions(descriptions);
//        service.setProvider(providerRepository.findById(UUID.fromString("c0a80567-8ab1-1149-818a-b1714dd50000")).get());
//
//        serviceRepository.save(service);

//        List<DescriptionEntity> descriptionEntities = descriptionRepository.findAll();
//        ServiceEntity service = serviceRepository.findById(UUID.fromString("c0a80567-8ab1-1904-818a-b19909370000")).get();
//        for (DescriptionEntity description : descriptionEntities){
//            description.setService(service);
//            descriptionRepository.save(description);
//        }
    }

}
