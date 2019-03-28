package com.nea.projectcaerus.entity;
import com.nea.projectcaerus.entity.*;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;

import javax.persistence.*;
import java.util.List;

//@EnableAutoConfiguration
@Entity
@Table(name = "demonstrations")
public class Demonstration {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id")
    public Long id; //Id assigned by DemoService

    @OneToMany(mappedBy = "demo", cascade = CascadeType.ALL)
    public List<Population> populations;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "settings_id", referencedColumnName = "id")
    public Settings settings;
}