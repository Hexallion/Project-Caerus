/*
Project Caerus- By Peter Cresswell

new-demo page component

Used to allow the user to create a new demo. Has a list of settings which can be changed.
*All validation done however dynamic validation does not say what the error is.
*/
Vue.component('new-demo', {
            name: "new-demo",
            template: `
		<v-container>
        	<v-form v-model="valid">
                <v-subheader>
                    <h3 class="black--text">New Demonstration Settings</h3>
                    <v-tooltip right>
					  <template v-slot:activator="{ on }">
						<v-icon v-on="on">'info'</v-icon>
					  </template>
					  <span>See Info for details on settings</span>
					</v-tooltip>
                </v-subheader>
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
								<v-select v-if="setting.type=='multiple'" :items="setting.options" :label=setting.setting :placeholder=setting.placeholder v-model="setting.value"></v-select>
								<v-switch v-else-if="setting.type=='boolean'" :label=setting.setting v-model="setting.value"></v-switch>
								<v-text-field v-else :type="setting.type" :label=setting.setting :placeholder=setting.placeholder :rules=setting.rules v-model="setting.value"></v-text-field>
							</v-container>

                            <v-expand-transition v-for="subSetting in setting.subSettings" :key="subSetting.setting">
                                <v-container py-0 my-0 v-if="(setting.type==='boolean' && setting.value) || setting.value==='Tournament Selection'">
                                    <v-select v-if="subSetting.type=='multiple'" :items="subSetting.options" :label=subSetting.setting :placeholder=subSetting.placeholder></v-select>
                                    <v-switch v-else-if="subSetting.type=='boolean'" :label=subSetting.setting v-model="subSetting.value"></v-switch>
                                    <v-text-field v-else :type="subSetting.type" :label=subSetting.setting :placeholder=subSetting.placeholder v-model="subSetting.value"></v-text-field>
                                </v-container>
                            </v-expand-transition>
                            
                        </v-card>
                    </v-expansion-panel-content>
                </v-expansion-panel>
                <v-container center>
                    <v-btn @click="start">Start!</v-btn>
                    <v-btn @click="clearForm">Reset</v-btn>
                </v-container>
                <v-slide-y-transition>
                	<v-container py-0 my-0 v-if="!this.valid" style="color: red">{{errorMessage}}</v-container>
                </v-slide-y-transition>
        	 </v-form>
		</v-container>
    `,
    data() {
    return {
		valid: undefined,
		errorMessage: "Errors have been detected! Correct and then retry.",
        settings: [
        	{
            groupName: 'Canvas Settings:',
            subSettings: [{
                setting: 'Canvas Width',
				alias: 'canWidth',
                type: "number",
                placeholder: "700",
                value: undefined,
				rules: [
					(v) =>  (v === undefined ||v == '' || v <= 2000) ||'Please enter a value less than 2000!',
					(v) =>  (v === undefined ||v == '' || v > 0) ||'Please enter a value greater than 0!'
				]
            },
			{
				setting: 'Canvas Height',
				alias: 'canHeight',
				type: "number",
				placeholder: "700",
				value: undefined,
                rules: [
                    (v) =>  (v === undefined ||v == '' || v <= 2000) ||'Please enter a value less than 2000!',
                    (v) =>  (v === undefined ||v == '' || v > 0) ||'Please enter a value greater than 0!'
                ]
			},
			{
				setting: 'Canvas Colour',
				alias: 'canColour',	
				type: "multiple",
				options: ["Red", "Pink", "Orange", "Yellow", "Purple", "Green", "Blue", "Brown", "White", "Gray", "Black"],
				placeholder: "Grey",
				value: undefined,
                rules: []
			},
			{
				setting: 'FPS',
				alias: 'fps',
				type: "number",
				placeholder: "60",
				value: undefined,
                rules: [
					(v) =>  (v === undefined ||v == '' || v <= 80) ||'Please enter a value less or equal to than 80!',
                    (v) =>  (v === undefined ||v == '' || v > 0) ||'Please enter a value greater than 0!'
                ]
			}]
        },
		{
			groupName: 'Population Settings:',
			subSettings: [{
				setting: 'Population Size',
				alias: 'populationSize',
				type: "number",
				placeholder: "100",
				value: undefined,
                rules: [
					(v) =>  (v === undefined ||v == '' || v <= 500) ||'Please enter a value less than 500!',
                    (v) =>  (v === undefined ||v == '' || v > 0) ||'Please enter a value greater than 0!'
                ]
			},
			{
				setting: 'Lifespan',
				alias: 'lifeSpan',
				type: "number",
				placeholder: "250",
				value: undefined,
                rules: [
					(v) =>  (v === undefined ||v == '' || v <= 500) ||'Please enter a value less than 500!',
                    (v) =>  (v === undefined ||v == '' || v > 0) ||'Please enter a value greater than 0!'
                ]
			},
			{
				setting: 'Number of Generations',	
				alias: 'noGenerations',
				type: "number",
				placeholder: "30",
				value: undefined,
                rules: [
					(v) =>  (v === undefined ||v == '' || v <= 50) ||'Please enter a value less than 50!',
                    (v) =>  (v === undefined ||v == '' || v > 0) ||'Please enter a value greater than 0!'
                ]
			},
			{
				setting: 'Sawtooth',
				alias: 'sawtooth',
				type: "boolean",
				placeholder: false,
				value: false,
                rules: [],
				subSettings: [{
					setting: 'Reduction',
					alias: 'reduction',
					type: "number",
					placeholder: "2",
					value: undefined,
                    rules: [
                        (v) =>  (v === undefined ||v == '' || v > 0) ||'Please enter a value greater than 0!'
                    ]
				},
				{
					setting: 'Period',
					alias: 'period',
					type: "number",
					placeholder: "10",
					value: undefined,
                    rules: [
                        (v) =>  (v === undefined ||v == '' || v > 0) ||'Please enter a value greater than 0!'
                    ]
				}]
			}]
		},
		{
			groupName: 'Dot Settings:',
			subSettings: [{
				setting: 'Start X',
				alias: 'startX',
				type: "number",
				placeholder: "350",
				value: undefined,
                rules: [
					(v) =>  (v === undefined ||v == '' || v <= 2000) ||'Please enter a value less than 2000!',
                    (v) =>  (v === undefined ||v == '' || v > 0) ||'Please enter a value greater than 0!'
                ]
			},
			{
				setting: 'Start Y',
				alias: 'startY',
				type: "number",
				placeholder: "550",
				value: undefined,
                rules: [
					(v) =>  (v === undefined ||v == '' || v <= 2000) ||'Please enter a value less than 2000!',
                    (v) =>  (v === undefined ||v == '' || v > 0) ||'Please enter a value greater than 0!'
                ]
			},
			{
				setting: 'Dot Size',
				alias: 'dotRadius',
				type: "number",
				placeholder: "10",
				value: undefined,
                rules: [
					(v) =>  (v === undefined ||v == '' || v <= 50) ||'Please enter a value less than 50!',
                    (v) =>  (v === undefined ||v == '' || v > 0) ||'Please enter a value greater than 0!'
                ]
			},
			{
				setting: 'Dot Colour',
				alias: 'dotColour',
				type: "multiple",
				options: ["Red", "Pink", "Orange", "Yellow", "Purple", "Green", "Blue", "Brown", "White", "Gray", "Black"],
				rules: [],
				placeholder: "Black",
				value: undefined
			}]
		},
		{
			groupName: 'Goal Settings:',
			subSettings: [{
				setting: 'Goal X',
				alias: 'goalX',
				type: "number",
				placeholder: "335",
				value: undefined,
                rules: [
					(v) =>  (v === undefined ||v == '' || v <= 2000) ||'Please enter a value less than 2000!',
                    (v) =>  (v === undefined ||v == '' || v > 0) ||'Please enter a value greater than 0!'
                ]
			},
			{
				setting: 'Goal Y',
				alias: 'goalY',
				type: "number",
				placeholder: "100",
				value: undefined,
                rules: [
					(v) =>  (v === undefined ||v == '' || v <= 2000) ||'Please enter a value less than 2000!',
                    (v) =>  (v === undefined ||v == '' || v > 0) ||'Please enter a value greater than 0!'
                ]
			},
			{
				setting: 'Goal Size',
				alias: 'goalSize',
				type: "number",
				placeholder: "30",
				value: undefined,
                rules: [
					(v) =>  (v === undefined ||v == '' || v <= 80) ||'Please enter a value less than 80!',
                    (v) =>  (v === undefined ||v == '' || v > 0) ||'Please enter a value greater than 0!'
                ]
			},
			{
				setting: 'Goal Colour',
				alias: 'goalColour',
				type: "multiple",
				options: ["Red", "Pink", "Orange", "Yellow", "Purple", "Green", "Blue", "Brown", "White", "Gray", "Black"],
				rules: [],
				placeholder: "Blue",
				value: undefined
			}]
		},
		{
			groupName: 'Obstacle Settings:',
			subSettings: [{
				setting: 'Obstacle X',
				alias: 'obstacleX',
				type: "number",
				placeholder: "200",
				value: undefined,
                rules: [
					(v) =>  (v === undefined ||v == '' || v <= 2000) ||'Please enter a value less than 2000!',
                    (v) =>  (v === undefined ||v == '' || v > 0) ||'Please enter a value greater than 0!'
                ]
			},
			{
				setting: 'Obstacle Y',
				alias: 'obstacleY',
				type: "number",
				placeholder: "275",
				value: undefined,
                rules: [
					(v) =>  (v === undefined ||v == '' || v <= 2000) ||'Please enter a value less than 2000!',
                    (v) =>  (v === undefined ||v == '' || v > 0) ||'Please enter a value greater than 0!'
                ]
			},
			{
				setting: 'Obstacle Width',
				alias: 'obstacleWidth',
				type: "number",
				placeholder: "300",
				value: undefined,
                rules: [
					(v) =>  (v === undefined ||v == '' || v <= 2000) ||'Please enter a value less than 2000!',
                    (v) =>  (v === undefined ||v == '' || v > 0) ||'Please enter a value greater than 0!'
                ]
			},
			{
				setting: 'Obstacle Height',
				alias: 'obstacleHeight',
				type: "number",
				placeholder: "75",
				value: undefined,
                rules: [
					(v) =>  (v === undefined ||v == '' || v <= 2000) ||'Please enter a value less than 2000!',
                    (v) =>  (v === undefined ||v == '' || v > 0) ||'Please enter a value greater than 0!'
                ]
			},
			{
				setting: 'Obstacle Colour',
				alias: 'obstacleColour',
				type: "multiple",
				options: ["Red", "Pink", "Orange", "Yellow", "Purple", "Green", "Blue", "Brown", "White", "Gray", "Black"],
				rules: [],
				placeholder: "Black",
				value: undefined
			}]
		},
		{
			groupName: 'Selection Settings:',
			subSettings: [{
				setting: 'Selection Type',
				alias: 'selectionType',
				type: "multiple",
				rules: [],
				options: ["Proportional Selection", "Ranking Selection", "Tournament Selection"],
				placeholder: "Proportional Selection",
				value: undefined,
				subSettings: [{
						setting: 'Tournament Participents',
						alias: 'tournamentParticipents',
						type: "number",
						placeholder: "10",
						value: undefined,
                        rules: [
							(v) =>  (v === undefined ||v == '' || v <= 500) ||'Please enter a value less than 500!',
                            (v) =>  (v === undefined ||v == '' || v > 0) ||'Please enter a value greater than 0!'
                        ]
					}]
				}]
		},
		{
			groupName: 'Crossover Settings:',
			subSettings: [{
				setting: 'Number of crossings',
				alias: 'noCrossings',
				type: "number",
				placeholder: "1",
				value: undefined,
                rules: [
					(v) =>  (v === undefined ||v == '' || v <= 500) ||'Please enter a value less than 500!',
                    (v) =>  (v === undefined ||v == '' || v > 0) ||'Please enter a value greater than 0!'
                ]
			}]
		},
		{
			groupName: 'Mutation Settings:',
			subSettings: [{
				setting: 'Mutation Rate',
				alias: 'mutationRate',
				type: "number",
				placeholder: "0.5",
				value: undefined,
                rules: [
                    (v) =>  (v === undefined ||v == '' || v > 0) ||'Please enter a value greater than 0!',
                    (v) =>  (v === undefined ||v == '' || v <= 1) ||'Please enter a value less than or equal to 1!'
                ]
			},
			{
				setting: 'Dot Specific Mutation',
				alias: 'DotSpecificMutation',
				type: "boolean",
				rules: [],
				placeholder: false,
				value: false
			},
			{
				setting: 'Gene Specific Mutation',
				alias: 'GeneSpecificMutation',
				type: "boolean",
				rules: [],
				placeholder: true,
				value: true
			},
			{
				setting: 'Current Gene Multiplier',
				alias: 'currentMultiplyer',
				type: "number",
				placeholder: "1",
				value: undefined,
                rules: [
                    (v) =>  (v === undefined ||v == '' || v > 0) ||'Please enter a value greater than 0!',
                    (v) =>  (v === undefined ||v == '' || v <= 1) ||'Please enter a value less than or equal to 1!'
                ]
			},
			{
				setting: 'Mutation Gene Multiplier',
				alias: 'mutationMultiplyer',
				type: "number",
				placeholder: "0.5",
				value: undefined,
                rules: [
                    (v) =>  (v === undefined ||v == '' || v > 0) ||'Please enter a value greater than 0!',
                    (v) =>  (v === undefined ||v == '' || v <= 1) ||'Please enter a value less than or equal to 1!'
                ]
			}
			]
		}]
        }
    },
    methods: {
		//clears the settings of the form, resets the form
		clearForm(){
			for(let setting of this.settings){
				for(let subSetting of setting.subSettings){
					subSetting.value = undefined;
					if(subSetting.type == "boolean"){subSetting.value = subSetting.placeholder;}
					
					console.log("Reset: " + subSetting.alias);
					if(subSetting.subSettings !== undefined){
						for(let subSubSetting of subSetting.subSettings){
							subSubSetting.value = undefined;
							if(subSubSetting.type == "boolean"){subSubSetting.value = subSubSetting.placeholder;}
							console.log("	Reset: " + subSubSetting.alias);
						}
					}
				}
			}
			sessionStorage.clear();
			this.dynamicValid = true;
		},
		start(){
			this.validate();
			if(this.valid) {
				//Changes Settings depending on the values in the form
				for (let setting of this.settings) {
					for (let subSetting of setting.subSettings) {
						if ((subSetting.value != undefined) && (subSetting.value != '')) {
							Settings[subSetting.alias] = subSetting.value;
						}
					}
					if ((setting.value != undefined) && (setting.value != '')) {
						Settings[setting.alias] = setting.value;
					}
				}

				//saves settings to session storage
				sessionStorage.setItem("Settings", JSON.stringify(Settings));
				location = './genetic-algorithm/index.html';
			}
			else{
				console.log("errors detected");
				this.errorMessage = "Errors have been detected! Correct and then retry."
			}
		},
		//Handles dynamic vaildation of form
		validate(){
			let populationSize = this.settings[1].subSettings[0].value;
			if(populationSize === undefined || populationSize === ""){populationSize = this.settings[1].subSettings[0].placeholder;}
			{
				let reduction = this.settings[1].subSettings[3].subSettings[0].value;
				let period = this.settings[1].subSettings[3].subSettings[1].value;
				if(reduction === undefined || reduction === ""){reduction = this.settings[1].subSettings[3].subSettings[0].placeholder;}
				if(period === undefined || period === ""){period = this.settings[1].subSettings[3].subSettings[1].placeholder;}
				if(period * reduction >= Number(populationSize) && this.settings[1].subSettings[3].value){this.valid = false;}
			}
			{
				let tournamentParticipents = this.settings[5].subSettings[0].subSettings[0].value;
				if(tournamentParticipents === undefined || tournamentParticipents === ""){tournamentParticipents = this.settings[5].subSettings[0].subSettings[0].placeholder;}
				if(Number(tournamentParticipents) >= Number(populationSize) && this.settings[5].subSettings[0].value){this.valid = false;}
			}
		}
    }
});