<template>
    <div class="text-center div-button-edit">
        <v-dialog v-model="dialog" max-width="300">
            <template v-slot:activator="{ props: activatorProps }">
                <button class="text-none font-weight-regular mdi mdi-pencil bt-edit"
                    v-bind="activatorProps" type="button"></button>
            </template>
            <v-card prepend-icon="mdi-account" title="Editar Habilidades Extras">
                <v-card-text>
                    <v-row dense>
                        <v-col cols="12" md="12">
                            <v-text-field label="Habilidade Extra" required></v-text-field>
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
    bottom: -7px;
    right: -5px;
}

.bt-edit {
    // background-color: #6732d2;
    // color: white;
    text-transform: uppercase;
    margin: 10px 20px;
}

.mdi {
    color: #6732d2af;
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