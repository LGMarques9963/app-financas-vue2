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
                    <v-container>
                      <v-row>
                        <v-col cols="12" sm="6" md="8">
                          <v-text-field label="First name" required :value="user.firstName"></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="8">
                          <v-text-field label="Last name" required :value="user.lastName"></v-text-field>
                        </v-col>
                        <v-col cols="12">
                          <v-text-field label="Email" required :value="user.email"></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6">
                          <v-select :items="['0-17', '18-29', '30-54', '54+']" label="Age*" required></v-select>
                        </v-col>
                        <v-col cols="12" sm="6">
                          <v-autocomplete
                            :items="['Skiing', 'Ice hockey', 'Soccer', 'Basketball', 'Hockey', 'Reading', 'Writing', 'Coding', 'Basejump']"
                            label="Interests" multiple></v-autocomplete>
                        </v-col>
                      </v-row>
                    </v-container>
                    <small>*indicates required field</small>
                  </v-card-text>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" text @click="dialog = false">
                      Close
                    </v-btn>
                    <v-btn color="blue darken-1" text @click="dialog = false">
                      Save
                    </v-btn>
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
export default {
  components: {
    HelloWorldVue
  },
  data() {
    return {
      user: {},
    };
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