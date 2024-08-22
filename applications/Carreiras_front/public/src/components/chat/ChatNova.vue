<template>
    <div id="chat-home"
        class="bg-white rounded-t-lg mr-5  bottom-0 right-0 h-75 w-25 d-flex align-end justify-end flex-colunm min-width-300" style="height: 75vh !important;">
        <v-container fluid class="chat-container d-flex flex-column h-100">
            <v-row class="ma-1">
                <v-toolbar density="comfortable" title="Novo Chat" class="bg-white border-b">
                    <v-btn icon="mdi-message-badge-outline" @click="$emit('AlternaChatHomeNova')"></v-btn>
                    <v-btn icon="mdi-square-edit-outline" variant="tonal"></v-btn>
                    <v-btn icon="mdi-close" @click="$emit('FecharChatNova')"></v-btn>
                </v-toolbar>
            </v-row>
            <v-row class="ma-1">
                <v-card-text>
                    <v-text-field class="rounded-xl" :loading="loading" append-inner-icon="mdi-magnify"
                        density="compact" label="Busque uma pessoa" variant="solo" hide-details single-line
                        @click:append-inner="onClick">
                    </v-text-field>
                </v-card-text>
            </v-row>
            <v-row class="ma-1 chat-row overflow-y-auto">
                <v-list class="w-100 ga-5 chat-list">
                    <v-list-item class="mb-5" v-for="n in 15" :key="n" :title="'Candidato ' + n" subtitle=""
                        :prepend-avatar="'https://randomuser.me/api/portraits/women/' + n + '.jpg'" @click="$emit('FecharChatConversa')">
                    </v-list-item>
                </v-list>
            </v-row>
        </v-container>
    </div>
</template>

<script>
export default {
    data: () => ({
        loaded: false,
        loading: false,
    }),

    methods: {
        onClick() {
            this.loading = true

            setTimeout(() => {
                this.loading = false
                this.loaded = true
            }, 2000)
        },

        // buscaConversa(valor) {
        //     if (window.innerWidth < 800) {
        //         document.querySelector('.dialogo').style.display = 'flex';
        //         document.querySelector('.div-users').style.display = 'none';
        //         document.querySelector('.menu-mob').style.display = 'none';
        //     } else {
        //         alert("Conversa do " + valor);
        //     }
        // },
    },
}
</script>

<style>
#chat-home {
    box-shadow: 0 4px 16px #333;
}
</style>