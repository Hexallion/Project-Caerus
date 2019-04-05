/*
Project Caerus- By Peter Cresswell

Vector Entity

Entity defining the structure for the Vector object to be saved in the repository
*/
package com.nea.projectcaerus.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.Data;

import javax.persistence.*;

@Entity
@Table(name = "vectors")
//Automatically generated getters ans setters for variables
@Data
public class Vector {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id")
    private Long vectorId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "population_id")
    //Prevents child containing parent, only contains reference
    @JsonBackReference(value = "dna-reference")
    private Population population;

    private float x;
    private float y;
    private float z;

    @Override
    public String toString() {
        return "Vector{" +
                "vectorId=" + vectorId +
                ", x=" + x +
                ", y=" + y +
                ", z=" + z +
                '}';
    }
}
