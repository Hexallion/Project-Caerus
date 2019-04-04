/*
SmartDots Algorithm - By Peter Cresswell

sketch
Central script controlling the sketch
*/

//Setup the canvas
function setup() {
    //Initialtes objects

    bestDots = [];
    generationNumber = 0;

    setupSettings();
    Goal = new Goal();
    Obstacles = new Obstacles();

    //Setup canvas and other variables
    frameRate(Settings.fps);
    createCanvas(Settings.canWidth, Settings.canHeight);
}
//--------------------------------------------------------------------------------------------

//Setup Settings -> use Session storage, if not use default
function setupSettings() {
    if(sessionStorage.Settings && sessionStorage.bestDotMovements){
        console.log("Session Settings exists!");
        Settings = JSON.parse(sessionStorage.Settings);

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
        console.log("Session Settings does not exist :(");
    }
}
//--------------------------------------------------------------------------------------------

//Draws onto the canvas and initiates the next step of the dots movement
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

//Dots make the next step, if at end of life, initiate new generation
function NextStep() {
    if (bestDots[generationNumber].currentStep < Settings.lifeSpan) {
        bestDots[generationNumber].NextStep();
    }
    else {
        if (generationNumber >= Settings.noGenerations) {
            Finish();
        }
        generationNumber++;
    }
}
//--------------------------------------------------------------------------------------------

function Finish(){
	exitButton = createButton('Back');
	let eButtonX = (Settings.canWidth - exitButton.width) / 2;
	let eButtonY = (Settings.canHeight + exitButton.height) / 2;
	exitButton.position(eButtonX, eButtonY);
	exitButton.mousePressed(ExitDemo);
	noLoop();
}

function ExitDemo(){
	let host = window.location.host;
	let protocol = window.location.protocol;
	location.href = ( protocol + "//" + host);
}