package com.nea.projectcaerus.entity;
import com.nea.projectcaerus.entity.*;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;

import javax.persistence.*;

@EnableAutoConfiguration
@Entity
@Table(name = "demonstrations")
public class Demonstration {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "DemoId")
    public String DemoId; //Id assigned by DemoService

    //public Population[] populations;

    @OneToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    //@JoinColumn(name = "settings_id", referencedColumnName = "SettingsId")
    public Settings settings;
}