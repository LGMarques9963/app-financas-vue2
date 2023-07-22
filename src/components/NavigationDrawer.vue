<template>
    <v-navigation-drawer expand-on-hover>
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
                        <v-list-item-subtitle>{{user.role}}</v-list-item-subtitle>
                        <v-list-item-subtitle>{{user.email}}</v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
            </v-list-item>

        </v-list>

        <v-divider></v-divider>

        <v-list nav dense>
            <v-list-item link>
                <v-list-item-icon>
                    <v-icon>mdi-folder</v-icon>
                </v-list-item-icon>
                <v-list-item-title>My Files</v-list-item-title>
            </v-list-item>
            <v-list-item link>
                <v-list-item-icon>
                    <v-icon>mdi-account-multiple</v-icon>
                </v-list-item-icon>
                <v-list-item-title>Shared with me</v-list-item-title>
            </v-list-item>
            <v-list-item link>
                <v-list-item-icon>
                    <v-icon>mdi-star</v-icon>
                </v-list-item-icon>
                <v-list-item-title>Starred</v-list-item-title>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
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
    methods: {
        getUserData() {
            this.$http
                .get("/profile.php")
                .then((response) => {
                    this.user = response.data;
                })
                .catch((error) => {
                    console.log(error);
                });
        },
    },
};
</script>
