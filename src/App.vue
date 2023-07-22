<template>
  <v-app>
    <v-app-bar v-if="this.userLoggedIn" app color="primary" dark>

      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <div class="d-flex align-center">
        <v-img alt="Vuetify Logo" class="shrink mr-2" contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png" transition="scale-transition" width="40" />

        <v-img alt="Vuetify Name" class="shrink mt-1 hidden-sm-and-down" contain min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png" width="100" />
      </div>

      <v-spacer></v-spacer>

      <v-btn @click.prevent="logout" url="/login" text>
        <span class="mr-2">Logout</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>
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
import { mapGetters } from 'vuex';
export default {
  name: "App",
  data: () => ({
    drawer: false,
  }),
  components: {
    NavigationDrawer,
  },
  methods: {
    logout() {
      this.$store.dispatch("logout", null);
      this.$router.push({ name: "login" });
    },
  },
  computed: {
    ...mapGetters(["userLoggedIn"]),
  },
};
</script>
