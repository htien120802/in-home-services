package vn.ute.service;

import jakarta.annotation.PostConstruct;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.transaction.annotation.EnableTransactionManagement;
import vn.ute.service.dto.CoordinatesDto;
import vn.ute.service.entity.*;
import vn.ute.service.reposioty.*;
import vn.ute.service.service.BingMapService;

import java.io.FileInputStream;
import java.io.IOException;

@SpringBootApplication
@EnableTransactionManagement
public class ServiceApplication {
    @Autowired
    ServiceRepository serviceRepository;

    @Autowired
    ProviderRepository providerRepository;

    @Autowired
    AddressRepository addressRepository;

    @Autowired
    CategoryRepository categoryRepository;

    @Autowired
    WorkRepository workRepository;

    @Autowired
    AccountRepository accountRepository;

    @Autowired
    RoleRepository roleRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private CustomerRepository customerRepository;

    @Autowired
    private BingMapService bingMapService;

    @Autowired
    private ModelMapper mapper;

    public static void main(String[] args) {
        SpringApplication.run(ServiceApplication.class, args);
    }

//    @PostConstruct
//    public void TestGooglmap() throws IOException {
//        String add1 = "859 Nhất Chi Mai, Phường 13, Tân Bình, Thành phố Hồ Chí Minh, Việt Nam";
//        String add2 = "86 Lý Thường Kiệt, Phường 6, Tân Bình, Thành phố Hồ Chí Minh, Việt Nam";
//        CoordinatesDto location1 = googleMapService.getLocation(add1);
//        CoordinatesDto location2 = googleMapService.getLocation(add2);
//        System.out.println(googleMapService.calculateDistance(location1,location2));
//    }

//    @PostConstruct
//    public void createCategory(){
//        String[] categories = {"Clean", "Install, repair and maintain", "Human", "Pet", "Others"};
//        for ( String c : categories){
//            CategoryEntity category = new CategoryEntity();
//            category.setCategoryName(c);
//            categoryRepository.save(category);
//        }
//    }

//    @PostConstruct
//    public void createRole(){
//        String[] roles = {"ROLE_ADMIN", "ROLE_CUSTOMER", "ROLE_PROVIDER"};
//        for (String r : roles){
//            RoleEntity role = new RoleEntity();
//            role.setRoleName(r);
//            roleRepository.save(role);
//        }
//    }

//    @PostConstruct
//    public void creatAccountAdmin(){
//        AccountEntity account = new AccountEntity();
//        account.setUsername("admin");
//        account.setPassword(passwordEncoder.encode("admin"));
//        RoleEntity role = roleRepository.findByRoleName("ROLE_ADMIN");
//        account.getRoles().add(role);
//        accountRepository.save(account);
//    }

//    @PostConstruct
//    public void generateCustomer() throws IOException {
//        FileInputStream file = new FileInputStream("./home-service-server/src/main/resources/customer-1.xlsx");
//        Workbook workbook = new XSSFWorkbook(file);
//        Sheet sheet = workbook.getSheetAt(0);
//
//        for (Row row : sheet) {
//            // Get coachTypeId
//            Cell firstNameCell = row.getCell(7);
//            Cell lastNameCell = row.getCell(8);
//            Cell emailCell = row.getCell(9);
//            Cell phoneCell = row.getCell(1);
//            Cell addressCell = row.getCell(0);
//            Cell usernameCell = row.getCell(4);
//            Cell passwordCell = row.getCell(5);
//
//            if (firstNameCell != null && lastNameCell != null && emailCell != null && phoneCell != null && addressCell != null && usernameCell != null && passwordCell != null){
//                String firstName = firstNameCell.getStringCellValue();
//                String lastName = lastNameCell.getStringCellValue();
//                String email = emailCell.getStringCellValue();
//                String phone = phoneCell.getStringCellValue();
//                String username = usernameCell.getStringCellValue();
//                String password = passwordCell.getStringCellValue();
//                String address = addressCell.getStringCellValue();
//                String number = address.split(", ")[0].split(" ", 2)[0];
//                String street = address.split(", ")[0].split(" ", 2)[1];
//                String ward = address.split(", ")[1];
//                String district = address.split(", ")[2];
//                String city = address.split(", ")[3];
//
//                AccountEntity account = new AccountEntity();
//                account.setUsername(username);
//                account.setPassword(passwordEncoder.encode(password));
//                account.getRoles().add(roleRepository.findByRoleName("ROLE_CUSTOMER"));
////                account = accountRepository.save(account);
//
//
//                CustomerEntity customer = new CustomerEntity();
//                customer.setEmail(email);
//                customer.setPhone("0" + phone);
//                customer.setFirstName(firstName);
//                customer.setLastName(lastName);
//                customer.setAccount(account);
//                account.setCustomer(customer);
//                customer = customerRepository.save(customer);
//
//                AddressEntity addressEntity = new AddressEntity();
//                addressEntity.setNumber(number);
//                addressEntity.setStreet(street);
//                addressEntity.setWard(ward);
//                addressEntity.setDistrict(district);
//                addressEntity.setCity(city);
//                addressEntity.setCustomer(customer);
//
//                CoordinatesDto coordinatesDto = bingMapService.getLocation(addressEntity.toString());
//                CoordinatesEntity coordinates = mapper.map(coordinatesDto,CoordinatesEntity.class);
//                coordinates.setAddress(addressEntity);
//                addressEntity.setCoordinates(coordinates);
//                addressEntity = addressRepository.save(addressEntity);
//            }
//
//        }
//
//        workbook.close();
//        file.close();
//    }

//    @PostConstruct
//    public void generateProvider() throws IOException {
//        FileInputStream file = new FileInputStream("./home-service-server/src/main/resources/provider-1.xlsx");
//        Workbook workbook = new XSSFWorkbook(file);
//        Sheet sheet = workbook.getSheetAt(0);
//
//        for (Row row : sheet) {
//            // Get coachTypeId
//            Cell firstNameCell = row.getCell(7);
//            Cell lastNameCell = row.getCell(8);
//            Cell emailCell = row.getCell(9);
//            Cell phoneCell = row.getCell(1);
//            Cell addressCell = row.getCell(0);
//            Cell usernameCell = row.getCell(4);
//            Cell passwordCell = row.getCell(5);
//
//            if (firstNameCell != null && lastNameCell != null && emailCell != null && phoneCell != null && addressCell != null && usernameCell != null && passwordCell != null){
//                String firstName = firstNameCell.getStringCellValue();
//                String lastName = lastNameCell.getStringCellValue();
//                String email = emailCell.getStringCellValue();
//                String phone = phoneCell.getStringCellValue();
//                String username = usernameCell.getStringCellValue();
//                String password = passwordCell.getStringCellValue();
//                String address = addressCell.getStringCellValue();
//                String number = address.split(", ")[0].split(" ", 2)[0];
//                String street = address.split(", ")[0].split(" ", 2)[1];
//                String ward = address.split(", ")[1];
//                String district = address.split(", ")[2];
//                String city = address.split(", ")[3];
//
//                AccountEntity account = new AccountEntity();
//                account.setUsername(username);
//                account.setPassword(passwordEncoder.encode(password));
//                account.getRoles().add(roleRepository.findByRoleName("ROLE_PROVIDER"));
////                account = accountRepository.save(account);
//
//
//                ProviderEntity provider = new ProviderEntity();
//                provider.setEmail(email);
//                provider.setPhone("0" + phone);
//                provider.setFirstName(firstName);
//                provider.setLastName(lastName);
//                provider.setAccount(account);
//                account.setProvider(provider);
//                provider = providerRepository.save(provider);
//
//                AddressEntity addressEntity = new AddressEntity();
//                addressEntity.setNumber(number);
//                addressEntity.setStreet(street);
//                addressEntity.setWard(ward);
//                addressEntity.setDistrict(district);
//                addressEntity.setCity(city);
//                addressEntity.setProvider(provider);
//
//                CoordinatesDto coordinatesDto = bingMapService.getLocation(addressEntity.toString());
//                CoordinatesEntity coordinates = mapper.map(coordinatesDto,CoordinatesEntity.class);
//                coordinates.setAddress(addressEntity);
//                addressEntity.setCoordinates(coordinates);
//
//                addressEntity = addressRepository.save(addressEntity);
//            }
//
//        }
//
//        workbook.close();
//        file.close();
//    }
}
