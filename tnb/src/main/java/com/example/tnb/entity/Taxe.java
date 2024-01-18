package com.example.tnb.entity;

import jakarta.persistence.*;

import java.io.Serializable;


@Entity
public class Taxe  implements Serializable {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private int Annee;
	private String description;
	private double montant;
	
	@ManyToOne
	private Category category;
	@ManyToOne
	private Redevable redevable;
	@ManyToOne
	private Terrain terrain;
	@ManyToOne
	private Taux taux;
	
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public int getAnnee() {
		return Annee;
	}
	public void setAnnee(int Anneet) {
		this.Annee = Anneet;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public double getMontant() {
		return montant;
	}
	public void setMontant(double montant) {
		this.montant = montant;
	}
	public Category getCategory() {
		return category;
	}
	public void setCategory(Category category) {
		this.category = category;
	}
	public Redevable getRedevable() {
		return redevable;
	}
	public void setRedevable(Redevable redevable) {
		this.redevable = redevable;
	}
	public Terrain getTerrain() {
		return terrain;
	}
	public void setTerrain(Terrain terrain) {
		this.terrain = terrain;
	}
	public Taux getTaux() {
		return taux;
	}
	public void setTaux(Taux taux) {
		this.taux = taux;
	}
	
	

}
