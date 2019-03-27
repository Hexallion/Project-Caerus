package com.nea.projectcaerus.entity;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Dot {
    @Id
    public int DotId;

    public Vector[] dna;
    public float fitness;
    public String status;
}
