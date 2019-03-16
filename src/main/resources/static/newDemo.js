Vue.component('newDemo', {
    name: "newDemo",
    template: `
        <v-form v-model="valid">
            <v-container>
              <v-layout>
                <v-flex
                  xs12
                  md4
                >
                  <v-text-field
                    v-model="firstname"
                    :rules="nameRules"
                    :counter="10"
                    label="First name"
                    required
                  ></v-text-field>
                </v-flex>
        
                <v-flex
                  xs12
                  md4
                >
                  <v-text-field
                    v-model="lastname"
                    :rules="nameRules"
                    :counter="10"
                    label="Last name"
                    required
                  ></v-text-field>
                </v-flex>
        
                <v-flex
                  xs12
                  md4
                >
                  <v-text-field
                    v-model="email"
                    :rules="emailRules"
                    label="E-mail"
                    required
                  ></v-text-field>
                </v-flex>
              </v-layout>
            </v-container>
         </v-form>
    `,
    data() {
        return {
            count: 0,
            title: 'click me - New',

            valid: false,
            firstname: '',
            lastname: '',
            nameRules: [
                v => !!v || 'Name is required',
                v => v.length <= 10 || 'Name must be less than 10 characters'
            ],
            email: '',
            emailRules: [
                v => !!v || 'E-mail is required',
                v => /.+@.+/.test(v) || 'E-mail must be valid'
            ]
        }
    },
    methods: {
        check() {
            this.count++;
        }
    }
});