<template>
    <!-- Editar 1 perfil candidato-->
    <div class="text-center">
        <v-dialog v-model="dialog" max-width="600px">
            <template v-slot:activator="{ props: activatorProps }">
                <v-btn variant="text" v-bind="activatorProps" class="w-100 rounded-0 justify-start">Editar Links</v-btn>
            </template>

            <v-card title="Editar Links">
                <v-card-text>
                    <v-row dense>
                        <v-col cols="12" md="12">
                            <v-text-field prepend-icon="mdi mdi-instagram" clearable label="instagram.com/" variant="underlined" v-model="instagram" required></v-text-field>
                            <v-text-field prepend-icon="mdi mdi-facebook" clearable label="facebook.com/" variant="underlined" v-model="facebook" required></v-text-field>
                            <v-text-field prepend-icon="mdi mdi-linkedin" clearable label="linkedin.com/" variant="underlined" v-model="linkedin" required></v-text-field>
                            <v-text-field prepend-icon="mdi mdi-github" clearable label="github.com/" variant="underlined" v-model="github" required></v-text-field>
                            <v-text-field prepend-icon="mdi mdi-web" clearable label="www.seusite.com" variant="underlined" v-model="site" required></v-text-field>
                        </v-col>
                    </v-row>
                </v-card-text>

                <v-divider></v-divider>

                <v-card-actions>
                    <v-spacer></v-spacer>

                    <v-btn text="Limpar" variant="plain" @click="dialog = false" class="border-red-accent-4"></v-btn>
                    <v-btn text="Fechar" variant="outlined" @click="dialog = false"></v-btn>
                    <v-btn text="Salvar" color="Enviar" variant="tonal" @click="dialog = false"
                        class="bg-purple-darken-4"></v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>

<style lang="scss" scoped>
.mdi {
    color: #6732d2af;
}

.mdi:hover {
    color: #6732d2;
}

.div-button-edit {
    border-radius: 100%;
    height: 50px;
    width: 50px;
    position: absolute !important;
    right: 0;
    top: 115px;
}
</style>

<script>
export default {
    data: () => ({
        dialog: false,
        instagram: '',
        facebook: '',
        linkedin: '',
        github: '',
        site: '',
    }),
    methods: {
        // Função para filtrar profissões com base na entrada do usuário
        filterProfissoes(item, queryText) {
            // Converte o item e a consulta para minúsculas para comparação
            const query = queryText.toLowerCase();
            return item.toLowerCase().includes(query);
        }
    }
}
</script>