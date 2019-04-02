Vue.component('view-demo', {
    name: "view-demo",
    template: `
		<v-container>
			<v-subheader justify-cente>
				<h3 class="black--text">Demonstration ID: {{demo.id}}</h3>
			</v-subheader>
			<v-expansion-panel>
				<v-expansion-panel-content>
					<template v-slot:header>
						<div>Settings</div>
					</template>
					<v-container ma-1 pt-1>
						<v-expansion-panel>
							<v-expansion-panel-content
							v-for="group in settings"
							:key="group.groupName"
							>
								<template v-slot:header>
									<div>{{group.groupName}}</div>
								</template>
								
								<v-card
								v-for="setting in group.subSettings"
								:key="setting.setting"
								>
									<v-container py-0 my-0>
										{{setting.setting}}: {{setting.value}}
									</v-container>
									
									<v-container py-0 my-0 v-if="(setting.type==='boolean' && setting.value) || setting.value==='Tournament Selection'"
									v-for="subSetting in setting.subSettings" :key="subSetting.setting">
										{{subSetting.setting}}: {{subSetting.value}}
									</v-container>
									
								</v-card>
							</v-expansion-panel-content>
						</v-expansion-panel>
					</v-container>
				</v-expansion-panel-content>
			</v-expansion-panel>
			
			
			<v-card
			class="mx-auto text-xs-center">
				<v-card-text>
					<v-sparkline
					:value="noDead"
					height="100"
					padding="24"
					stroke-linecap="round"
					smooth
					auto-draw>
						<template v-slot:label="noDead">
							{{ noDead.index}}
						</template>
					</v-sparkline>
				</v-card-text>
				<v-card-text>
					<div class="display-1 font-weight-thin">Number of dots dead</div>
				</v-card-text>
			</v-card>
		</v-container>
    `,
    data() {
        return {
			demo: undefined,
			noDead: [],
			noReachedGoal: [],
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
							setting: 'Tournament Participents',
							alias: 'tournamentParticipents',
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
					alias: 'currentMultiplyer',
					type: "number",
					value: undefined
				},
				{
					setting: 'Mutation Gene Multiplier',
					alias: 'mutationMultiplyer',
					type: "number",
					value: undefined
				}]
			}]
        }
    },
	beforeMount() {
		console.log("Mounting view-demo");
        this.$http.get('/viewResult/' + sessionStorage.getItem("demoId")).then(response => {
            console.log(response.body);
			this.demo = response.body;
			this.populate();
			this.analyse();
        }, response => {
            console.log(response);
        })
		
		//this.demo = JSON.parse(sessionStorage.getItem("demo"));
		console.log(this.demo);
    },
    methods: {
        check() {
            this.count++;
        },
		populate(){
			console.log("Populating...");
			for(group of this.settings){
				console.log(group.groupName);
				for(setting of group.subSettings){
					console.log("	" + setting.setting);
					setting.value = this.demo.settings[setting.alias];
					
					if(setting.subSettings != undefined){
						for(subSetting of setting.subSettings){
							console.log("		" + subSetting.setting);
							subSetting.value = this.demo.settings[subSetting.alias];
						}
					}
				}
			}
		},
		analyse(){
			for(population of this.demo.populations){
				console.log(population);
				this.noDead.push(population.noDead);
				this.noReachedGoal.push(population.noReachedGoal);
			}
			console.log(this.noDead);
			console.log(this.noReachedGoal);
		}
    }
});