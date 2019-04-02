package com.nea.projectcaerus.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.Data;

import javax.persistence.*;

@Entity
@Data
public class Vector {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id")
    private Long vectorId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "dot_id")
    @JsonBackReference(value = "vector-reference")
    private Dot dot;

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
