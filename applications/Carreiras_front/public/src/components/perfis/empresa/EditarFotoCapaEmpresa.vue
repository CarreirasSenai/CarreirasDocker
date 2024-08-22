<template>
    <!-- Editar 1 perfil candidato-->
    <div class="text-start d-flex justify-start">
        <v-dialog v-model="dialog" max-width="600">
            <template v-slot:activator="{ props: activatorProps }">
                <v-btn variant="text" v-bind="activatorProps" class="w-100 rounded-0">Editar Foto e Capa</v-btn>
            </template>

            <v-card title="Editar Foto e Capa">
                <v-card-text>
                    <v-row dense>
                        <v-col cols="12" md="12">
                            <v-file-input :rules="rules" accept="image/png, image/jpeg, image/bmp"
                                label="Foto de perfil" placeholder="Foto de perfil" prepend-icon="mdi-camera">
                            </v-file-input>
                        </v-col>
                        <v-col cols="12" md="12">
                            <v-file-input :rules="rules" accept="image/png, image/jpeg, image/bmp" label="Foto de capa"
                                placeholder="Foto de capa" prepend-icon="mdi-camera">
                            </v-file-input>
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
    /* border: 1px solid red; */
    position: absolute !important;
    right: 0;
    top: 115px;
}
</style>

<script>
import profissoes from '@/assets/profissoes.json';

export default {
    data: () => ({
        dialog: false,
        profissoes: profissoes,
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