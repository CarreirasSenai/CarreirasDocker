<template>
    <v-dialog v-model="localVisible" max-width="960">
        <v-row style="margin: 0" justify="center">
            <v-col cols="12" sm="9" md="10" lg="11">
                <v-card class="px-4 elevation-12 signup-card" rounded="xl">
                    <span class="close" @click="close">&times;</span>
                    <v-card-text>
                        <h1 class="text-center my-1">Inserir Entrevista</h1>
                        <v-form class="my-4" @submit.prevent="submitForm" v-model="isValid">
                            <v-row>
                                <v-col cols="12">
                                    <v-text-field v-model="titulo" :rules="tituloRules" label="Título"
                                        density="compact"></v-text-field>
                                </v-col>
                                <v-col cols="12">
                                    <v-textarea counter="600" auto-grow v-model="descricao" :rules="descricaoRules"
                                        label="Descrição" density="compact"></v-textarea>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col cols="12" sm="8">
                                    <v-select v-model="candidato" :rules="candidatoRules" :items="items"
                                        label="Candidato" density="compact"></v-select>
                                </v-col>
                                <v-col cols="12" sm="4">
                                    <v-text-field type="datetime-local" v-model="data" :rules="dataRules"
                                        label="Data e hora" density="compact"></v-text-field>
                                </v-col>
                            </v-row>
                            <div class="sign-in-buttons d-flex justify-center my-4">
                                <v-btn text @click="resetForm">Cancelar</v-btn>
                                <v-btn class="bt-primario" :disabled="!isValid" :loading="isLoading"
                                    @click="submitForm">Salvar</v-btn>
                            </div>
                        </v-form>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-dialog>
</template>

<script>
export default {
    props: {
        isVisible: {
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {
            localVisible: this.isVisible,
            titulo: '',
            descricao: '',
            data: '',
            candidato: '',
            isValid: false,
            isLoading: false,
            tituloRules: [
                (v) => !!v || "Título Requerido",
                (v) => v.length >= 3 || "Título deve ter pelo menos 3 caracteres",
            ],
            descricaoRules: [
                (v) => !!v || "Descrição Requerida",
                (v) => v.length <= 600 || "Máximo permitido 600 caracteres",
            ],
            dataRules: [
                (v) => !!v || "Data e hora requeridas"
            ],
            candidatoRules: [
                (v) => !!v || "Candidato Requerido"
            ],
            items: [
                'João',
                'Maria',
                'Felipe',
                'Thiago',
                'Rodrigo',
                'Paula'
            ]
        };
    },
    watch: {
        isVisible(newVal) {
            this.localVisible = newVal;
        },
        localVisible(newVal) {
            this.$emit('update:isVisible', newVal);
        },
    },
    methods: {
        close() {
            this.localVisible = false;
        },
        resetForm() {
            this.titulo = '';
            this.descricao = '';
            this.data = '';
            this.candidato = '';
            this.isValid = false;
        },
        submitForm() {
            this.isLoading = true;
            if (this.isValid) {
                const newEvent = {
                    date: this.data,
                    title: this.titulo,
                    description: this.descricao,
                    type: 'event',
                    candidate: this.candidato,
                };
                this.$emit('save-event', newEvent);
                this.isLoading = false;
                this.resetForm();
                this.close();
            } else {
                this.isLoading = false;
                console.log("Formulário inválido");
            }
        }
    },
};
</script>

<style lang="scss" scoped>
.close{
    padding: 10px;
}
.signup-card {
    margin: 0 auto;
    width: auto;
    max-width: 800px;
}

.v-row {
    display: flex;
    align-items: center;
    justify-content: center;
}

.logo-container {
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.carreiras-logo {
    height: 70px;
    width: fit-content;
    margin: 0 10px;
}

.sign-in-buttons {
    margin-top: 20px;
}

.adm-btn {
    border: thin solid #3a1c76 !important;
    color: #3a1c76 !important;
    size: "large";
}
</style>
