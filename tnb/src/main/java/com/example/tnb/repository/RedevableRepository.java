package com.example.tnb.repository;

import com.example.tnb.entity.Redevable;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RedevableRepository extends JpaRepository<Redevable, Integer>{

	Redevable findByCin(String cin);
	Redevable findById(int id);
}
