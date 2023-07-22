<template>
  <main class="mt-0 d-flex justify-center">
    <section class="col-6">
      <div class="container d-flex">
        <div class="row d-flex justify-center">
          <v-col cols="12" class="flex-grow-1">
            <v-card class="mx-auto my-12">
              <v-card class="mx-auto">

                <v-card-title class="font-weight-bolder">Login</v-card-title>
                <v-card-subtitle class="mb-0">Enter your email and password to sign in</v-card-subtitle>

                <div class="card-body">
                  <form role="form" @submit.prevent="sendForm">
                    <div class="mb-3">
                      <v-text-field :rules="[rules.required]" type="text" class="mb-3" placeholder="Username"
                        label="Username" v-model="user.username" solo />
                    </div>
                    <div class="mb-3">
                      <v-text-field v-model="user.password" :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                        :type="showPassword ? 'text' : 'password'" @click:append="showPassword = !showPassword"
                        label="Password" :rules="[rules.required, rules.min]" placeholder="Password" aria-label="Password"
                        solo />
                    </div>
                    <v-card-action>
                      <v-btn class="ma-2" :loading="loading" :disabled="loading" color="dark" @click="sendForm">
                        Login
                        <template v-slot:loader>
                          <span class="custom-loader">
                            <v-icon light>mdi-cached</v-icon>
                          </span>
                        </template>
                      </v-btn>

                    </v-card-action>
                  </form>
                </div>
                <div class="card-footer text-center pt-0 px-lg-2 px-1">
                  <p class="mb-4 text-sm mx-auto">
                    Don't have an account?
                    <router-link class="text-info" to="/signup">
                      Create one
                    </router-link>
                  </p>
                  <div class="justify-content-center">
                    <a href="#" class="btn btn-neutral btn-icon mr-4" target="_blank">
                      <span class="btn-inner--icon"><img
                          src="https://demos.creative-tim.com/argon-design-system-pro/assets/img/icons/common/github.svg"
                          alt="github" /></span>
                    </a>
                    <a href="#" class="btn btn-neutral btn-icon" target="_blank">
                      <span class="btn-inner--icon"><img
                          src="https://demos.creative-tim.com/argon-design-system-pro/assets/img/icons/common/google.svg"
                          alt="google" /></span>
                    </a>
                    <div id="g_id_onload"
                      data-client_id="929159617177-thoqb567fjbh3b0anr4op472q4in3v2u.apps.googleusercontent.com"
                      data-context="signin" data-ux_mode="popup" data-callback="googleLogin" data-auto_prompt="false">
                    </div>

                    <div class="g_id_signin" data-type="standard" data-shape="pill" data-theme="filled_black"
                      data-text="signin" data-size="medium" data-logo_alignment="left">
                    </div>
                  </div>
                </div>
              </v-card>
            </v-card>
          </v-col>
        </div>
      </div>
    </section>
    <v-dialog v-model="errorDialog" max-width="400" transition="dialog-bottom-transition">
      <v-card class="mx-auto" color="error" dark max-width="400" shaped elevation="10">
        <v-card-title class="text-h5">
          {{ errorMessage || "" }}
        </v-card-title>
      </v-card>
    </v-dialog>
  </main>
</template>

<script>
export default {
  name: "LoginView",
  data() {
    return {
      user: {
        username: "",
        password: "",
      },
      loading: false,
      showPassword: false,
      errorDialog: false,
      errorMessage: "",
      rules: {
        required: (value) => !!value || "Required.",
        min: (v) => v.length >= 2 || "Min 8 characters",
      },
    };
  },
  methods: {
    sendForm() {
      this.loading = true;
      this.$http
        .post("signin.php", { data: this.user })
        .then((response) => {
          this.$store.dispatch("login", response.data.token);
          this.loading = false;
          this.$router.push({ name: "home" });
        })
        .catch((err) => {
          this.loading = false;
          this.errorDialog = true;
          this.errorMessage = err.response.data.message;
        });
    },
  },
};
</script>