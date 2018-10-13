package com.javakandy.petstore.model;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotNull;

@Entity
public class Pet {

	@Column
	@NotNull
	private Date dateOfBirth;
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private Integer id;
	
	@Column
	@NotNull
	private String name;
	
    @Column
    @NotNull
    private Integer owner_id;
    
	public Date getDateOfBirth() {
		return dateOfBirth;
	}

	public Integer getId() {
		return id;
	}

	public String getName() {
		return name;
	}

	public Integer getOwner_id() {
		return owner_id;
	}

	public void setDateOfBirth(Date dateOfBirth) {
		this.dateOfBirth = dateOfBirth;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public void setName(String name) {
		this.name = name;
	}

	public void setOwner_id(Integer owner_id) {
		this.owner_id = owner_id;
	}
}
