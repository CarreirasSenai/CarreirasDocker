<template>
    <div class="text-center div-button-edit">
        <v-dialog v-model="dialog" max-width="600">
            <template v-slot:activator="{ props: activatorProps }">
                <v-btn class="bt-add" variant="outlined" v-bind="activatorProps">
                    Adicionar
                </v-btn>
            </template>

            <v-card>
                <v-card-title class="d-flex align-center ga-2 cor-primaria">
                    <i class="mdi mdi-school"></i>
                    Adicionar Curso
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

                    <v-btn text="Fechar" variant="plain" @click="dialog = false"></v-btn>

                    <v-btn color="Enviar" text="Salvar" variant="tonal" @click="dialog = false"></v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>

<style lang="scss" scoped>
.div-button-edit {
    display: flex;
    justify-content: end;
}

.bt-add {
    background-color: #6732d2;
    color: white;
    // margin: 10px 20px;
    border-color: #6732d2;
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