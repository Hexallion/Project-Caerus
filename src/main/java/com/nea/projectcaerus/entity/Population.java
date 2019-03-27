package com.nea.projectcaerus.entity;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Population {
    @Id
    public int PopulationId;

    public Dot[] dots;
}
