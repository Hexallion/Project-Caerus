package com.nea.projectcaerus.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.Data;

import javax.persistence.*;
import java.util.List;

@Entity
@Data
public class Population {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id")
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "demo_id")
    @JsonBackReference(value = "population-reference")
    private Demonstration demo;

    @OneToMany(mappedBy = "population", cascade = CascadeType.ALL)
    @JsonManagedReference(value = "dot-reference")
    private List<Dot> dots;

    private int noDead;

    private int noReachedGoal;

    @Override
    public String toString() {
        return "Population{" +
                "id=" + id +
                ", dots=" + dots +
                ", noDead=" + noDead +
                ", noReachedGoal=" + noReachedGoal +
                '}';
    }
}
