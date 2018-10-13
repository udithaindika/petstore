package com.javakandy.petstore.api;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.javakandy.petstore.model.Pet;
import com.javakandy.petstore.service.PetService;

@Validated
@RestController
@RequestMapping("/pets")
public class PetApi {

	@Autowired
	private PetService petService;
	
	@GetMapping
	public List<Pet> getAllPets(){
		return petService.getAllPets();
	}
	
	@PostMapping
	public Pet postPet(@RequestBody Pet pet) {
		return petService.createPet(pet);
	}	
}
