package com.example.tnbauth;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

@EnableDiscoveryClient
@SpringBootApplication
public class TnbauthApplication {

	public static void main(String[] args) {
		SpringApplication.run(TnbauthApplication.class, args);
	}

}
