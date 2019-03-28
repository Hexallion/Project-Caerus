package com.nea.projectcaerus.entity;

import javax.persistence.*;

@Entity
public class Vector {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id")
    public Long DotId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "dot_id")
    public Dot dot;

    public float x;
    public float y;
    public float z;
}
