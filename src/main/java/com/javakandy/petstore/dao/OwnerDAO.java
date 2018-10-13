package com.javakandy.petstore.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.javakandy.petstore.model.Owner;

@Repository
public interface OwnerDAO extends JpaRepository<Owner, Integer>{

}
