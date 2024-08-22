<template>
    <div class="text-center div-button-edit">
        <v-dialog v-model="dialog" max-width="400">
            <template v-slot:activator="{ props: activatorProps }">                
                <v-btn class="bt-add mt-5 mb-2" variant="outlined" v-bind="activatorProps">
                    Adicionar
                </v-btn>
            </template>

            <v-card prepend-icon="mdi-account" title="Adicionar Benefícios">
                <v-card-text>
                    <v-row dense>
                        <v-col cols="12" md="12">
                            <v-text-field label="Insira um Benefício" required></v-text-field>
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
    border-color: #6732d2;
}

@media(max-width: 650px) {
    .div-button-edit {
        justify-content: center;
    }
}
</style>

<script>
export default {
    data: () => ({
        dialog: false,
    }),
}
</script>