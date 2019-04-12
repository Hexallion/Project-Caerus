/*
Project Caerus- By Peter Cresswell

view-demo Page component

Used for viewing a list of all previously run demonstrations and also details on specific demonstrations
*/
Vue.component('view-demo', {
    name: "view-demo",
    template: `
	<v-layout>
		<!-- details on specific demonstration -->
		<v-container grid-list-md align-center v-if="page === null">
			<v-layout>
				<v-flex shrink align-self-center>
					<v-btn icon @click="viewPages()" pa-0 ma-0>
						<v-icon> arrow_left </v-icon>
					</v-btn>		
				</v-flex>	
				<v-flex grow>
					<v-subheader>
						<h3 class="black--text">Demonstration ID: {{demo.id}}</h3>
					</v-subheader>
					<v-subheader>
						<h3 class="black--text">Date Created: {{demo.dateCreated}} </h3>
					</v-subheader>
				</v-flex>
			</v-layout>
			<v-layout wrap mx>
				<v-expansion-panel>
					<v-expansion-panel-content>
						<template v-slot:header>
							<div>Settings</div>
						</template>
						<v-container ma-1 pt-1>
							<v-expansion-panel>
								<v-expansion-panel-content v-for="group in settings" :key="group.groupName">
									<template v-slot:header>
										<div>{{group.groupName}}</div>
									</template>
									
									<v-sheet v-for="setting in group.subSettings" :key="setting.setting">
										<v-container py-0 my-0>
											{{setting.setting}}: {{setting.value}}
										</v-container>
										
										<v-container py-0 my-0 v-if="(setting.type==='boolean' && setting.value) || setting.value==='Tournament Selection'"
										v-for="subSetting in setting.subSettings" :key="subSetting.setting">
											{{subSetting.setting}}: {{subSetting.value}}
										</v-container>	
									</v-sheet>
								</v-expansion-panel-content>
							</v-expansion-panel>
						</v-container>
					</v-expansion-panel-content>
				</v-expansion-panel>	
				
				<v-flex py-2>
					<v-card>
						<v-card-title>
						Idle Dots
						</v-card-title>
						
						<v-card-text>
						<v-sparkline :value="noIdleDots" height="100" stroke-linecap="round" smooth auto-draw/>
						</v-card-text>
					</v-card>
				</v-flex>
				
				<v-flex py-2 >
					<v-card>
						<v-card-title>
						Number of dots dead
						</v-card-title>
						
						<v-card-text>
							<v-sparkline :value="noDead" height="100" stroke-linecap="round" smooth auto-draw/>
						</v-card-text>
					</v-card>				
				</v-flex>
			</v-layout>
			
			<v-card>
				<v-card-title>
				Number of dots which reached the Goal
				</v-card-title>
				
				<v-card-text>
					<v-sparkline :value="noReachedGoal" height="100" stroke-linecap="round" smooth auto-draw/>
				</v-card-text>
			</v-card>	
			<v-flex shrink align-self-center>
				<v-btn @click="replayBestDots()" pa-0 ma-0>Replay Best Dots</v-btn>		
			</v-flex>				
		</v-container>
		
		<!-- List if previously run demonstrations-->
		<v-container v-else transition="slide-x-transition">
			<v-subheader justify-cente>
				<h3 class="black--text">Saved Demos</h3>
			</v-subheader>
			
			<v-card>
				<v-list v-for="demo in page.content" :key="demo.id">
					<v-list-tile @click="selectDemo(demo.id)">
					
						<v-list-tile-content>
							<v-list-tile-title>Demonstration Id: {{ demo.id }}</v-list-tile-title>
							<v-list-tile-sub-title>{{ demo.dateCreated }}</v-list-tile-sub-title>
						</v-list-tile-content>

						<v-list-tile-action>
							<v-btn icon ripple>
								<v-icon> arrow_right </v-icon>
							</v-btn>
						</v-list-tile-action>
					</v-list-tile>
					<v-flex mx-2 px-2 my-0 py-0 v-if="demo.id != page.content[page.numberOfElements - 1].id">
						<v-divider></v-divider>
					</v-flex>
				</v-list>
				<v-pagination
				  v-model="pageNumber"
				  :length="page.totalPages"
				  :total-visible="7"
				></v-pagination>
			</v-card>
		</v-container>
	</v-layout>
    `,
    data() {
        return {
			page: null,
			pageNumber: 1,
			demo: undefined,
			noDead: [],
			noReachedGoal: [],
			noIdleDots: [],
			settings: [
			{
				groupName: 'Canvas Settings:',
				subSettings: [{
                setting: 'Canvas Width',
				alias: 'canWidth',
                type: "number",
                value: undefined
            },
			{
				setting: 'Canvas Height',
				alias: 'canHeight',
				type: "number",
				value: undefined
			},
			{
				setting: 'Canvas Colour',
				alias: 'canColour',	
				type: "multiple",
				value: undefined
			},
			{
				setting: 'FPS',
				alias: 'fps',
				type: "number",
				value: undefined
			}]
			},
			{
				groupName: 'Population Settings:',
				subSettings: [{
					setting: 'Population Size',
					alias: 'populationSize',
					type: "number",
					value: undefined
				},
				{
					setting: 'Lifespan',
					alias: 'lifeSpan',
					type: "number",
					value: undefined
				},
				{
					setting: 'Number of Generations',	
					alias: 'noGenerations',
					type: "number",
					value: undefined
				},
				{
					setting: 'Sawtooth',
					alias: 'sawtooth',
					type: "boolean",
					value: false,
					subSettings: [{
						setting: 'Reduction',
						alias: 'reduction',
						type: "number",
						value: undefined
					},
					{
						setting: 'Period',
						alias: 'period',
						type: "number",
						value: undefined
					}]
				}]
			},
			{
				groupName: 'Dot Settings:',
				subSettings: [{
					setting: 'Start X',
					alias: 'startX',
					type: "number",
					value: undefined
				},
				{
					setting: 'Start Y',
					alias: 'startY',
					type: "number",
					value: undefined
				},
				{
					setting: 'Dot Size',
					alias: 'dotRadius',
					type: "number",
					value: undefined
				},
				{
					setting: 'Dot Colour',
					alias: 'dotColour',
					type: "multiple",
					value: undefined
				}]
			},
			{
				groupName: 'Goal Settings:',
				subSettings: [{
					setting: 'Goal X',
					alias: 'goalX',
					type: "number",
					value: undefined
				},
				{
					setting: 'Goal Y',
					alias: 'goalY',
					type: "number",
					value: undefined
				},
				{
					setting: 'Goal Size',
					alias: 'goalSize',
					type: "number",
					value: undefined
				},
				{
					setting: 'Goal Colour',
					alias: 'goalColour',
					type: "multiple",
					value: undefined
				}]
			},
			{
				groupName: 'Obstacle Settings:',
				subSettings: [{
					setting: 'Obstacle X',
					alias: 'obstacleX',
					type: "number",
					value: undefined
				},
				{
					setting: 'Obstacle Y',
					alias: 'obstacleY',
					type: "number",
					value: undefined
				},
				{
					setting: 'Obstacle Width',
					alias: 'obstacleWidth',
					type: "number",
					value: undefined
				},
				{
					setting: 'Obstacle Height',
					alias: 'obstacleHeight',
					type: "number",
					value: undefined
				},
				{
					setting: 'Obstacle Colour',
					alias: 'obstacleColour',
					type: "multiple",
					value: undefined
				}]
			},
			{
				groupName: 'Selection Settings:',
				subSettings: [{
					setting: 'Selection Type',
					alias: 'selectionType',
					type: "multiple",
					value: undefined,
					subSettings: [{
							setting: 'Tournament Participants',
							alias: 'tournamentParticipants',
							type: "number",
							value: undefined
						}]
					}]
			},
			{
				groupName: 'Crossover Settings:',
				subSettings: [{
					setting: 'Number of crossings',
					alias: 'noCrossings',
					type: "number",
					value: undefined
				}]
			},
			{
				groupName: 'Mutation Settings:',
				subSettings: [{
					setting: 'Mutation Rate',
					alias: 'mutationRate',
					type: "number",
					value: undefined
				},
				{
					setting: 'Dot Specific Mutation',
					alias: 'DotSpecificMutation',
					type: "boolean",
					value: false
				},
				{
					setting: 'Gene Specific Mutation',
					alias: 'GeneSpecificMutation',
					type: "boolean",
					value: true
				},
				{
					setting: 'Current Gene Multiplier',
					alias: 'currentMultiplier',
					type: "number",
					value: undefined
				},
				{
					setting: 'Mutation Gene Multiplier',
					alias: 'mutationMultiplier',
					type: "number",
					value: undefined
				}]
			}]
        }
    },
	beforeMount() {
		console.log("Mounting view-demo");
		//If demoId supplied display details about said demo
    	if(sessionStorage.demoId) {
			this.getDemo();
		}else{
    		this.getPage();
		}
    },
    methods: {
    	//Gets demo from server
        getDemo(){
			this.$http.get('/viewResult/' + sessionStorage.getItem("demoId")).then(response => {
				this.demo = response.body;
				this.populate();
				this.analyse();
			}, response => {
				console.log(response);
				//If server is unavailable demo could have been stored in session storage.
				//Try catch to see if demo is in session storage
				try{
					this.demo = JSON.parse(sessionStorage.getItem("demo"));
					this.populate();
					this.analyse();
				}
				catch(error){
					console.log("Unable to get Demo from session storage!");
				}
			})
		},

		//Used to get the page of demonstrations from the server
		getPage(){
			this.$http.get('/viewDemos/' + (this.pageNumber - 1)).then(response => {
    			console.log(response.body);
				this.page = response.body;
			}, response =>{
				console.log(response);
    		})
		},

		//Populates the settings data object -> allows settings to be grouped
		populate(){
			console.log("Populating settings...");
			for(group of this.settings){
				for(setting of group.subSettings){
					setting.value = this.demo.settings[setting.alias];
					
					if(setting.subSettings !== undefined){
						for(subSetting of setting.subSettings){
							subSetting.value = this.demo.settings[subSetting.alias];
						}
					}
				}
			}
			console.log("Finnished populating settings...");
		},

		//Analyses results from demo - numbers of dots over time
		analyse(){
			for(let index in this.demo.populations){
				let population = this.demo.populations[index];
				this.noDead.push(population.noDead);
				this.noReachedGoal.push(population.noReachedGoal);
				let reduction = 0;
				if (this.demo.settings.sawtooth === true) {
					reduction = ((index % this.demo.settings.period) * this.demo.settings.reduction)
				}
				this.noIdleDots.push(this.demo.settings.populationSize - population.noDead - population.noReachedGoal - reduction);

				console.log("noDead=" + this.noDead + ", noReachedGoal=" + this.noReachedGoal + ", noIdleDots" + this.noIdleDots);
			}
		},
		//Method called when demonstration in the list is clicked
		selectDemo(demoId){
			console.log(demoId);
			sessionStorage.setItem("demoId", demoId);
			this.getDemo();
			this.page = null;
		},
		//Method called when going back from viewing demonstration
		viewPages(){
			sessionStorage.removeItem("demoId");
			this.getPage();
			this.demo = null;
			this.noIdleDots = [];
			this.noDead = [];
			this.noReachedGoal = [];
		},

		//sets up session storage used for replaying the best dots
		replayBestDots(){
        	sessionStorage.setItem("Settings", JSON.stringify(this.demo.settings));
			let bestDotMovements = [];
        	for(let movements of this.demo.populations){
        		bestDotMovements.push(movements);
			}
			sessionStorage.setItem("bestDotMovements", JSON.stringify(bestDotMovements));
			location = './view-best/index.html';
		}
    },
	watch:{
    	pageNumber: function () {
			this.getPage();
		}
	}
});