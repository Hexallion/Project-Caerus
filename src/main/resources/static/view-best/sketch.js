/*
Project Caerus- By Peter Cresswell

sketch
Central script controlling the sketch
*/

//Setup the canvas
function setup() {
    //Initialises objects

    bestDots = [];
    generationNumber = 0;

    setupSettings();
    setupDots();
    Goal = new Goal();
    Obstacles = new Obstacles();

    //Setup canvas and other variables
    frameRate(Settings.fps);
    createCanvas(Settings.canWidth, Settings.canHeight);
}
//--------------------------------------------------------------------------------------------

//Setup Settings -> use Session storage, if not use default
function setupSettings() {
    if(sessionStorage.Settings){
        console.log("Session Settings exists!");
        Settings = JSON.parse(sessionStorage.Settings);
    }
    else{
        console.log("Session Settings does not exist :(");
    }
}
//--------------------------------------------------------------------------------------------

//Setup DOts -> use Session storage, if not use default
function setupDots() {
    if(sessionStorage.bestDotMovements){
        let importedBestDotMovements = JSON.parse(sessionStorage.getItem("bestDotMovements"));

        for(let generation of importedBestDotMovements){
            let bestDot = new BestDot(Settings.startX, Settings.startY);
            for(let movement of generation.bestDotDna){
                bestDot.movements.push(createVector(movement.x, movement.y));
            }
            bestDots.push(bestDot);
        }
    }
    else{
        console.log("Dots does not exist :(");
    }
}
//--------------------------------------------------------------------------------------------

//Draws onto the canvas and initiates the next step of the dot's movement
function draw() {
    noStroke();
    background(Settings.canColour);

    //Draws goal
    fill(Goal.goalColour);
    rect(Goal.goalVector.x, Goal.goalVector.y, Goal.goalSize, Goal.goalSize);
    //--------------------------------------------------------------------------------------------

    //Draws best dot
    fill(bestDots[generationNumber].dotColour);
    ellipse(bestDots[generationNumber].PVector.x, bestDots[generationNumber].PVector.y, Settings.dotRadius, Settings.dotRadius);
    //--------------------------------------------------------------------------------------------

    //Draws obstacles
    for (let obstacle of Obstacles.obstacles) {
        fill(Settings.obstacleColour);
        rect(obstacle.PVector.x, obstacle.PVector.y, obstacle.width, obstacle.height);
    }
    //--------------------------------------------------------------------------------------------

    //Draws the current generation number
    textSize(16);
    textStyle(BOLD);
    fill('black');
    text("Generation: " + generationNumber, 5, 20);
    //--------------------------------------------------------------------------------------------
    //Initiates next step
    NextStep();
}
//--------------------------------------------------------------------------------------------

//Dots make the next step, if at end of life, move onto next generation
function NextStep() {
    if (bestDots[generationNumber].currentStep < Settings.lifeSpan) {
        bestDots[generationNumber].NextStep();
    }
    else {
        //If at end display back button
        if (generationNumber >= Settings.noGenerations) {
            Finish();
        }
        generationNumber++;
    }
}
//--------------------------------------------------------------------------------------------

//Produced back button for user navigation
function Finish(){
	exitButton = createButton('Back');
	let eButtonX = (Settings.canWidth - exitButton.width) / 2;
	let eButtonY = (Settings.canHeight + exitButton.height) / 2;
	exitButton.position(eButtonX, eButtonY);
	exitButton.mousePressed(ExitDemo);
	noLoop();
}
//--------------------------------------------------------------------------------------------

//Changes location to be main webpage and clears session storage of the dots
function ExitDemo(){
	let host = window.location.host;
	let protocol = window.location.protocol;
	sessionStorage.removeItem("bestDotMovements");
	location.href = ( protocol + "//" + host);
}
//--------------------------------------------------------------------------------------------