<template>
    <v-navigation-drawer v-model="this.drawer" :mini-variant="!this.drawer" permanent>
        <v-list>
            <v-list-item class="px-2">
                <v-list-item-avatar>
                    <v-img :src="user.avatarUrl"></v-img>
                </v-list-item-avatar>
                <v-list-item link>
                    <v-list-item-content>
                        <v-list-item-title class="text-h6">
                            {{ user.firstName }} {{ user.lastName }}
                        </v-list-item-title>
                        <v-list-item-subtitle>{{ user.role }}</v-list-item-subtitle>
                        <v-list-item-subtitle>{{ user.email }}</v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
            </v-list-item>

        </v-list>

        <v-divider></v-divider>

        <v-list nav dense shaped>
            <v-list-item :to="{ name: 'home' }">
                <v-list-item-icon>
                    <v-img src="@/assets/svg/home-investment.svg"></v-img>
                </v-list-item-icon>
                <v-list-item-title>Home</v-list-item-title>
            </v-list-item>
            <v-list-item link>
                <v-list-item-icon>
                    <v-img src="@/assets/svg/transactions.svg"></v-img>
                </v-list-item-icon>
                <v-list-item-title>Transactions</v-list-item-title>
            </v-list-item>
            <v-list-item :to="{ name: 'cards' }">
                <v-list-item-icon>
                    <v-img src="@/assets/svg/credit-card(1).svg"></v-img>
                </v-list-item-icon>
                <v-list-item-title>Credit Cards</v-list-item-title>
            </v-list-item>
            <v-divider />
            <v-list-item link>
                <v-list-item-icon>
                    <v-img src="@/assets/svg/forex-card.svg"></v-img>
                </v-list-item-icon>
                <v-list-item-title>Mileage</v-list-item-title>
            </v-list-item>
        </v-list>

    </v-navigation-drawer>
</template>

<script>
import { mapGetters } from "vuex";
export default {
    name: "NavigationDrawer",
    data() {
        return {
            user: {},
        }
    },
    mounted() {
        this.getUserData();
    },

    computed: {
        ...mapGetters(["drawer"]),
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
};
</script>
