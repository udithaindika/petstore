package com.javakandy.petstore.model;

import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.validation.Valid;

@Entity
public class Owner {
	
	@Column
	@Valid
	private String firstName;
	
	@Id
	@Valid
	private Integer id;
	
	@Column
	@Valid
	private String lastName;
	
	@OneToMany
    @JoinColumn(name = "owner_id")
	private Set<Pet> pets;	
	
	
	public String getFirstName() {
		return firstName;
	}

	public Integer getId() {
		return id;
	}

	public String getLastName() {
		return lastName;
	}
	
	public Set<Pet> getPets() {
		return pets;
	}
	
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	
	public void setId(Integer id) {
		this.id = id;
	}
	
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	
	public void setPets(Set<Pet> pets) {
		this.pets = pets;
	}
}
