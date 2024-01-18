package com.example.tnb.service;

import com.example.tnb.entity.Terrain;
import com.example.tnb.repository.TerrainRepository;
import com.example.tnb.repository.TerrainRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TerrainService {

	@Autowired
	TerrainRepository terrainRepository;

	public Terrain save(Terrain entity) {

		return terrainRepository.save(entity);
	}

	public Terrain findById(Integer integer) {
		return terrainRepository.findById(integer).get();
	}

	public List<Terrain> findAll() {
		return terrainRepository.findAll();
	}

	public void deleteById(Integer id) {
		terrainRepository.deleteById(id);
	}

	public List<Terrain> findBySurface(double surface) {
		
		return terrainRepository.findBySurface(surface);
	}

	public List<Terrain> findByRedevableCin(String cin) {
		return terrainRepository.findByRedevableCin(cin);
	}

}
