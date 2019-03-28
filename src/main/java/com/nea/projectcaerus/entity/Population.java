package com.nea.projectcaerus.entity;

import javax.persistence.*;
import java.util.List;

@Entity
public class Population {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id")
    public Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "demo_id")
    public Demonstration demo;

    @OneToMany(mappedBy = "population", cascade = CascadeType.ALL)
    public List<Dot> dots;
}
