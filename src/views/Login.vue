<template>
  <main>
    <div class="login">
      <div class="welcome-back">Welcome Back !</div>
      <div class="ellipse-1"></div>

      <div class="ellipse-2"></div>

      <div class="frame-2">
        <div class="frame-5">
          <div class="frame-4">
            <div class="upper-section">
              <div class="login-text">
                <div class="login2">Login</div>

                <div class="glad-you-re-back">Glad you’re back.!</div>
              </div>

              <div class="credentials">
                <form role="form" @submit.prevent="sendForm">
                  <v-text-field :rules="[rules.required]" type="text" class="mb-3" placeholder="Username" label="Username"
                    v-model="user.username" dark />

                  <div class="password-rem mb-3">
                    <v-text-field class="mb-3" v-model="user.password"
                      :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'" :type="showPassword ? 'text' : 'password'"
                      @click:append="showPassword = !showPassword" label="Password" :rules="[rules.required, rules.min]"
                      placeholder="Password" aria-label="Password" dark />

                    <div class="remember">
                      <v-checkbox v-model="checkbox" dark label="indigo darken-3" color="indigo darken-3"
                        value="indigo darken-3">
                        <template v-slot:label>
                          <div class="remember-me">Remember me</div>
                        </template>
                      </v-checkbox>
                    </div>
                  </div>

                  <div class="login-bt-fp">
                    <v-btn class="ma-2 login3" :loading="loading" :disabled="loading" color="dark" @click="sendForm">
                      <div class="login3 white--text">Login</div>
                      <template v-slot:loader>
                        <span class="custom-loader">
                          <v-icon light>mdi-cached</v-icon>
                        </span>
                      </template>
                    </v-btn>
                    <div class="forgot-password">Forgot password ?</div>
                  </div>
                </form>
              </div>
            </div>

            <div class="other-logins">
              <div class="or">
                <div class="line-1"></div>

                <div class="or2">Or</div>

                <div class="line-2"></div>
              </div>

              <div class="frame-3">
                <svg class="devicon-google" width="42" height="42" viewBox="0 0 42 42" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_1_97)">
                    <path
                      d="M14.6311 1.3814C10.4346 2.83719 6.81562 5.60032 4.30562 9.26494C1.79562 12.9296 0.526938 17.3025 0.685917 21.7414C0.844897 26.1804 2.42316 30.4514 5.18889 33.927C7.95462 37.4027 11.762 39.8999 16.0519 41.0517C19.5297 41.9491 23.1735 41.9885 26.67 41.1666C29.8374 40.4551 32.7658 38.9332 35.1684 36.75C37.669 34.4083 39.4841 31.4294 40.4184 28.1334C41.4337 24.5492 41.6144 20.78 40.9467 17.115H21.4167V25.2164H32.7272C32.5011 26.5085 32.0167 27.7417 31.303 28.8423C30.5892 29.9428 29.6607 30.8881 28.5731 31.6214C27.1922 32.5353 25.6352 33.1501 24.0023 33.4261C22.3648 33.7306 20.6852 33.7306 19.0477 33.4261C17.3878 33.0833 15.8177 32.3983 14.4375 31.4147C12.2199 29.8449 10.5547 27.6147 9.67968 25.0425C8.7901 22.422 8.7901 19.5812 9.67968 16.9608C10.3026 15.124 11.3322 13.4516 12.6919 12.0684C14.2478 10.4565 16.2177 9.3043 18.3854 8.73821C20.553 8.17213 22.8347 8.21405 24.9802 8.85937C26.6562 9.37362 28.1889 10.2725 29.4558 11.4844C30.7311 10.2156 32.0042 8.94359 33.2752 7.66827C33.9314 6.98249 34.6467 6.32952 35.2931 5.62734C33.3589 3.82763 31.0887 2.42715 28.6125 1.50609C24.1031 -0.13129 19.169 -0.175292 14.6311 1.3814Z"
                      fill="white" />
                    <path
                      d="M14.6311 1.38141C19.1686 -0.176343 24.1027 -0.133498 28.6125 1.50281C31.0892 2.43013 33.3584 3.83736 35.2899 5.64375C34.6336 6.34594 33.9413 7.00219 33.2719 7.68469C31.9988 8.95563 30.7267 10.2222 29.4558 11.4844C28.1889 10.2725 26.6562 9.37362 24.9802 8.85938C22.8355 8.21179 20.5538 8.16745 18.3856 8.73122C16.2173 9.29499 14.2463 10.4451 12.6886 12.0553C11.329 13.4385 10.2993 15.1109 9.67642 16.9477L2.87439 11.6812C5.3091 6.85309 9.52466 3.15992 14.6311 1.38141Z"
                      fill="#E33629" />
                    <path
                      d="M1.06971 16.8984C1.43504 15.0864 2.04203 13.3317 2.87439 11.6812L9.67643 16.9608C8.78684 19.5812 8.78684 22.422 9.67643 25.0425C7.41018 26.7925 5.14283 28.5512 2.87439 30.3187C0.791296 26.1723 0.155986 21.4479 1.06971 16.8984Z"
                      fill="#F8BD00" />
                    <path
                      d="M21.4167 17.1117H40.9467C41.6144 20.7767 41.4337 24.5459 40.4185 28.1302C39.4841 31.4261 37.669 34.4051 35.1685 36.7467C32.9733 35.0339 30.7683 33.3342 28.5731 31.6214C29.6615 30.8873 30.5904 29.9411 31.3042 28.8393C32.018 27.7376 32.502 26.5031 32.7272 25.2099H21.4167C21.4135 22.5127 21.4167 19.8122 21.4167 17.1117Z"
                      fill="#587DBD" />
                    <path
                      d="M2.87109 30.3187C5.13953 28.5687 7.40687 26.81 9.67312 25.0425C10.5499 27.6156 12.2174 29.8459 14.4375 31.4147C15.822 32.3937 17.3955 33.0732 19.0575 33.4097C20.695 33.7142 22.3747 33.7142 24.0122 33.4097C25.645 33.1337 27.202 32.5189 28.583 31.605C30.7781 33.3178 32.9831 35.0175 35.1783 36.7303C32.776 38.9147 29.8476 40.4377 26.6798 41.1502C23.1834 41.9721 19.5396 41.9327 16.0617 41.0353C13.3111 40.3009 10.7417 39.0062 8.51484 37.2323C6.15801 35.3608 4.23293 33.0025 2.87109 30.3187Z"
                      fill="#319F43" />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_97">
                      <rect width="42" height="42" fill="white" />
                    </clipPath>
                  </defs>
                </svg>

                <svg class="logos-facebook" width="42" height="42" viewBox="0 0 42 42" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_1_103)">
                    <path
                      d="M42 21C42 9.40209 32.5979 0 21 0C9.40209 0 0 9.40193 0 21C0 31.4816 7.67944 40.1696 17.7188 41.7449V27.0703H12.3867V21H17.7188V16.3734C17.7188 11.1103 20.854 8.20312 25.6507 8.20312C27.9484 8.20312 30.3516 8.61328 30.3516 8.61328V13.7812H27.7036C25.0947 13.7812 24.2812 15.4001 24.2812 17.0609V21H30.1055L29.1744 27.0703H24.2812V41.7449C34.3206 40.1696 42 31.4818 42 21Z"
                      fill="#1877F2" />
                    <path
                      d="M29.1744 27.0703L30.1055 21H24.2812V17.0609C24.2812 15.3999 25.0948 13.7812 27.7036 13.7812H30.3516V8.61328C30.3516 8.61328 27.9484 8.20312 25.6507 8.20312C20.854 8.20312 17.7188 11.1103 17.7188 16.3734V21H12.3867V27.0703H17.7188V41.7449C18.8042 41.915 19.9013 42.0003 21 42C22.0987 42.0003 23.1958 41.915 24.2812 41.7449V27.0703H29.1744Z"
                      fill="white" />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_103">
                      <rect width="42" height="42" fill="white" />
                    </clipPath>
                  </defs>
                </svg>

                <svg class="bi-github" width="42" height="42" viewBox="0 0 42 42" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M21 0C9.3975 0 0 9.3975 0 21C0 30.2925 6.01125 38.1413 14.3587 40.9238C15.4087 41.1075 15.8025 40.4775 15.8025 39.9263C15.8025 39.4275 15.7763 37.7738 15.7763 36.015C10.5 36.9863 9.135 34.7287 8.715 33.5475C8.47875 32.9437 7.455 31.08 6.5625 30.5812C5.8275 30.1875 4.7775 29.2162 6.53625 29.19C8.19 29.1637 9.37125 30.7125 9.765 31.3425C11.655 34.5187 14.6738 33.6263 15.8813 33.075C16.065 31.71 16.6162 30.7913 17.22 30.2662C12.5475 29.7412 7.665 27.93 7.665 19.8975C7.665 17.6138 8.47875 15.7237 9.8175 14.2537C9.6075 13.7287 8.8725 11.5763 10.0275 8.68875C10.0275 8.68875 11.7863 8.1375 15.8025 10.8413C17.4825 10.3688 19.2675 10.1325 21.0525 10.1325C22.8375 10.1325 24.6225 10.3688 26.3025 10.8413C30.3188 8.11125 32.0775 8.68875 32.0775 8.68875C33.2325 11.5763 32.4975 13.7287 32.2875 14.2537C33.6263 15.7237 34.44 17.5875 34.44 19.8975C34.44 27.9562 29.5312 29.7412 24.8588 30.2662C25.62 30.9225 26.2763 32.1825 26.2763 34.1512C26.2763 36.96 26.25 39.2175 26.25 39.9263C26.25 40.4775 26.6438 41.1338 27.6938 40.9238C31.8628 39.5167 35.4856 36.8375 38.0521 33.2634C40.6185 29.6892 41.9993 25.4001 42 21C42 9.3975 32.6025 0 21 0Z"
                    fill="white" />
                </svg>
              </div>
            </div>
          </div>

          <div class="frame-9">
            <div class="don-t-have-an-account-signup">
              Don't have an account?
              <router-link class="text-info" to="/signup">
                Create one
              </router-link>
            </div>
          </div>
        </div>
      </div>

      <div class="line-3"></div>
    </div>
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
import ClosedEyeIcon from './ClosedEyeIcon.vue';

