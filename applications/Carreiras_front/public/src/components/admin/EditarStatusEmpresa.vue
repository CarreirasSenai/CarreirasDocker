<template>
    <div>
        <v-btn @click.stop.prevent="dialog = true" style="max-height: 70vh;" class="overflow-auto">
            Desativar Empresa
        </v-btn>

        <v-dialog v-model="dialog">
            <v-container>
                <v-row class="d-flex justify-center">
                    <v-col cols="12">
                        <v-form ref="form" v-model="isValid" class="my-4">
                            <v-card title="Justificativa para Desativação da Empresa">
                                <v-card-text>
                                    <!-- <p>empresa: {{ empresa }}</p>
                                    <p>Vaga: {{ vaga }}</p>
                                    <br> -->
                                    <div class="mb-5 d-flex flex-wrap ga-2">
                                        <p>Empresa: <v-chip variant="outlined">{{ Empresas }}</v-chip></p>
                                    </div>
                                    <v-textarea label="Justifique a Desativação da Empresa"
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
        Empresas: 'TOTVS - Sistemas Inteligentes',
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
