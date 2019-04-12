/*
Project Caerus- By Peter Cresswell

Home Page component

Home page explaning what the site is about.
*Currently using Lorem ipsum as placeholder text will be changed soon.
*/
Vue.component('home', {
    name: "home",
    template: `
        <v-container>
            <v-subheader>
                <h3 class="black--text">Welcome!</h3>
            </v-subheader>
            
            <v-card>
                <v-card-text>
                    Project Caerus is an online genetic algorithm demonstrator! Feel free to have a look at previously run demonstrations and to run some of your own.
                </v-card-text>
                <v-card-text>
                    The genetic algorithm uses natural selection to find an approximation to the best solution. It works by creating a number of random solutions to the problem, then the best of those solutions are used to create the next generation of solutions. In creating the next batch of solutions there are many different ways to go from the previous generation to the next generation, these include: selection, crossover and mutation. Selection is the process where solutions from the previous generation are selected to form the basis of the next generation. Crossover is the process of merging two parents together by swapping parts of their solution. Mutation is randomly changing parts of the solution.  
                </v-card-text>
                <v-card-text>
                    In this example the problem is for a dot to find its way to the goal. Through the genetic algorithm the dots will 'learn' how to reach the goal. You can play around with the settings and see how changing values affect the performance of the algorithm. If you want to know more about the genetic algorithm or about different settings then take a look at the info page.
                </v-card-text>
            </v-card>
        </v-container>
    `
});