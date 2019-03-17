Vue.component('view-demo', {
    name: "view-demo",
    template: `
        <v-btn @click="check">{{title}} {{count}}</v-btn>
    `,
    data() {
        return {
            count: 0,
            title: 'click me - View'
        }
    },
    methods: {
        check() {
            this.count++;
        }
    }
});