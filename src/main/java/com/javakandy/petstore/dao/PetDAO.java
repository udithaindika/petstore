package com.javakandy.petstore.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.javakandy.petstore.model.Pet;

@Repository
public interface PetDAO extends JpaRepository<Pet, Integer>{

}
