<template>
    <div>
        <v-dialog v-model="dialog">
            <template v-slot:activator="{ props: activatorProps }">
                <v-btn variant="text" v-bind="activatorProps" class="w-100 rounded-0 justify-start">Editar Descrição</v-btn>
            </template>

            <v-container>
                <v-row no-gutters>
                    <v-col cols="12">
                        <v-card title="Editar Descrição">
                            <v-card-text>
                                <v-textarea label="Descrição" required></v-textarea>
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