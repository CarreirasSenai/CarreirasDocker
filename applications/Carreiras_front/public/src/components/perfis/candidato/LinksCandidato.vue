<template>
    <v-card>
        <v-card-title class="cor-primaria">Links</v-card-title>
        <v-card-text class="d-flex">
            <v-container>
                <v-row>
                    <v-col cols="12">
                        <p class="mdi mdi-instagram"><a target="_blank" href="https://www.instagram.com/"
                                class="mdi ml-2">instagram.com/teste</a></p>
                        <p class="mdi mdi-facebook"><a target="_blank" href="https://www.facebook.com/"
                                class="mdi ml-2">facebook.com/teste</a></p>
                        <p class="mdi mdi-linkedin"><a target="_blank" href="https://www.linkedin.com/in/"
                                class="mdi ml-2">linkedin.com/teste</a></p>
                        <p class="mdi mdi-github"><a target="_blank" href="https://github.com/"
                                class="mdi ml-2">github.com/teste</a></p>
                        <p class="mdi mdi-web"><a target="_blank" href="" class="mdi ml-2">portifolio.com/teste</a></p>
                    </v-col>
                </v-row>
            </v-container>
        </v-card-text>
    </v-card>
</template>

<style scoped>
* {
    /* border: 1px solid red; */
}

p {
    margin: 5px;
}

.mdi {
    font-size: 21px;
}

a {
    text-decoration: none;
    color: #6732d2;
}
</style>