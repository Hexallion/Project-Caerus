package com.nea.projectcaerus.entity;

public class Settings {
    //Window settings
    private int canWidth;
    private int canHeight;
    private String canColour;
    private int fps;
    //----------------------------------

    //Population settings
    private int populationSize;
    private int lifeSpan;
    private int noGenerations;
    private Boolean sawtooth;
    private int reduction;
    private int period;
    //----------------------------------

    //Dot settings
    private int startX;
    private int startY;
    private int dotRadius;
    private String dotColour;
    private String bestDotColour;
    //----------------------------------

    //Goal Settings
    private int goalX;
    private int goalY;
    private int goalSize;
    private String goalColour;
    //----------------------------------

    //Obstacle Settings
    private int obstacleX;
    private int obstacleY;
    private int obstacleWidth;
    private int obstacleHeight;
    private String obstacleColour;
    //----------------------------------

    //Selection Settings
    private int tournamentParticipents;
    private String selectionType;
    //----------------------------------

    //Crossover settings
    private int noCrossings;
    //----------------------------------

    //Mutation Settings
    private float mutationRate;
    private String DotSpecificMutation;
    private String GeneSpecificMutation;
    private float currentMultiplyer;
    private float mutationMultiplyer;
}