export default {
  name: "Login",
  components: { ClosedEyeIcon },
  props: {},
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
<style scoped>
.login {
  background: #0f0f0f;
  max-width: 2560px;
  height: 1040px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
}

.welcome-back {
  color: #ffffff;
  text-align: left;
  font: 600 96px "Noto Sans", sans-serif;
  position: absolute;
  left: 60px;
  top: 381px;
}

.frame-1 {
  border-style: solid;
  border-color: #ffffff;
  border-width: 4px;
  padding: 14px 24px 14px 24px;
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: flex-start;
  justify-content: flex-start;
  position: absolute;
  left: 82px;
  top: 512px;
}

.skip-the-lag {
  color: #ffffff;
  text-align: left;
  font: 400 italic 32px "Noto Sans", sans-serif;
  position: relative;
}

.ellipse-1 {
  background: linear-gradient(180deg,
      rgba(83, 0, 97, 1) 0%,
      rgba(13, 10, 48, 1) 100%);
  border-radius: 50%;
  width: 302px;
  height: 302px;
  position: absolute;
  left: 749px;
  top: 81px;
}

.ellipse-2 {
  background: linear-gradient(180deg,
      rgba(48, 0, 97, 1) 0%,
      rgba(10, 16, 48, 1) 100%);
  border-radius: 50%;
  width: 220px;
  height: 220px;
  position: absolute;
  left: 1169.84px;
  top: 824.82px;
  transform-origin: 0 0;
  transform: rotate(-28.5deg) scale(1, 1);
}

.frame-2 {
  background: var(--glass-1-fill-carey,
      linear-gradient(-38.77deg,
        rgba(191, 191, 191, 0.06) 0%,
        rgba(0, 0, 0, 0) 100%),
      linear-gradient(to left, rgba(0, 0, 0, 0.14), rgba(0, 0, 0, 0.14)));
  border-radius: 20px;
  border-width: 1px;
  border-style: solid;
  border-image: var(--glass-1-stroke-carey,
      linear-gradient(166.93deg,
        rgba(175, 175, 175, 1) 0%,
        rgba(96, 96, 96, 0) 100%));
  border-image-slice: 1;
  width: 480px;
  height: 796px;
  position: absolute;
  right: 60px;
  top: calc(50% - 398px);
  box-shadow: -8px 4px 5px 0px rgba(0, 0, 0, 0.24);
  overflow: hidden;
  backdrop-filter: blur(26.5px);
}

.frame-5 {
  display: flex;
  flex-direction: column;
  gap: 101px;
  align-items: center;
  justify-content: flex-start;
  position: absolute;
  left: 40px;
  top: 97px;
}

.frame-4 {
  display: flex;
  flex-direction: column;
  gap: 47px;
  align-items: flex-start;
  justify-content: flex-start;
  flex-shrink: 0;
  position: relative;
}

.upper-section {
  display: flex;
  flex-direction: column;
  gap: 14px;
  align-items: flex-start;
  justify-content: flex-start;
  flex-shrink: 0;
  position: relative;
}

.login-text {
  display: flex;
  flex-direction: column;
  gap: 0px;
  align-items: flex-start;
  justify-content: flex-start;
  flex-shrink: 0;
  position: relative;
}

.login2 {
  color: #ffffff;
  text-align: left;
  font: 600 36px "Noto Sans", sans-serif;
  position: relative;
}

.glad-you-re-back {
  color: #ffffff;
  text-align: left;
  font: 500 16px "Noto Sans", sans-serif;
  position: relative;
}

.credentials {
  display: flex;
  flex-direction: column;
  gap: 25px;
  align-items: flex-start;
  justify-content: flex-start;
  flex-shrink: 0;
  position: relative;
}

.password-rem {
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: flex-start;
  justify-content: flex-start;
  flex-shrink: 0;
  position: relative;
}

.remember {
  display: flex;
  flex-direction: row;
  gap: 4px;
  align-items: center;
  justify-content: flex-start;
  flex-shrink: 0;
  position: relative;
}

.remember-me {
  color: #ffffff;
  text-align: left;
  font: 500 16px "Noto Sans", sans-serif;
  position: relative;
}

.login-bt-fp {
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  position: relative;
}

.login3 {
  background: linear-gradient(90.57deg,
      rgba(98, 142, 255, 1) 0%,
      rgba(135, 64, 205, 1) 53.125%,
      rgba(88, 4, 117, 1) 100%);
  border-radius: 12px;
  padding: 14px 10px 14px 10px;
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 400px;
  font: 600 20px "Noto Sans", sans-serif;
  text-align: left;
  position: relative;
}

.forgot-password {
  color: #ffffff;
  text-align: left;
  font: 500 16px "Noto Sans", sans-serif;
  position: relative;
}

.other-logins {
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;
  justify-content: flex-start;
  flex-shrink: 0;
  position: relative;
}

.or {
  display: flex;
  flex-direction: row;
  gap: 20px;
  align-items: center;
  justify-content: flex-start;
  flex-shrink: 0;
  position: relative;
}

.line-1 {
  border-style: solid;
  border-color: #4d4d4d;
  border-width: 2px 0 0 0;
  flex-shrink: 0;
  width: 170px;
  height: 0px;
  position: relative;
}

.or2 {
  color: #4d4d4d;
  text-align: left;
  font: 500 16px "Noto Sans", sans-serif;
  position: relative;
}

.line-2 {
  border-style: solid;
  border-color: #4d4d4d;
  border-width: 2px 0 0 0;
  flex-shrink: 0;
  width: 170px;
  height: 0px;
  position: relative;
}

.frame-3 {
  display: flex;
  flex-direction: row;
  gap: 18px;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  position: relative;
}

.devicon-google {
  flex-shrink: 0;
  position: relative;
  overflow: visible;
}

.logos-facebook {
  flex-shrink: 0;
  position: relative;
  overflow: visible;
}

.bi-github {
  flex-shrink: 0;
  position: relative;
  overflow: visible;
}

.frame-9 {
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
  justify-content: flex-start;
  flex-shrink: 0;
  position: relative;
}

.don-t-have-an-account-signup {
  color: #ffffff;
  text-align: left;
  font: 500 16px "Noto Sans", sans-serif;
  position: relative;
}

.line-3 {
  border-style: dashed;
  border-color: #4d4d4d;
  border-width: 2px 0 0 0;
  width: 561px;
  height: 0px;
  position: absolute;
  left: 330px;
  top: 550px;
  transform-origin: 0 0;
  transform: rotate(0deg) scale(1, 1);
}
</style>
