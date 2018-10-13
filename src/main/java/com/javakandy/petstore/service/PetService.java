package com.javakandy.petstore.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.javakandy.petstore.dao.PetDAO;
import com.javakandy.petstore.model.Pet;

@Service
public class PetService {

	@Autowired
	private PetDAO petDAO;
	
	@Transactional
	public Pet createPet(Pet pet) {
		return petDAO.saveAndFlush(pet);
	}
	
	@Transactional(readOnly=true)
	public List<Pet> getAllPets(){
		return petDAO.findAll();
	}
}
