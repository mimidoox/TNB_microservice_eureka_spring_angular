package com.example.tnb.service;


import com.example.tnb.entity.Taxe;
import com.example.tnb.repository.TaxeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TaxeService {
	
	@Autowired
	TaxeRepository taxeRepository;

	public void  save(Taxe entity) {
		 taxeRepository.save(entity);
	}

	public List<Taxe> findAll() {
		return taxeRepository.findAll();
	}

	public void deleteById(Integer id) {
		taxeRepository.deleteById(id);
	}
	
	

}
