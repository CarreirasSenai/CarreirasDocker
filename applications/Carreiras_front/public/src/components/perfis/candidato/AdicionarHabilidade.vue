<template>
    <div class="text-center div-button-edit">
        <v-dialog v-model="dialog" max-width="400">
            <template v-slot:activator="{ props: activatorProps }">                
                <v-btn class="bt-add" variant="outlined" v-bind="activatorProps">
                    Adicionar
                </v-btn>
            </template>

            <v-card>
                <v-card-title class="d-flex align-center ga-2 cor-primaria">
                    <i class="mdi mdi-star"></i>
                    Adicionar Habilidade
                </v-card-title>
                <v-card-text>
                    <v-row dense>
                        <v-col cols="12" md="12">
                            <v-text-field label="Insira uma Habilidade" required></v-text-field>
                        </v-col>
                    </v-row>

                    <!-- <small class="text-caption text-medium-emphasis">*Indica os campos obrigatórios</small> -->
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
export default {
    data: () => ({
        dialog: false,
    }),
}
</script>