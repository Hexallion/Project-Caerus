Vue.component('home', {
    name: "home",
    template: `
        <v-btn @click="check">{{title}} {{count}}</v-btn>
    `,
    data() {
        return {
            count: 0,
            title: 'click me - Home'
        }
    },
    methods: {
        check() {
            this.count++;
        }
    }
});