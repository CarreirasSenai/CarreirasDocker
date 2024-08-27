<template>
    <div class="ma-4 mb-2 d-flex justify-space-between align-center">
        <h1 style="font-size: 4vh;">Vagas da Empresa</h1>
        <v-btn class="bt-primario" @click="publishVacancyDialog = true">+ Nova</v-btn>
    </div>
    <v-divider class="ml-4 mr-4"></v-divider>
    <v-dialog v-model="publishVacancyDialog" max-width="700">
        <v-card>
            <v-card-title class="headline">Publicação de Vaga</v-card-title>
            <v-card-text class="overflow-auto">
                <FormPublicacaoVaga ref="form" @updateFormValid="updateFormValid" />
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="deep-purple-darken-2" text @click="publishVacancyDialog = false">Fechar</v-btn>
                <v-btn class="bt-salvar" :disabled="!formValid" variant="tonal" @click="submitForm">Salvar</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>

    <v-row class="ma-1">
        <v-col cols="12" lg="4" md="6" sm="6" v-for="n in 6" :key="n">
            <v-card class="elevation-2 rounded-lg observavel" style="border-color: #6200EA !important;">
                <v-card-title class="opacity-100 bg-deep-purple-accent-4 rounded-lg observavel">
                    Desenvolvedor Full Stack
                </v-card-title>
                <v-card-text class="pa-4">
                    <p class="observavel">Local:&nbsp; Desenvolvedor Full Stack</p>
                    <p class="observavel">Contrato:&nbsp; Centro, São Paulo, São Paulo</p>
                    <p class="observavel">Modalidade:&nbsp; CLT</p>
                    <p class="observavel">Remuneração:&nbsp; R$ 7.000,00</p>
                </v-card-text>
                <small
                    class="position-absolute top-0 right-0 ma-2 text-white observavel bg-deep-purple-accent-3 pa-1 rounded-lg elevation-2 data-vaga">
                    2 dias atrás
                </small>
                <v-card-actions class="d-flex justify-space-between">
                    <ModalDetalhesVaga />
                    <ModalCandidatosVagas />
                </v-card-actions>
            </v-card>
        </v-col>
    </v-row>
</template>

<script>
import ModalCandidatosVagas from './ModalCandidatosVagas.vue';
import ModalDetalhesVaga from './ModalDetalhesVaga.vue';

export default {
    data() {
        return {
            publishVacancyDialog: false,
            formValid: false,
            vagas: [
                {
                    id: 1,
                    vaga: 'Desenvolvedor Full Stack',
                    local: 'Centro, São Paulo, São Paulo',
                    contrato: 'CLT',
                    modalidade: 'Remoto',
                    remuneracao: 'R$ 7.000,00',
                    empresa: 'Tech Innovators',
                    data: '2 dias atrás'
                },
            ]
        };
    },
    methods: {
        updateFormValid(valid) {
            this.formValid = valid;
        },
        submitForm() {
            const form = this.$refs.form.$refs.form
            if  (window.location.href.includes("perfil-empresa"))  {
                alert("Formulário salvo no perfil da empresa");
            } else {
                alert('Preencha os campos corretamente');
            }
        },
    }
};
</script>

<style lang="scss" scoped>
.box-shadow {
    box-shadow: 0 2px 4px gray;
}

.bt-salvar {
    background-color: #6200EA;
    color: white;
    border-color: #6200EA;
}

@media(max-width:600px) {
    .row-rev div:nth-child(2) {
        /* flex-direction: column-reverse; */
        display: flex;
        justify-content: start;
    }
}
</style>

<!-- <p>Local: América, Joinville</p>
<p>Contrato: CLT</p>
<p>Modalidade: Híbrido</p>
<p>Remuneração: Salário compativel com a função</p> -->