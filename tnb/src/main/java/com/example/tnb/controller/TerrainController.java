package com.example.tnb.controller;

import com.example.tnb.entity.Terrain;
import com.example.tnb.service.TerrainService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


import java.util.List;

@RequestMapping("/api/terrain")
@RestController
public class TerrainController {
	
	@Autowired
	TerrainService terainService;

	@PostMapping("/save")
	public void save(@RequestBody Terrain entity) {
		terainService.save(entity);
	}

	@GetMapping("/all")
	public List<Terrain> findAll() {
		return terainService.findAll();
	}

	@DeleteMapping("/delete/{id}")
	public void deleteById(@PathVariable Integer id) {
		terainService.deleteById(id);
	}

	

	@GetMapping("/findbycin/{cin}")
	public List<Terrain> findByRedevableCin(@PathVariable String cin) {
		return terainService.findByRedevableCin(cin);
	}

	@PutMapping("/update/{id}")
	public Terrain save(@RequestBody Terrain p, @PathVariable int id) {
		Terrain terain = terainService.findById(id);
		if (terain != null) {
			if (p.getNom() != null) {
				terain.setNom(p.getNom());

			}
			if (p.getDescription() != null) {
				terain.setDescription(p.getDescription());
			}

				terain.setSurface(p.getSurface());

			if(p.getRedevable() != null) {
				terain.setRedevable(p.getRedevable());
			}
			return terainService.save(terain);
		}
		return null;	}
	
	

}
