Vue.component('sidebar', {
    name: "sidebar",
    props: {
        drawer: {
            type: Boolean,
            required: true
        }
    },
    template: `
        
    `,
    data() {
        return {

        }
    },
    methods: {
        check() {
            this.count++;
        },
        hideSidebar(){
            $emitt('hideSidebar');
        }
    }
});