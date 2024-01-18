package com.example.tnb.service;

import com.example.tnb.entity.Category;
import com.example.tnb.repository.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CategoryService {
	
	@Autowired
	CategoryRepository categoryRepository;
	
	public void save(Category entity) {

		categoryRepository.save(entity);
	}

	public List<Category> findAll() {
		
		return categoryRepository.findAll();
	}

	public void deleteById(Integer id) {
		
		categoryRepository.deleteById(id);
	}

	public Category findById(Integer integer) {
		return categoryRepository.findById(integer).get();
	}
}
//