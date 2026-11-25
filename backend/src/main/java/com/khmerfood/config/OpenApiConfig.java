package com.khmerfood.config;

import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Contact;
import io.swagger.v3.oas.models.info.Info;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class OpenApiConfig {

    @Bean
    public OpenAPI khmerFoodOpenAPI() {
        return new OpenAPI()
                .info(new Info()
                        .title("KhmerFood REST API")
                        .description("Bilingual (Khmer/English) Cambodian Cooking Recipe Platform API")
                        .version("v1.0.0")
                        .contact(new Contact()
                                .name("KhmerFood Team")
                                .url("https://khmerfood.com")));
    }
}
