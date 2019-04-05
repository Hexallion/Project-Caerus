/*
Project Caerus - By Peter Cresswell

BestDot
Dot Object, used to contain the vectors and other details to make the sketch work
*/

function BestDot(startX, startY) {
    //Sets up the Dot
    this.PVector = createVector(startX, startY);
    this.VVector = createVector(0, 0);
    this.AVector = createVector(0, 0);
    this.dotColour = Settings.dotColour;
    this.status = 'Alive';
    this.movements = [];
    this.currentStep = 0;
    //--------------------------------------------------------------------------------------------

    //Applys the force to the dot.
    this.ApplyForce = function(force) {
        this.AVector = force;
        this.VVector.add(this.AVector);
        this.VVector.limit(5);
        this.PVector.add(this.VVector);
    };
    //--------------------------------------------------------------------------------------------

    //Applies the next dna action
    this.NextStep = function() {
        switch (this.status) {
            case 'Alive':
                this.intersectsObstacles();
                this.intersectsGoal();
                this.ApplyForce(this.movements[this.currentStep]);
                break;

            case 'Best':
                this.intersectsObstacles();
                this.intersectsGoal();
                this.ApplyForce(this.movements[this.currentStep]);
                break;

            case 'Dead':
                break;

            case 'Goal':
                break;
        }
        this.currentStep++;
        //console.log(this.currentStep);
    };
    //--------------------------------------------------------------------------------------------

    this.intersectsGoal = function() {
        if (this.PVector.x > Goal.goalVector.x && this.PVector.x < Goal.goalVector.x + Goal.goalSize) {
            //check if within y bounds
            if (this.PVector.y > Goal.goalVector.y && this.PVector.y < Goal.goalVector.y + Goal.goalSize) {
                this.status = 'Goal';
                this.dotColour = 'green';
            }
        }
    };

    this.intersectsObstacles = function() {
        //For every obstacle
        for (let obstacle of Obstacles.obstacles) {
            //check if within x bounds
            if (this.PVector.x > obstacle.PVector.x && this.PVector.x < obstacle.PVector.x + obstacle.width) {
                //check if within y bounds
                if (this.PVector.y > obstacle.PVector.y && this.PVector.y < obstacle.PVector.y + obstacle.height) {
                    this.status = 'Dead';
                    this.dotColour = 'red';
                }
            }
        }
    }
}