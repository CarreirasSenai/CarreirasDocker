<template>
    <div class="text-center">
    <v-btn variant="tonal" class="bg-deep-purple-accent-3" @click="dialog = true">
        Detalhes
    </v-btn>

    <v-dialog v-model="dialog" min-width="300px" max-width="1000px">
        <v-container>
            <v-row>
                <v-col cols="12">
                    <v-card class="rounded-lg">
                        <v-card-title class="opacity-100 bg-deep-purple-accent-4 rounded-lg observavel">Analista de
                            Dados</v-card-title>
                        <v-card-text style="max-height: 60vh;" class="overflow-auto d-flex flex-column ga-2 pa-4 pl-6 pr-6">
                            <div class="d-flex align-center ga-2 flex-wrap">
                                <div class="text-deep-purple-accent-4 text-h6 w-100 border-b">Local:</div>
                                <div class="text-subtitle-1">América, Joinville</div>
                            </div>
                            
                            <div class="d-flex align-center ga-2 flex-wrap">
                                <div class="text-deep-purple-accent-4 text-h6 w-100 border-b">Contrato:</div>
                                <div class="text-subtitle-1">CLT</div>
                            </div>

                            <div class="d-flex align-center ga-2 flex-wrap">
                                <div class="text-deep-purple-accent-4 text-h6 w-100 border-b">Modalidade:</div>
                                <div class="text-subtitle-1">Híbrido</div>
                            </div>

                            <div class="d-flex align-center ga-2 flex-wrap">
                                <div class="text-deep-purple-accent-4 text-h6 w-100 border-b">Remuneração:</div>
                                <div class="text-subtitle-1">Salário compativel com a função + Vale refeição</div>
                            </div>

                            <div class="d-flex align-start ga-2 flex-wrap">
                                <div class="text-deep-purple-accent-4 text-h6 w-100 border-b">Responsabilidades:</div>
                                <div class="text-subtitle-1">
                                    <ul class="ml-6">
                                        <li>Desenvolver e manter aplicações web utilizando Angular para o front-end.
                                        </li>
                                        <li>Conceber, implementar e gerir bases de dados SQL para suportar a
                                            funcionalidade das
                                            aplicações.</li>
                                        <li>Criar e manter APIs usando Python para garantir uma integração perfeita
                                            entre os
                                            sistemas front-end e back-end.</li>
                                    </ul>
                                </div>
                            </div>

                            <div class="d-flex align-center ga-2 flex-wrap">
                                <div class="text-deep-purple-accent-4 text-h6 w-100 border-b">Habilidades Exigidas:</div>
                                <v-chip variant="outlined" v-for="n in 5" :k="n">
                                    Javascript
                                </v-chip>
                            </div>

                            <div class="d-flex align-center ga-2 flex-wrap">
                                <div class="text-deep-purple-accent-4 text-h6 w-100 border-b">Habilidades Opcionais:</div>
                                <v-chip variant="outlined" v-for="n in 5" :k="n">
                                    React
                                </v-chip>
                            </div>

                            <div class="d-flex align-start ga-2 flex-wrap">
                                <div class="text-deep-purple-accent-4 text-h6 w-100 border-b">Benefícios:</div>
                                <div class="text-subtitle-1">
                                    <ul class="ml-6">
                                        <li>Plano Dentário</li>
                                        <li>Vale Refeição</li>
                                        <li>Gym Pass</li>
                                    </ul>
                                </div>
                            </div>

                            <div class="d-flex align-center ga-2 flex-wrap mt-2">
                                <div class="text-deep-purple-accent-4 text-h6 w-100 border-b">Visão Geral da Vaga:</div>
                                <div class="text-subtitle-1">
                                    Somos a Fintech Magalu, a vertical de produtos e
                                    serviços financeiros do grupo Magazine Luiza. Como parte de um dos pilares
                                    estratégicos do Magalu, nosso ecossistema possui tecnologias de meios de pagamento
                                    desenvolvidas por um time incrível.

                                    Sim! Temos a cultura de desenvolver a tecnologia de todos os nossos produtos e
                                    gostamos do desafio de trabalhar em larga escala, cuidando para que os clientes
                                    tenham uma experiência excepcional conosco.

                                    Ao longo dos últimos anos crescemos de forma exponencial e nos tornamos uma das
                                    maiores empresas do segmento. Desenvolvemos soluções para contas digitais, gestão de
                                    recebíveis, split de pagamentos, saques e transferências, pagamentos corporativos,
                                    adquirência, pix, cartão de crédito, crédito, e muito mais. Contamos com milhões de
                                    clientes presentes em todo o território nacional e estamos sempre buscando formas
                                    inovadoras de criar nossos produtos.

                                    Nosso propósito é digitalizar empresas, especialmente empreendedores brasileiros,
                                    além de promover a inclusão de pessoas no sistema financeiro através das nossas
                                    plataformas!

                                    Estamos procurando alguém que saiba lidar com desafios diários e com capacidade de
                                    trabalhar em equipe. Que some ao time, faça as coisas acontecerem e esteja preparado
                                    para as mudanças tecnológicas constantes e demandas próprias e desafiadoras.

                                    Queremos construir produtos cada vez melhores - inovadores, rentáveis, escaláveis e
                                    com os quais as pessoas adoram trabalhar. Buscamos oferecer o melhor com o que
                                    temos. Gostamos de pessoas e nos ajudamos mutuamente. Se você é apaixonado(a) pelo o
                                    que faz, estuda sempre, forma talentos e trabalha em equipe essa vaga é para você!
                                </div>
                            </div>

                        </v-card-text>
                        <span class="mdi mdi-close position-absolute top-0 right-0 mr-2" @click="dialog = false"></span>
                        <v-card-actions class="d-flex justify-space-between">
                            <div class="d-flex flex-wrap ga-2">
                                <v-btn class="bt-primario">Inscrever-se</v-btn>
                                <v-btn class="bt-primario" @click="showPublishVacancyDialog">Editar vaga</v-btn>
                                <v-dialog v-model="publishVacancyDialog" max-width="700">
                                    <v-card>
                                        <v-card-title class="headline">Editar de vaga</v-card-title>
                                        <FormPublicacaoVaga ref="form" @updateFormValid="updateFormValid" />
                                        <v-card-actions>
                                            <v-spacer></v-spacer>
                                            <v-btn color="deep-purple-darken-2" text @click="publishVacancyDialog = false">Fechar</v-btn>
                                            <v-btn class="bt-primario" :disabled="!formValid" variant="tonal" @click="submitForm">Salvar</v-btn>
                                        </v-card-actions>
                                    </v-card>
                                </v-dialog>
                                <small>O button alterna conforme o user logado.</small>
                            </div>
                            <div class="d-flex align-center justify-center ga-2">
                                TOTVS
                                <img src="/src/assets/avatar.png" width="50px">
                            </div>
                        </v-card-actions>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </v-dialog>
    </div>
</template>

<script>
export default {
    data() {
        return {
            dialog: false,
            publishVacancyDialog: false,
            formValid: '',
        }
    },
    methods: {
        showPublishVacancyDialog(){
            this.publishVacancyDialog = true;
        },
        updateFormValid(valid) {
            this.formValid = valid;
        },
        submitForm(){
            const form = this.$refs.form.$refs.form
            if(form.validate()){
            if(window.location.href.includes(""))
                alert("Formulário editado na tela de home");
            } else {
                alert('Preencha os campos corretamente');
            }
        }
    }
}
</script>

<style scoped>
* {
    /* border: 1px solid red; */
}

small {
    /* color: #6732d2; */
    font-size: small;
    text-transform: uppercase;
    letter-spacing: 0px;
}

.mdi-close {
    color: white;
}

.mdi-close:hover {
    color: white;
}
</style>