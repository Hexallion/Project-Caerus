package com.nea.projectcaerus.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

//@EnableAutoConfiguration
@Entity
@Table(name = "settings")
public class Settings {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id")
    public Long id;

    @OneToOne(mappedBy = "settings")
    public Demonstration demoId;


    //Window settings
    public Integer canWidth;
    public Integer canHeight;
    public String canColour;
    public Integer fps;
    //----------------------------------

    //Population settings
    public Integer populationSize;
    public Integer lifeSpan;
    public Integer noGenerations;
    public Boolean sawtooth;
    public Integer reduction;
    public Integer period;
    //----------------------------------

    //Dot settings
    public Integer startX;
    public Integer startY;
    public Integer dotRadius;
    public String dotColour;
    public String bestDotColour;
    //----------------------------------

    //Goal Settings
    public Integer goalX;
    public Integer goalY;
    public Integer goalSize;
    public String goalColour;
    //----------------------------------

    //Obstacle Settings
    public Integer obstacleX;
    public Integer obstacleY;
    public Integer obstacleWidth;
    public Integer obstacleHeight;
    public String obstacleColour;
    //----------------------------------

    //Selection Settings
    public Integer tournamentParticipents;
    public String selectionType;
    //----------------------------------

    //Crossover settings
    public Integer noCrossings;
    //----------------------------------

    //Mutation Settings
    public float mutationRate;
    public String DotSpecificMutation;
    public String GeneSpecificMutation;
    public float currentMultiplyer;
    public float mutationMultiplyer;
}
