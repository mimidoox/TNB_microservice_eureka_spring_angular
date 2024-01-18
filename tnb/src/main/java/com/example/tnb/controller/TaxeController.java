package com.example.tnb.controller;

import com.example.tnb.entity.Taxe;
import com.example.tnb.service.TaxeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin("*")
@RestController
@RequestMapping("/api/taxe")
public class TaxeController {

	@Autowired
	TaxeService taxServier;

	@PostMapping("/save")
	public void save(@RequestBody Taxe entity) {
		taxServier.save(entity);
	}

	@GetMapping("/all")
	public List<Taxe> findAll() {
		return taxServier.findAll();
	}

	@DeleteMapping("/delete/{id}")
	public void deleteById(@PathVariable Integer id) {
		taxServier.deleteById(id);
	}
	
	
	
	
	
}
