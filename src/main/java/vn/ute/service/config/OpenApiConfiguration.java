package vn.ute.service.config;


import io.swagger.v3.oas.models.Components;
import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Contact;
import io.swagger.v3.oas.models.info.Info;
import io.swagger.v3.oas.models.info.License;
import io.swagger.v3.oas.models.security.SecurityRequirement;
import io.swagger.v3.oas.models.security.SecurityScheme;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class OpenApiConfiguration {
    @Bean
    public OpenAPI customOpenAPI() {
        var contact = new Contact()
                .name("Dang Huu Tien")
                .email("dhtien120802@gmail.com");
        var license = new License()
                .name("MIT License")
                .url("https://choosealicense.com/licenses/mit/");
        var info = new Info()
                .title("Inhome Service")
                .version("1.0")
                .contact(contact)
                .description("This APIs are used for inhome service website.")
                .license(license);
        var securityRequirement = new SecurityRequirement()
                .addList("Bearer Authentication");
        var securityScheme = new SecurityScheme()
                .name("Bearer Authentication")
                .type(SecurityScheme.Type.HTTP)
                .scheme("Bearer")
                .bearerFormat("JWT");
        var components = new Components()
                .addSecuritySchemes("Bearer Authentication", securityScheme);
        return new OpenAPI()
                .info(info)
                .addSecurityItem(securityRequirement)
                .components(components);
//        return new OpenAPI().info(new
//                        Info().title("Authorization").version("1.0").description("Bearer access_token"))
//                .addSecurityItem(new SecurityRequirement().addList("Authorization"))
//                .components(new Components().addSecuritySchemes("Authorization",
//                        new SecurityScheme().name("Authorization").type(SecurityScheme.Type.HTTP).scheme("bearer")));
    }
}
