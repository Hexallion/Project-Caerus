package com.nea.projectcaerus.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.Data;

import javax.persistence.*;

//@EnableAutoConfiguration
@Entity
@Data
@Table(name = "settings")
public class Settings {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id")
    private Long id;

    @OneToOne(mappedBy = "settings")
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
    private Integer tournamentParticipents;
    private String selectionType;
    //----------------------------------

    //Crossover settings
    private Integer noCrossings;
    //----------------------------------

    //Mutation Settings
    private float mutationRate;
    private String DotSpecificMutation;
    private String GeneSpecificMutation;
    private float currentMultiplyer;
    private float mutationMultiplyer;

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
                ", tournamentParticipents=" + tournamentParticipents +
                ", selectionType='" + selectionType + '\'' +
                ", noCrossings=" + noCrossings +
                ", mutationRate=" + mutationRate +
                ", DotSpecificMutation='" + DotSpecificMutation + '\'' +
                ", GeneSpecificMutation='" + GeneSpecificMutation + '\'' +
                ", currentMultiplyer=" + currentMultiplyer +
                ", mutationMultiplyer=" + mutationMultiplyer +
                '}';
    }
}
