package com.javakandy.petstore.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.javakandy.petstore.dao.OwnerDAO;
import com.javakandy.petstore.model.Owner;

@Service
public class OwnerService {

	@Autowired
	private OwnerDAO ownerDAO;
	
	@Transactional(readOnly=true)
	public List<Owner> getAllOwners(){
		return ownerDAO.findAll();
	}
}
