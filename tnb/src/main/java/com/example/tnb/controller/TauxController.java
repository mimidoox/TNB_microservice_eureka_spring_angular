package com.example.tnb.controller;

import com.example.tnb.entity.Taux;
import com.example.tnb.service.TauxService;
import com.example.tnb.entity.Taux;
import com.example.tnb.service.TauxService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin("*")
//restapi
@RestController
@RequestMapping("/api/taux")
public class TauxController {
	@Autowired
	TauxService tauxService;

	@GetMapping("/findbylabel/{label}")
	public Taux findByCategoryLabel(@PathVariable String label) {
		return tauxService.findByCategoryLabel(label);
	}

	@PostMapping("/save")
	public void save(@RequestBody Taux entity) {
		tauxService.save(entity);
	}

	@GetMapping("/all")
	public List<Taux> findAll() {
		return tauxService.findAll();
	}

	@GetMapping("/findbyid/{id}")
	public Taux findById(@PathVariable Integer id) {
		return tauxService.findById(id).get();
	}

	@DeleteMapping("/delete/{id}")
	public void deleteById(@PathVariable Integer id) {
		tauxService.deleteById(id);
	}

}
