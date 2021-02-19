<template>
    <nav>

        <v-toolbar flat top>

            <v-btn  class="mx-2" depressed fab dark x-small color="teal" @click.stop="drawer = !drawer">               
                <v-icon dark>
                    mdi-format-list-bulleted-square
                </v-icon>
            </v-btn>

            <v-toolbar-title class="text-uppercase grey--text">
                <span class="font-weight-light">Task</span>
                <span>Manager</span>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn depressed small flat dark color="teal">
                <span>Sign out</span>
                <v-icon>mdi-exit-to-app</v-icon>
            </v-btn>
        </v-toolbar>

        <v-navigation-drawer
            dark
            color="teal"
            v-model="drawer"
            absolute
            temporary
            >
            <v-list-item>
                <v-list-item-avatar>
                <v-img src="https://randomuser.me/api/portraits/men/78.jpg"></v-img>
                </v-list-item-avatar>

                <v-list-item-content>
                <v-list-item-title>Gianluca</v-list-item-title>
                </v-list-item-content>
            </v-list-item>

            <v-divider></v-divider>

            <v-list dense>
                <v-list-item
                v-for="item in items"
                :key="item.title"
                link
                router :to="item.route"
                >
                <v-list-item-icon>
                    <v-icon>{{ item.icon }}</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>

    </nav>
</template>

<script>
export default {
    data () {
      return {
        drawer: null,
        items: [
          { title: 'Dashboard', icon: 'mdi-view-dashboard', route:'/' },
          { title: 'Projects', icon: 'mdi-forum', route:'/projects' },
          { title: 'Team', icon: 'mdi-account-group-outline', route:'/team' },
        ],
      }
    },
}
</script>

