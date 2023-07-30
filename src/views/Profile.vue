<template>
  <main>
    <v-card class="mx-auto">
      <v-img class="white--text align-end" height="200px"
        src="https://images.unsplash.com/photo-1531512073830-ba890ca4eba2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
        gradient="to top right, rgba(100,115,201,.5), rgba(25,32,72,.7)">
        <v-card-title>Edit profile </v-card-title>
        <v-spacer></v-spacer>
        <v-card-subtitle>
          <div class="card shadow-lg mt-n6">
            <div class="card-body p-3">
              <div class="row gx-4">
                <div class="col-auto">
                  <v-avatar>
                    <v-img :src="user.avatarUrl" />
                  </v-avatar>
                </div>
                <div class="col-auto my-auto">
                  <div class="h-100">
                    <h5 class="mb-1">{{ user.firstName }} {{ user.lastName }} </h5>
                    <p class="mb-0 font-weight-bold text-sm">{{ user.role }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </v-card-subtitle>
      </v-img>

      <v-card-text class="text--primary">
        <v-row dense>
          <v-col cols="auto">
            <div class="frame">
              <span class="text-h5">User Profile</span>
              <v-card>
                <v-card-title>
                </v-card-title>
                <v-card-text>
                  <v-container cols="12" sm="6" md="8">
                    <v-row>
                      <v-col cols="12" sm="6" md="8">
                        <v-row>
                          <v-text-field label="First name" v-model="user.firstName" required
                            :value="user.firstName"></v-text-field>
                          <v-spacer></v-spacer>
                          <v-text-field label="Last name" v-model="user.lastName" required
                            :value="user.lastName"></v-text-field>
                        </v-row>
                      </v-col>
                      <v-col cols="12" sm="6" md="8">
                        <v-row>
                          <v-text-field label="Email" v-model="user.email" required :value="user.email"></v-text-field>
                        </v-row>
                      </v-col>
                      <v-col cols="12" sm="6" md="8">
                        <v-row>
                          <v-avatar>
                            <v-img :src="user.avatarUrl" />
                          </v-avatar>
                          <v-text-field label="Profile Picture" v-model="user.avatarUrl" required
                            :value="user.avatarUrl"></v-text-field>
                        </v-row>
                      </v-col>
                      <v-col cols="12" sm="6" md="8">
                        <v-row>
                          <v-text-field label="University" v-model="user.university" required
                            :value="user.university"></v-text-field>
                          <v-spacer></v-spacer>
                          <v-text-field label="City" v-model="user.city" required :value="user.city"></v-text-field>
                          <v-spacer></v-spacer>
                          <v-text-field label="Country" v-model="user.country" required
                            :value="user.country"></v-text-field>
                        </v-row>
                      </v-col>
                      <v-col cols="12" sm="6" md="8">
                        <v-row>
                          <v-text-field label="Company" v-model="user.company" required
                            :value="user.company"></v-text-field>
                          <v-spacer></v-spacer>
                          <v-text-field label="Role" v-model="user.role" required :value="user.role"></v-text-field>
                          <v-spacer></v-spacer>
                          <v-text-field label="Monthly Income" v-model.number="user.income" required type="number"></v-text-field>
                        </v-row>
                      </v-col>
                      <v-col cols="12" sm="6" md="8">
                        <v-row>
                          <v-menu ref="menu" v-model="menu" :close-on-content-click="false" transition="scale-transition"
                            offset-y min-width="auto">
                            <template v-slot:activator="{ on, attrs }">
                              <v-text-field v-model="user.birthday" label="Birthday date" append-icon="mdi-calendar"
                                readonly v-bind="attrs" v-on="on"></v-text-field>
                            </template>
                            <v-date-picker v-model="user.birthday" :active-picker.sync="activePicker"
                              :max="(new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substring(0, 10)"
                              min="1950-01-01" @change="save"></v-date-picker>
                          </v-menu>
                        </v-row>
                      </v-col>
                    </v-row>
                  </v-container>
                  <small>*indicates required field</small>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="blue darken-1" text @click.prevent="updateUserData">
                    Save
                  </v-btn>
                  <v-overlay :value="loading">
                    <v-progress-circular indeterminate size="64"></v-progress-circular>
                  </v-overlay>
                </v-card-actions>
              </v-card>
            </div>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>

  </main>
</template>

<script>
import HelloWorldVue from '@/components/HelloWorld.vue'
import router from '@/router';
export default {
  components: {
    HelloWorldVue
  },
  data() {
    return {
      user: {},
      activePicker: null,
      date: null,
      menu: false,
      loading: false,
    };
  },
  watch: {
    menu(val) {
      val && setTimeout(() => (this.activePicker = 'YEAR'))
    },
  },
  methods: {
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
    updateUserData() {
      this.loading = true;
      this.$http
        .post("/profile.php", { data: this.user })
        .then((response) => {
          this.$store.dispatch("setUser", response.data);
        })
        .catch((error) => {
          console.log(error);
        });
      console.log(this.user);
      console.log(this.date);
      setTimeout(() => (this.loading = false), 2000);
      router.push('/home');
    },
    save(date) {
      this.$refs.menu.save(date)
    },
  },
  mounted() {
    this.getUserData();
  },
}
</script>

<style scoped>
.frame {
  background: var(--grey-grey-100, #fafafa);
  border-radius: 4px;
  border-style: solid;
  border-color: var(--primary-200, #d8e4fc);
  border-width: 1px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: flex-start;
  justify-content: flex-start;
  align-self: stretch;
  flex-shrink: 0;
  position: relative;
  overflow: hidden;
}
</style>