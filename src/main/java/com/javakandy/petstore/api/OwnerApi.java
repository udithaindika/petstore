package com.javakandy.petstore.api;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.javakandy.petstore.model.Owner;
import com.javakandy.petstore.service.OwnerService;

@RestController
@RequestMapping("/owners")
public class OwnerApi {

	@Autowired
	private OwnerService ownerService;
	
	@GetMapping
	public List<Owner> getOwners(){
		return ownerService.getAllOwners();
	}
}
