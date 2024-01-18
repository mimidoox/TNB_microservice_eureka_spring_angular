package com.example.tnb.service;


import com.example.tnb.entity.Taux;
import com.example.tnb.repository.TauxRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TauxService {
	
	@Autowired
	TauxRepository tauxRepository;

	public Taux findByCategoryLabel(String label) {
		return tauxRepository.findByCategoryLabel(label);
	}

	public void save(Taux entity) {
		 tauxRepository.save(entity);
	}

	public List<Taux> findAll() {
		return tauxRepository.findAll();
	}

	public Optional<Taux> findById(Integer id) {
		return tauxRepository.findById(id);
	}

	public void deleteById(Integer id) {
		tauxRepository.deleteById(id);
	}


	

}
