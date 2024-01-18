package com.example.tnb.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;


import java.io.Serializable;
import java.util.List;

@Entity
public class Redevable  implements Serializable {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private String cin;
	private String nom;
	private String prenom;

	@OneToMany(fetch = FetchType.LAZY, mappedBy = "redevable", cascade = CascadeType.ALL, orphanRemoval = true)
	@JsonIgnore
	private List<Terrain> terrain;


	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getNom() {
		return nom;
	}

	public void setNom(String nom) {
		this.nom = nom;
	}

	public String getPrenom() {
		return prenom;
	}

	public void setPrenom(String prenom) {
		this.prenom = prenom;
	}

	public List<Terrain> getTerain() {
		return terrain;
	}

	public void setTerain(List<Terrain> terain) {
		this.terrain = terain;
	}

	public String getCin() {
		return cin;
	}

	public void setCin(String cin) {
		this.cin = cin;
	}
	
	

}
