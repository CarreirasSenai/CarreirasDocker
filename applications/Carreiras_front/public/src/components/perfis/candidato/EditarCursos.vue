<template>
    <div class="text-center div-button-edit">
        <v-dialog v-model="dialog" max-width="600">
            <template v-slot:activator="{ props: activatorProps }">
                <button class="text-none font-weight-regular mdi mdi-pencil bt-edit" variant="tonal"
                    v-bind="activatorProps"></button>
            </template>

            <v-card>
                <v-card-title class="d-flex align-center ga-2 cor-primaria">
                    <i class="mdi mdi-school"></i>
                    Editar Curso
                </v-card-title>
                <v-card-text>
                    <v-row dense>
                        <v-col cols="12" md="12">
                            <v-text-field label="Nome" required></v-text-field>
                        </v-col>
                        <v-col cols="12" md="12">
                            <v-text-field label="Nível" required></v-text-field>
                        </v-col>
                        <v-col cols="12" md="12">
                            <v-text-field label="Unidade de Ensino" required></v-text-field>
                        </v-col>
                        <v-col cols="6">
                            <v-text-field label="Início" type="date" required></v-text-field>
                        </v-col>
                        <v-col cols="6">
                            <v-text-field label="Fim" type="date" required></v-text-field>
                        </v-col>
                    </v-row>
                </v-card-text>

                <v-divider></v-divider>

                <v-card-actions>
                    <v-spacer></v-spacer>

                    <v-btn text="Excluir" variant="plain" @click="dialog = false" class="border-red-accent-4"></v-btn>
                    <v-btn text="Fechar" variant="outlined" @click="dialog = false"></v-btn>
                    <v-btn text="Salvar" color="Enviar" variant="tonal" @click="dialog = false"
                        class="bg-purple-darken-4"></v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>

<style scoped>
.div-button-edit {
    display: flex;
    justify-content: end;
    position: absolute;
    bottom: 0;
    right: 0;
}

.bt-edit {
    text-transform: uppercase;
    margin: 10px 20px;
}
</style>

<script>
export default {
    data: () => ({
        dialog: false,
    }),
}
</script>