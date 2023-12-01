package vn.ute.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.security.crypto.password.PasswordEncoder;
import vn.ute.service.reposioty.*;

@SpringBootApplication
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

    public static void main(String[] args) {
        SpringApplication.run(ServiceApplication.class, args);
    }

//    @PostConstruct
//    public void generateCustomer() throws IOException {
//        FileInputStream file = new FileInputStream("./src/main/resources/customer-1.xlsx");
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
//                account = accountRepository.save(account);
//
//
//                CustomerEntity customer = new CustomerEntity();
//                customer.setEmail(email);
//                customer.setPhone(phone);
//                customer.setFirstName(firstName);
//                customer.setLastName(lastName);
//                customer.setAccount(account);
//                customer = customerRepository.save(customer);
//
//                AddressEntity addressEntity = new AddressEntity();
//                addressEntity.setNumber(number);
//                addressEntity.setStreet(street);
//                addressEntity.setWard(ward);
//                addressEntity.setDistrict(district);
//                addressEntity.setCity(city);
//                addressEntity.setCustomer(customer);
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
//        FileInputStream file = new FileInputStream("./src/main/resources/provider-1.xlsx");
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
//                account = accountRepository.save(account);
//
//
//                ProviderEntity provider = new ProviderEntity();
//                provider.setEmail(email);
//                provider.setPhone(phone);
//                provider.setFirstName(firstName);
//                provider.setLastName(lastName);
//                provider.setAccount(account);
//                provider = providerRepository.save(provider);
//
//                AddressEntity addressEntity = new AddressEntity();
//                addressEntity.setNumber(number);
//                addressEntity.setStreet(street);
//                addressEntity.setWard(ward);
//                addressEntity.setDistrict(district);
//                addressEntity.setCity(city);
//                addressEntity.setProvider(provider);
//                addressEntity = addressRepository.save(addressEntity);
//            }
//
//        }
//
//        workbook.close();
//        file.close();
//    }
}
