<template>
    <div class="text-center div-button-edit">
        <v-dialog v-model="dialog" max-width="800">
            <template v-slot:activator="{ props: activatorProps }">
                <v-btn v-bind="activatorProps" class="bt-primario">Editar Vaga</v-btn>
            </template>

            <v-container>
                <v-row no-gutters>
                    <v-col cols="12">
                        <v-form class="my-4" @submit.prevent="">
                            <v-card title="Editar Vaga" class="pa-2">
                                <v-card-text>
                                    <v-row>
                                        <v-col cols="12" sm="6" md="6" lg="6">
                                            <h1>Mesmo form de inserir vaga</h1>
                                        </v-col>
                                    </v-row>
                                </v-card-text>
                                <v-divider></v-divider>
                                <v-card-actions>
                                    <v-spacer></v-spacer>
                                    <v-btn text="Excluir" variant="text" @click="dialog = false"></v-btn>
                                    <v-btn text="Fechar" variant="outlined" @click="dialog = false"></v-btn>
                                    <v-btn text="Salvar" color="Enviar" variant="tonal" @click="dialog = false"
                                        class="bg-purple-darken-4"></v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-form>
                    </v-col>
                </v-row>
            </v-container>
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

* {
    // border: 1px solid red;
}
</style>

<script>
export default {
    data: () => ({
        dialog: false,
    }),
}
</script>