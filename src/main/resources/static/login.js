Vue.component('login', {
    name: "login",
    template: `
        <v-btn @click="check">{{title}} {{count}}</v-btn>
    `,
    data() {
        return {
            count: 0,
            title: 'click me'
        }
    },
    methods: {
        check() {
            this.count++;
        }
    }
});