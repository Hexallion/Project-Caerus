/*
Project Caerus- By Peter Cresswell

Demonstration Entity

Entity defining the structure for the demonstration object to be saved in the repository
*/
package com.nea.projectcaerus.entity;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.Data;

import javax.persistence.*;
import java.util.List;


@Entity
@Table(name = "demonstrations")
//Automatically generated getters ans setters for variables
@Data
public class Demonstration {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id")
    private Long id; //Id assigned by DemoService

    //CascadeType.PERSIST used to ensure that all child objects are saved at the same time.
    @OneToMany(mappedBy = "demo", cascade = CascadeType.PERSIST)
    @JsonManagedReference(value = "population-reference")
    private List<Population> populations;

    //CascadeType.PERSIST used to ensure that all child objects are saved at the same time.
    @OneToOne(cascade = CascadeType.PERSIST)
    @JoinColumn(name = "settings_id", referencedColumnName = "id")
    @JsonManagedReference(value = "settings-reference")
    private Settings settings;

    @Column(name="DATE_CREATED")
    @Temporal(TemporalType.TIMESTAMP)
    private java.util.Date dateCreated = new java.util.Date();

    @Override
    public String toString() {
        return "Demonstration{" +
                "id=" + id +
                ", populations=" + populations +
                ", settings=" + settings +
                ", dateCreated=" + dateCreated +
                '}';
    }
}