<template>
    <div class="text-center div-button-edit">
        <v-dialog v-model="dialog" max-width="600">
            <template v-slot:activator="{ props: activatorProps }">
                <button class="text-none font-weight-regular mdi mdi-pencil bt-edit" variant="tonal"
                    v-bind="activatorProps"></button>
            </template>

            <v-card>
                <v-card-title class="d-flex align-center ga-2 cor-primaria">
                    <i class="mdi mdi-briefcase"></i>
                    Editar Experiência
                </v-card-title>
                <v-card-text>
                    <v-row dense>
                        <v-col cols="12" md="12">
                            <v-text-field label="Cargo" required></v-text-field>
                        </v-col>
                        <v-col cols="12" md="12">
                            <v-text-field label="Empresa" required></v-text-field>
                        </v-col>
                        <v-col cols="12" md="12">
                            <v-select label="Contrato"
                            :items="['CLT', 'PJ', 'Estágio', 'Temporário', 'Aprendizagem', 'Outro']" required></v-select>
                        </v-col>
                        <v-col cols="12" md="6">
                            <v-date-input label="Início" required></v-date-input>
                        </v-col>
                        <v-col cols="12" md="6">
                            <v-date-input label="Fim" required></v-date-input>
                        </v-col>
                    </v-row>
                </v-card-text>

                <v-divider></v-divider>

                <v-card-actions>
                    <v-spacer></v-spacer>

                    <v-btn text="Excluir" variant="plain" @click="dialog = false" class="border-red-accent-4"></v-btn>
                    <v-btn text="Fechar" variant="outlined" @click="dialog = false"></v-btn>
                    <v-btn text="Salvar" color="Enviar" variant="tonal" @click="dialog = false" class="bg-purple-darken-4"></v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>

<style lang="scss" scoped>
.div-button-edit {
    display: flex;
    justify-content: end;
    position: absolute;
    bottom: 0;
    right: 0;
}

.bt-edit {
    // background-color: #6732d2;
    // color: white;
    text-transform: uppercase;
    margin: 10px 20px;
}
</style>

<script>
import { VDateInput } from 'vuetify/labs/VDateInput';

export default {
    data: () => ({
        dialog: false,
    }),
    components: {
        VDateInput,
    },
}
</script>