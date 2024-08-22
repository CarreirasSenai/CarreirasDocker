<template>
    <div class="text-center pa-4">
        <v-btn @click="dialog = true" class="bg-red">
            Recusar
        </v-btn>

        <v-dialog v-model="dialog">
            <v-container>
                <v-row class="d-flex justify-center">
                    <v-col cols="12">
                        <v-form ref="form" v-model="isValid" class="my-4">
                            <v-card title="Justificativa para não Contratação">
                                <v-card-text>
                                    <!-- <p>Candidato: {{ candidato }}</p>
                                    <p>Vaga: {{ vaga }}</p>
                                    <br> -->
                                    <div class="mb-5 d-flex flex-wrap ga-2">
                                        <p>Candidato: <v-chip variant="outlined">{{ candidato }}</v-chip></p>
                                        <p>Vaga: <v-chip variant="outlined">{{ vaga }}</v-chip></p>
                                    </div>
                                    <v-textarea label="Justifique a não contratação do candidato"
                                        v-model="justificativa" :rules="[rules.justificativa, rules.length(200)]"
                                        counter="200" variant="outlined"></v-textarea>
                                </v-card-text>
                                <v-card-actions class="d-flex justify-space-between">
                                    <v-btn text @click="resetForm">Cancelar</v-btn>
                                    <v-btn class="bt-primario" text="enviar" :disabled="!isValid" :loading="isLoading"
                                        @click="submitForm"></v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-form>
                    </v-col>
                </v-row>
            </v-container>
        </v-dialog>
    </div>
</template>

<script>
export default {
    data: () => ({
        dialog: false,
        candidato: 'Tyrion Lannister',
        vaga: 'Gerente de Projetos',
        isValid: false,
        isLoading: false,
        justificativa: '',
        rules: {
            length: len => v => (v || '').length >= len || `Necessário ${len} caracteres para enviar a justificativa!`
        },
    }),
    methods: {
        resetForm() {
            this.justificativa = '';
            this.isValid = false;
            this.dialog = false;
        },
        submitForm() {
            if (this.justificativa.length >= 200) {
                console.log(this.justificativa);
            } else {
                console.log("Menor");
            }
        }
    }
}
</script>
