<template>
  <v-app-bar app>
    <div class="frame-40">
      <div class="d-flex align-center">
        <v-img alt="Vuetify Logo" class="shrink mr-2" contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-light.png" transition="scale-transition" width="40" />

        <v-img v-if="this.drawer" alt="Vuetify Name" class="shrink mt-1 hidden-sm-and-down" contain min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-light.png" width="100" />
      </div>
      <v-app-bar-nav-icon @click="toggleDrawer">
        <menu-fold-icon :menu-fold="true" v-if="this.drawer" />
        <menu-fold-icon :menu-fold="false" v-if="!this.drawer" />
      </v-app-bar-nav-icon>
    </div>
    <v-spacer></v-spacer>

    <div class="notification2">
      <v-badge dot color="var(--alert-danger-500-base, #FF4040)">
        <v-icon>mdi-bell-outline</v-icon>

      </v-badge>
    </div>

    <div class="name-avatar">
      <div class="savannah-nguyen">{{ user.firstName }} {{ user.lastName }}</div>
      <v-badge dot overlap bottom bordered color="var(--alert-succes-500-base, #00C781)">
        <v-menu bottom min-width="200px" rounded offset-y>
          <template v-slot:activator="{ on }">
            <v-btn icon x-large v-on="on">
              <v-avatar>
                <v-img :src="user.avatarUrl" />
              </v-avatar>
            </v-btn>
          </template>
          <v-card>
            <v-list-item-content class="justify-center">
              <div class="mx-auto text-center">
                <v-avatar>
                  <v-img :src="user.avatarUrl" />
                </v-avatar>
                <h3>{{ user.firstName }} {{ user.lastName }}</h3>
                <p class="text-caption mt-1">
                  {{ user.email }}
                </p>
                <v-divider class="my-3"></v-divider>
                <v-btn depressed rounded text @click="$router.push('/profile')">
                  Edit Account
                </v-btn>
                <v-divider class="my-3"></v-divider>
                <v-btn depressed rounded text @click="logout">
                    Disconnect
                </v-btn>
              </div>
            </v-list-item-content>
          </v-card>
        </v-menu>
      </v-badge>
    </div>
  </v-app-bar>
</template>
<script>
import { mapGetters } from 'vuex';
import MenuFoldIcon from './MenuFoldIcon.vue';
export default {
  name: "MenuFoldOn",
  components: {
    MenuFoldIcon,
  },
  props: {
    menuFold: {
      type: String,
      default: "on",
    },
  },
  data() {
    return {
      user: {},
    };
  },
  methods: {
    toggleDrawer() {
      this.$store.dispatch("toggleDrawer", null);
    },
    getUserData() {
      this.$http
        .get("/profile.php")
        .then((response) => {
          this.user = response.data;
          this.$store.dispatch("setUser", response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    logout() {
      this.$store.dispatch("logout", null);
      this.$router.push({ name: "login" });
    },
  },
  computed: {
    ...mapGetters(["drawer"]),
  },
  mounted() {
    this.getUserData();
  },
};
</script>
<style scoped>
.frame-40 {
  display: flex;
  flex-direction: row;
  gap: 32px;
  align-items: center;
  justify-content: flex-start;
  flex-shrink: 0;
  position: relative;
}

.name-avatar {
  display: flex;
  flex-direction: row;
  gap: 8px;
  align-items: center;
  justify-content: flex-start;
  flex-shrink: 0;
  position: relative;
}

.savannah-nguyen {
  color: var(--primary-900, #244791);
  text-align: right;
  font: var(--desktop-body-body-3-regular, 400 14px/18px "Inter", sans-serif);
  position: relative;
  width: 143px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
</style>
