/*
Project Caerus- By Peter Cresswell

Info page component

Info page explaning the genetic algorithm and what the different settings do
*/
Vue.component('info', {
    name: "info",
    template: `
        <v-container>
            <v-subheader>
                <h3 class="black--text">Information</h3>
            </v-subheader>
            
            <v-card>
                <v-card-text>
                    <b>Genetic Algorithm:</b><br/>
                    The genetic algorithm uses the principle of natural selection to search for an optimal solution. Genetic Algorithms are usually used to search for global optimal solutions however they are not guaranteed to find the global optimal solution. 
                    <br/>Genetic Algorithms normally made up of a variety of sections; Fitness, Selection, Crossover, Mutation. Within each of these sections there are a variety of different methods which can be used 
                </v-card-text>
                <v-card-text>
                    <b>Fitness:</b><br/>
                    The fitness function is used to evaluate the performance of the entities in the population. The fitness function is the only connection between the actual problem and the algorithm so it needs to be chosen with care to fully express the problem. This means that the fitness function is highly specialised.<br/>
                    * Currently the fitness function uses the distance from the goal to calculate the fitness of each dot.
                </v-card-text>
                <v-card-text>
                    <b>Selection:</b><br/>
                    The selection function uses the fitness function to select the parents for the next generation. There is no definite selection function as it all depends on how you want the algorithm to function, however there are common ones used.<br/>
                    The number of parents chosen can change, however it is usual to have the same number of parents as the size of population so that the population size will remain constant 
                </v-card-text>
                <v-card-text>
                    <b>Crossover:</b><br/>
                    Crossover is where parts of the parents are interchanged to make the next generation. For example, if you had only 1 crossover point then the child would have the first half of their genes from parent A and the second half from parent B. 
                </v-card-text>
                <v-card-text>
                    <b>Mutation:</b><br/>
                    Mutation is the part which changes/ mutates the genes. It can be done a number of different ways, changing what happens with the mutations and also choosing what is mutated. The most common way is to give every gene a random chance of mutation, this can then be taken further by first having individuals have a random chance of mutation and then having only their genes be able to be mutated. Within the mutation you could choose to either modify the existing gene or completely override it. 
                </v-card-text>
            </v-card>
            
            <v-subheader>
                <h3 class="black--text">Settings</h3>
            </v-subheader>
            
            <v-card>
                <v-card-text>
                    <b>Population:</b><br/>
                    Population Size - Number of individuals in each generation.<br/>
                    Lifespan - Number of instructions (movements) carried out before going on to the next generation.<br/>
                    Number of Generations - Number of generations created before ending the demonstration.<br/>
                    Sawtooth - Over a number of generations (Period) the population size is reduced by a set amount (Reduction) until it is then boosted up to the default by new random individuals. 
                </v-card-text>
                <v-card-text>
                    <b>Selection Settings:</b><br/>
                    Proportional Selection - Individuals are selected directly proportional to their fitness value.<br/>
                    Ranking Selection - Individuals are selected in regards to their ranking. (ranked in order of fitness)<br/>
                    Tournament Selection - A random number of participants are selected from the generation (Tournament Participants) and the best is then selected for the next generation. This process is repeated until all the individuals needed are selected. 
                </v-card-text>
                <v-card-text>
                    <b>Crossover Settings:</b><br/>
                    Number of crossings - The number of times that the genes of the parents are swapped. 
                </v-card-text>
                <v-card-text>
                    <b>Mutation Settings:</b><br/>
                    Mutation Rate - The probability that the individual/ gene will be mutated.<br/>
                    Dot Specific Mutation - If true each dot has a chance to mutate, if false all dots get mutated.<br/>
                    Gene Specific Mutation - If true each gene has a chance to mutate, if false all genes get mutated. (Genes are only mutated when the dot is selected to be mutated)<br/>
                    Current Gene Multiplier - Amount of the current gene that is present in the mutated gene.
                    Mutation Gene Multiplier - Amount of the mutation gene that is present in the mutated gene.
                </v-card-text>
            </v-card>
        </v-container>
    `
});