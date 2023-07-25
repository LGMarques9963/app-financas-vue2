<template>
  <v-app>
    <app-bar v-if="this.userLoggedIn" />
    <v-main class="d-flex">
      <v-row>
        <v-col class="flex-shrink-0 flex-grow-0">
          <navigation-drawer v-if="this.userLoggedIn"/>
        </v-col>
        <v-col>
          <router-view />
        </v-col>
      </v-row>
    </v-main>
  </v-app>
</template>

<script>
import NavigationDrawer from "@/components/NavigationDrawer.vue";
import AppBar from "@/components/AppBar.vue";
import { mapGetters } from 'vuex';
export default {
  name: "App",
  data: () => ({
  }),
  components: {
    NavigationDrawer,
    AppBar,
  },
  computed: {
    ...mapGetters(["userLoggedIn"]),
  },
};
</script>
