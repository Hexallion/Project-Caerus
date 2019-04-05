/*
Project Caerus- By Peter Cresswell

Population Entity

Entity defining the structure for the Population object to be saved in the repository
*/
package com.nea.projectcaerus.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.Data;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "populations")
//Automatically generated getters ans setters for variables
@Data
public class Population {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id")
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "demo_id")
    //Prevents child containing parent, only contains reference
    @JsonBackReference(value = "population-reference")
    private Demonstration demo;

    /*
    @OneToMany(mappedBy = "population", cascade = CascadeType.ALL)
    @JsonManagedReference(value = "dot-reference")
    private List<Dot> dots;
    */

    @OneToMany(mappedBy = "population", cascade = CascadeType.PERSIST)
    @JsonManagedReference(value = "dna-reference")
    private List<Vector> bestDotDna;

    private float bestDotFitness;

    private int noDead;

    private int noReachedGoal;

    @Override
    public String toString() {
        return "Population{" +
                "id=" + id +
                ", bestDotDna=" + bestDotDna +
                ", bestDotFitness=" + bestDotFitness +
                ", noDead=" + noDead +
                ", noReachedGoal=" + noReachedGoal +
                '}';
    }
}
