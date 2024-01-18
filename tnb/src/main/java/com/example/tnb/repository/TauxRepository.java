package com.example.tnb.repository;

import com.example.tnb.entity.Taux;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TauxRepository extends JpaRepository<Taux, Integer>{

	
	Taux findByCategoryLabel(String label);
}
