package com.example.tnb.service;


import com.example.tnb.entity.Redevable;
import com.example.tnb.repository.RedevableRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class RedevableService {
	
	@Autowired
	RedevableRepository redevableRepository;
	
	public void save(Redevable entity) {

		redevableRepository.save(entity);
	}

	public Redevable findById(int id){

		return redevableRepository.findById(id);

	}
	public List<Redevable> findAll() {
		
		return redevableRepository.findAll();
	}

	public void deleteById(Integer id) {
		
		redevableRepository.deleteById(id);
	}

	public Redevable findByCin(String cin) {
		return redevableRepository.findByCin(cin);
	}


	
	

}
