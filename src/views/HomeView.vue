<template>
  <v-main>
    <v-container>
      <v-row justify="space-around">
        <v-col>

          <v-card width="300" shaped>
            <v-card-title>
              <div class="font-weight-bold ml-8 mb-2 available-money">
                Available Money
              </div>
            </v-card-title>
            <v-card-text>
              <v-row>
                <div class="font-weight-bold ml-8 mb-2 available-money">
                  $ 0.00
                </div>
                <v-spacer></v-spacer>
                <v-avatar rounded size="56">
                  <!-- <svg class="component-1" width="56" height="56" viewBox="0 0 56 56" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M34.0727 30.6113C33.9568 30.2188 33.8161 29.8772 33.651 29.5871C33.4859 29.2968 33.2495 29.0135 32.9412 28.7365C32.6333 28.4596 32.3564 28.2365 32.1108 28.067C31.8654 27.8973 31.5282 27.7076 31.0996 27.4977C30.6713 27.2877 30.3319 27.1315 30.0821 27.0288C29.832 26.9262 29.4702 26.7856 28.9969 26.607C28.5773 26.4464 28.2649 26.3236 28.0593 26.2388C27.854 26.1539 27.584 26.0335 27.2491 25.8771C26.9144 25.721 26.6644 25.5825 26.4992 25.462C26.334 25.3416 26.1577 25.1943 25.9702 25.0202C25.7826 24.8461 25.651 24.6608 25.575 24.4644C25.4992 24.268 25.4612 24.0536 25.4612 23.8215C25.4612 23.2144 25.729 22.7187 26.2647 22.3349C26.8005 21.9511 27.4925 21.7591 28.3408 21.7591C28.7156 21.7591 29.0978 21.8104 29.4859 21.9132C29.874 22.0159 30.2067 22.1317 30.4835 22.2613C30.7605 22.3908 31.0216 22.5337 31.2672 22.6899C31.5128 22.8462 31.6868 22.9644 31.7896 23.0448C31.8923 23.1252 31.9574 23.1787 31.9839 23.2055C32.1001 23.2948 32.2203 23.326 32.3454 23.2993C32.4792 23.2904 32.582 23.2189 32.6536 23.0851L33.7386 21.1297C33.8457 20.9512 33.8236 20.7815 33.6717 20.6207C33.618 20.5671 33.5513 20.5047 33.4704 20.4332C33.3903 20.3617 33.2161 20.2323 32.948 20.0447C32.6802 19.8572 32.3967 19.6898 32.0978 19.5425C31.7986 19.3953 31.4101 19.2456 30.9323 19.0939C30.4549 18.942 29.9614 18.8394 29.4524 18.7858V16.4286C29.4524 16.3036 29.4123 16.2009 29.3321 16.1205C29.2518 16.0403 29.1491 16 29.0239 16H27.2157C27.0996 16 26.9992 16.0424 26.9144 16.1272C26.8296 16.2121 26.7872 16.3125 26.7872 16.4286V18.8393C25.3853 19.1071 24.2469 19.7053 23.3719 20.6339C22.4969 21.5626 22.0593 22.6428 22.0593 23.875C22.0593 24.2411 22.0974 24.5893 22.1733 24.9195C22.2491 25.25 22.3429 25.5469 22.4546 25.8102C22.5661 26.0738 22.7247 26.3326 22.93 26.5871C23.1353 26.8416 23.3296 27.0604 23.5126 27.2433C23.6957 27.4262 23.9346 27.616 24.2291 27.8124C24.5238 28.0089 24.7761 28.1675 24.986 28.288C25.1959 28.4081 25.4748 28.5469 25.823 28.7028C26.1712 28.8592 26.4458 28.9773 26.6468 29.0579C26.8477 29.1382 27.1222 29.2499 27.4705 29.3925C27.9526 29.58 28.3099 29.7251 28.542 29.8278C28.7743 29.9306 29.0688 30.0734 29.4262 30.2564C29.7832 30.4393 30.0443 30.6068 30.2096 30.7586C30.3748 30.9105 30.5243 31.098 30.6583 31.3211C30.7923 31.5443 30.8594 31.7809 30.8594 32.031C30.8594 32.7364 30.5849 33.2809 30.0356 33.6646C29.4866 34.0486 28.8502 34.2406 28.1271 34.2406C27.797 34.2406 27.4664 34.2051 27.1361 34.1337C25.9754 33.9012 24.8906 33.3432 23.8816 32.4593L23.8549 32.4325C23.7744 32.3346 23.6673 32.2943 23.5335 32.3123C23.3906 32.3301 23.2879 32.3837 23.2254 32.4732L21.8459 34.2811C21.7119 34.4596 21.721 34.6426 21.8727 34.8301C21.9174 34.8838 21.9955 34.9643 22.1071 35.0713C22.2189 35.1786 22.4265 35.3458 22.7299 35.5739C23.0335 35.8017 23.3638 36.0157 23.7211 36.2168C24.0782 36.4177 24.5313 36.6162 25.0805 36.8127C25.6297 37.0089 26.1988 37.1473 26.7881 37.2276V39.5713C26.7881 39.6876 26.8306 39.7879 26.9154 39.8728C27.0002 39.9578 27.1006 40 27.2167 40H29.0249C29.1501 40 29.2528 39.9599 29.3331 39.8796C29.4133 39.7994 29.4533 39.6966 29.4533 39.5714V37.2276C30.8732 36.9955 32.0273 36.3861 32.9156 35.3994C33.8039 34.4128 34.2483 33.2364 34.2483 31.8704C34.2478 31.4241 34.1899 31.0044 34.0727 30.6113Z"
                      fill="#000000" />
                  </svg> -->
                  <v-img src="@/assets/svg/coin-stack.svg"></v-img>

                </v-avatar>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col>

          <v-card width="300" shaped>
            <v-card-title>
              <div class="font-weight-bold ml-8 mb-2 available-money">
                Next Credit Card Bill
              </div>
            </v-card-title>
            <v-card-text>
              <v-row>
                <div class="font-weight-bold ml-8 mb-2 available-money">
                  $ 0.00
                </div>
                <v-spacer></v-spacer>
                <v-avatar rounded size="56">
                  <v-img src="@/assets/svg/credit-card(1).svg"></v-img>
                </v-avatar>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col>

          <v-card width="300" shaped>
            <v-card-title>
              <div class="font-weight-bold ml-8 mb-2 available-money">
                Miles
              </div>
            </v-card-title>
            <v-card-text>
              <v-row>
                <div class="font-weight-bold ml-8 mb-2 available-money">
                  $ 0.00
                </div>
                <v-spacer></v-spacer>
                <v-avatar rounded size="56">
                  <v-img src="@/assets/svg/forex-card.svg"></v-img>
                </v-avatar>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col>

          <v-card width="300" shaped>
            <v-card-title>
              <div class="font-weight-bold ml-8 mb-2 available-money">
                Total Assets
              </div>
            </v-card-title>
            <v-card-text>
              <v-row>
                <div class="font-weight-bold ml-8 mb-2 available-money">
                  $ 0.00
                </div>
                <v-spacer></v-spacer>
                <v-avatar rounded size="56">
                  <v-img src="@/assets/svg/savings.svg"></v-img>
                </v-avatar>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col>

          <v-card width="300" shaped>
            <v-card-title>
              <div class="font-weight-bold ml-8 mb-2 available-money">
                Total Income
              </div>
            </v-card-title>
            <v-card-text>
              <v-row>
                <div class="font-weight-bold ml-8 mb-2 available-money">
                  $ 0.00
                </div>
                <v-spacer></v-spacer>
                <v-avatar rounded size="56">
                  <v-img src="@/assets/svg/gross-total-income.svg"></v-img>
                </v-avatar>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <v-row justify="space-around">
        <v-col width="100%">

          <v-card class="mx-auto text-center" color="green" dark>
            <v-card-text>
              <v-sheet color="rgba(0, 0, 0, .12)">
                <v-sparkline :value="value" color="rgba(255, 255, 255, .7)" height="100" padding="24" stroke-linecap="round"
                smooth>
                <template v-slot:label="item">
                  ${{ item.value }}
                </template>
              </v-sparkline>
            </v-sheet>
          </v-card-text>
          
          <v-card-text>
            <div class="text-h4 font-weight-thin">
              Sales Last 24h
            </div>
          </v-card-text>
          
          <v-divider></v-divider>
          
          <v-card-actions class="justify-center">
            <v-btn block text>
              Go to Report
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>

      </v-row>
    </v-container>
  </v-main>
</template>

<script>
import HelloWorld from "../components/HelloWorld";

export default {
  name: "Home",

  components: {
    HelloWorld,
  },
  data: () => ({
    value: [
      423,
      446,
      675,
      510,
      590,
      610,
      760,
    ],
  }),
};
</script>

<style>
.avaliable-money {
  color: var(--secondary-500-base, #082253);
  text-align: left;
  font: var(--mobile-body-body-2-bold, 700 14px/18px "Inter", sans-serif);
  position: relative;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

._25-k {
  color: var(--secondary-300, #394e75);
  text-align: left;
  font: var(--mobile-heading-h-1-regular, 300 31px/20px "Inter", sans-serif);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.soft-pills-badges {
  background: rgba(1, 236, 165, 0.05);
  border-radius: 4px;
  padding: 2px 4px 2px 4px;
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  position: relative;
}

.succes {
  color: var(--alert-succes-600, #00b374);
  text-align: left;
  font: 500 12px/12px "Inter", sans-serif;
  position: relative;
}
</style>
