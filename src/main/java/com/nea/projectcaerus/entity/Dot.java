package com.nea.projectcaerus.entity;

import javax.persistence.*;
import java.util.List;

@Entity
public class Dot {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id")
    public Long DotId;


    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "population_id")
    public Population population;

    @OneToMany(mappedBy = "dot", cascade = CascadeType.ALL)
    public List<Vector> dna;

    public float fitness;
    public String status;
}
