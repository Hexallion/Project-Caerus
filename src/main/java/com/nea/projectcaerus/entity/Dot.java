package com.nea.projectcaerus.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.Data;

import javax.persistence.*;
import java.util.List;

@Entity
@Data
public class Dot {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id")
    private Long DotId;


    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "population_id")
    @JsonBackReference(value = "dot-reference")
    private Population population;

    @OneToMany(mappedBy = "dot", cascade = CascadeType.ALL)
    @JsonManagedReference(value = "vector-reference")
    private List<Vector> dna;

    private float fitness;
    private String status;

    @Override
    public String toString() {
        return "Dot{" +
                "DotId=" + DotId +
                ", dna=" + dna +
                ", fitness=" + fitness +
                ", status='" + status + '\'' +
                '}';
    }
}
