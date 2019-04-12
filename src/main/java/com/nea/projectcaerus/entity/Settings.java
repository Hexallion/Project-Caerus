/*
Project Caerus- By Peter Cresswell

Settings Entity

Entity defining the structure for the Settings object to be saved in the repository
*/
package com.nea.projectcaerus.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.Data;

import javax.persistence.*;

//@EnableAutoConfiguration
@Entity
@Table(name = "settings")
//Automatically generated getters ans setters for variables
@Data
public class Settings {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id")
    private Long id;

    @OneToOne(mappedBy = "settings")
    //Prevents child containing parent, only contains reference
    @JsonBackReference(value = "settings-reference")
    private Demonstration demo;


    //Window settings
    private Integer canWidth;
    private Integer canHeight;
    private String canColour;
    private Integer fps;
    //----------------------------------

    //Population settings
    private Integer populationSize;
    private Integer lifeSpan;
    private Integer noGenerations;
    private Boolean sawtooth;
    private Integer reduction;
    private Integer period;
    //----------------------------------

    //Dot settings
    private Integer startX;
    private Integer startY;
    private Integer dotRadius;
    private String dotColour;
    private String bestDotColour;
    //----------------------------------

    //Goal Settings
    private Integer goalX;
    private Integer goalY;
    private Integer goalSize;
    private String goalColour;
    //----------------------------------

    //Obstacle Settings
    private Integer obstacleX;
    private Integer obstacleY;
    private Integer obstacleWidth;
    private Integer obstacleHeight;
    private String obstacleColour;
    //----------------------------------

    //Selection Settings
    private Integer tournamentParticipants;
    private String selectionType;
    //----------------------------------

    //Crossover settings
    private Integer noCrossings;
    //----------------------------------

    //Mutation Settings
    private float mutationRate;
    private String DotSpecificMutation;
    private String GeneSpecificMutation;
    private float currentMultiplier;
    private float mutationMultiplier;

    @Override
    public String toString() {
        return "Settings{" +
                "id=" + id +
                ", canWidth=" + canWidth +
                ", canHeight=" + canHeight +
                ", canColour='" + canColour + '\'' +
                ", fps=" + fps +
                ", populationSize=" + populationSize +
                ", lifeSpan=" + lifeSpan +
                ", noGenerations=" + noGenerations +
                ", sawtooth=" + sawtooth +
                ", reduction=" + reduction +
                ", period=" + period +
                ", startX=" + startX +
                ", startY=" + startY +
                ", dotRadius=" + dotRadius +
                ", dotColour='" + dotColour + '\'' +
                ", bestDotColour='" + bestDotColour + '\'' +
                ", goalX=" + goalX +
                ", goalY=" + goalY +
                ", goalSize=" + goalSize +
                ", goalColour='" + goalColour + '\'' +
                ", obstacleX=" + obstacleX +
                ", obstacleY=" + obstacleY +
                ", obstacleWidth=" + obstacleWidth +
                ", obstacleHeight=" + obstacleHeight +
                ", obstacleColour='" + obstacleColour + '\'' +
                ", tournamentParticipants=" + tournamentParticipants +
                ", selectionType='" + selectionType + '\'' +
                ", noCrossings=" + noCrossings +
                ", mutationRate=" + mutationRate +
                ", DotSpecificMutation='" + DotSpecificMutation + '\'' +
                ", GeneSpecificMutation='" + GeneSpecificMutation + '\'' +
                ", currentMultiplier=" + currentMultiplier +
                ", mutationMultiplier=" + mutationMultiplier +
                '}';
    }
}
