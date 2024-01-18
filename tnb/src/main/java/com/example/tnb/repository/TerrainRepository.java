package com.example.tnb.repository;

import com.example.tnb.entity.Terrain;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface TerrainRepository extends JpaRepository<Terrain, Integer>{
	
	List<Terrain> findBySurface(double surface);
	
	
	List<Terrain> findByRedevableCin(String cin);

}
