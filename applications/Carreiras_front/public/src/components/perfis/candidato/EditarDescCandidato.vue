<template>
    <div class="text-center position-absolute bottom-0 right-0 ma-2 mr-4">
        <v-dialog v-model="dialog">
            <template v-slot:activator="{ props: activatorProps }">
                <button class="text-none font-weight-regular mdi mdi-pencil bt-edit" variant="tonal"
                    v-bind="activatorProps"></button>
                <!-- <v-btn icon="mdi-pencil" variant="text" v-bind="activatorProps"></v-btn> -->
            </template>

            <v-container>
                <v-row no-gutters>
                    <v-col cols="12">
                        <v-card>
                            <v-card-title class="d-flex align-center ga-2 cor-primaria">
                                <i class="mdi mdi-account"></i>
                                Editar Descrição
                            </v-card-title>
                            <v-card-text>
                                <v-row dense>
                                    <v-col cols="12" md="12">
                                        <v-textarea label="Descrição" required></v-textarea>
                                    </v-col>
                                </v-row>
                            </v-card-text>

                            <v-divider></v-divider>

                            <v-card-actions>
                                <v-spacer></v-spacer>

                                <v-btn text="Fechar" variant="outlined" @click="dialog = false"></v-btn>
                                <v-btn text="Salvar" color="Enviar" variant="tonal" @click="dialog = false"
                                    class="bg-purple-darken-4"></v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </v-dialog>
    </div>
</template>

<style lang="scss" scoped>
.mdi {
    color: #6732d2;
}

.mdi:hover {
    color: #6732d2;
}
</style>

<script>
export default {
    data: () => ({
        dialog: false,
    }),
}
</script>