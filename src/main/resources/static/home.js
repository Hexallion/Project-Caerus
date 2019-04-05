/*
Project Caerus- By Peter Cresswell

Home Page component

Home page explaning what the site is about.
*Currently using Lorem ipsum as placeholder text will be changed soon.
*/
Vue.component('home', {
    name: "home",
    template: `
        <v-container>
            <v-subheader>
                <h3 class="black--text">Welcome!</h3>
            </v-subheader>
            
            <v-card>
                <v-card-text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce turpis leo, finibus et lectus faucibus, pharetra elementum nisi. Pellentesque venenatis erat sit amet velit accumsan tincidunt. Aenean commodo ligula id pulvinar pretium. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer ornare risus urna, non molestie est laoreet non. Duis tempus porta neque nec tristique. Fusce quis posuere lacus, vel volutpat lacus.
                </v-card-text>
                <v-card-text>
                    Nam fermentum, massa at feugiat facilisis, ligula odio fringilla felis, ac pretium enim purus sed velit. Aenean quis purus vitae ex euismod interdum. Donec ligula sem, consequat sed fermentum a, dictum eu lacus. Aenean felis urna, varius quis cursus vel, blandit vel enim. Nulla iaculis arcu eu luctus euismod. Ut tempus turpis a bibendum viverra. Duis placerat non nisi vitae venenatis.
                </v-card-text>
                <v-card-text>
                    Vivamus auctor leo nisl, in auctor turpis placerat sed. Fusce eu orci ac ligula venenatis egestas id sed sem. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec ac scelerisque sapien, sit amet ultrices elit. Donec hendrerit finibus leo, eu dignissim mauris semper ac. Donec ut congue nibh. Integer dui lorem, pellentesque et leo molestie, tristique euismod eros. Curabitur vitae tortor dignissim ligula posuere accumsan et vel arcu.
                </v-card-text>
            </v-card>
        </v-container>
    `
});