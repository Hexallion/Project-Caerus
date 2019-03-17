Vue.component('new-demo', {
    name: "new-demo",
    template: `
        <v-form v-model="valid">
            <v-container>
                <v-subheader justify-cente>
                    <h3 class="black--text">New Demonstration Settings</h3>
                </v-subheader>
                <v-expansion-panel>
                    <v-expansion-panel-content
                    v-for="group in settings"
                    :key="group.groupName"
                    >
                        <template v-slot:header>
                            <div>{{group.groupName}}</div>
                        </template>
                        <v-card>
                            content
                        </v-card>
                    </v-expansion-panel-content>
                </v-expansion-panel>
                <v-container justify-end>
                    <v-btn @click="">Start!</v-btn>
                    <v-btn @click="">Reset</v-btn>   
                </v-container> 
            </v-container>
         </v-form>
    `,
    data() {
        return {
            valid: false,
            settings:[
                {groupName: 'Canvas Settings:', subSettings:[
                        {Setting: 'Canvas Width'},
                        {Setting: 'Canvas Height'},
                        {Setting: 'Canvas Colour'},
                        {Setting: 'FPS'}
                    ]},
                {groupName: 'Population Settings:', subSettings:[
                        {Setting: 'Population Size'},
                        {Setting: 'Lifespan'},
                        {Setting: 'Number of Generations'},
                        {Setting: 'Sawtooth'}
                    ]},
                {groupName: 'Dot settings:', subSettings:[
                        {Setting: 'Start Position'},
                        {Setting: 'Dot Size'},
                        {Setting: 'Dot Colour'}
                    ]},
                {groupName: 'Goal Settings:', subSettings:[
                        {Setting: 'Goal Position'},
                        {Setting: 'Goal Size'},
                        {Setting: 'Goal Colour'}
                    ]},
                {groupName: 'Obstacle Settings:', subSettings:[
                        {Setting: 'Obstacle Position'},
                        {Setting: 'Obstacle Size'},
                        {Setting: 'Obstacle Colour'}
                    ]},
                {groupName: 'Selection Settings:', subSettings:[
                        {Setting: 'Selection Type'}
                    ]},
                {groupName: 'Crossover Settings:', subSettings:[
                        {Setting: 'Number of crossings'}
                    ]},
                {groupName: 'Mutation Settings:', subSettings:[
                        {Setting: 'Mutation Rate'},
                        {Setting: 'Dot Specific Mutation'},
                        {Setting: 'Gene Specific Mutation'},
                        {Setting: 'Current Gene Multiplier'},
                        {Setting: 'Mutation Gene Multiplier'}
                    ]},
            ]
        }
    },
    methods: {
        check() {
            this.count++;
        }
    }
});