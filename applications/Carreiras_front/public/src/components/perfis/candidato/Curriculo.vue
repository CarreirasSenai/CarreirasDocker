<template>
    <EditarInfoCandidato />
    <div class="div-infos">
        <v-expansion-panels v-model="panel">
            <v-col cols="12" md="12">
                <v-expansion-panel>
                    <v-expansion-panel-title>
                        <i class="mdi mdi-account cor-primaria" style="margin-right: 8px;"></i>
                        <h3>Descrição</h3>
                    </v-expansion-panel-title>
                    <v-expansion-panel-text style="padding-bottom: 60px;">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore
                        et dolore magnaaliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                        ut
                        aliquip ex ea commodo consequat.
                        et dolore magnaaliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                        ut
                        aliquip ex ea commodo consequat.
                        et dolore magnaaliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                        ut
                        aliquip ex ea commodo consequat.
                        <EditarDescCandidato />
                    </v-expansion-panel-text>
                </v-expansion-panel>
            </v-col>
            <v-col cols="12" md="6">
                <v-expansion-panel>
                    <v-expansion-panel-title>
                        <i class="mdi mdi-school cor-primaria" style="margin-right: 8px;"></i>
                        <h3>Formações</h3>
                    </v-expansion-panel-title>
                    <v-expansion-panel-text>
                        <v-row>
                            <v-col cols="12" lg="6" md="12" sm="12" class="bloco">
                                <v-card variant="tonal">
                                    <v-card-title>Sistemas da informação</v-card-title>
                                    <v-card-subtitle>Bacharelado</v-card-subtitle>
                                    <v-card-text>UniSENAI Joinville <br> De 2020 a 2024</v-card-text>
                                    <EditarFormacoes />
                                </v-card>
                            </v-col>
                            <v-col cols="12" lg="6" md="12" sm="12" class="bloco">
                                <v-card variant="tonal">
                                    <v-card-title>Desenvolvimento de Sistemas</v-card-title>
                                    <v-card-subtitle>Técnico</v-card-subtitle>
                                    <v-card-text>UniSENAI Joinville <br> De 2020 a 2024</v-card-text>
                                    <EditarFormacoes />
                                </v-card>
                            </v-col>
                        </v-row>
                        <AdicionarFormacao />
                    </v-expansion-panel-text>
                </v-expansion-panel>
            </v-col>
            <v-col cols="12" md="6">
                <v-expansion-panel>
                    <v-expansion-panel-title>
                        <i class="mdi mdi-school cor-primaria" style="margin-right: 8px;"></i>
                        <h3>Cursos</h3>
                    </v-expansion-panel-title>
                    <v-expansion-panel-text>
                        <v-row>
                            <v-col cols="12" lg="6" md="12" sm="12" class="bloco">
                                <v-card variant="tonal">
                                    <v-card-title>Inglês</v-card-title>
                                    <v-card-subtitle>Profissionalizante</v-card-subtitle>
                                    <v-card-text>Senac <br> De 2020 a 2024</v-card-text>
                                    <EditarCursos />
                                </v-card>
                            </v-col>
                        </v-row>
                        <AdicionarCurso />
                    </v-expansion-panel-text>
                </v-expansion-panel>
            </v-col>
            <v-col cols="12" md="6">
                <v-expansion-panel>
                    <v-expansion-panel-title>
                        <i class="mdi mdi-briefcase cor-primaria" style="margin-right: 8px;"></i>
                        <h3>Experiências Profissionais</h3>
                    </v-expansion-panel-title>
                    <v-expansion-panel-text>
                        <v-row>
                            <v-col cols="12" lg="6" md="12" sm="12" class="bloco">
                                <v-card variant="tonal">
                                    <v-card-title>Suporte Técnico</v-card-title>
                                    <v-card-subtitle>Soft Master</v-card-subtitle>
                                    <v-card-text>CLT <br> De 2020 a 2024</v-card-text>
                                    <EditarExperiencias />
                                </v-card>
                            </v-col>
                            <v-col cols="12" lg="6" md="12" sm="12" class="bloco">
                                <v-card variant="tonal">
                                    <v-card-title>Chapeiro</v-card-title>
                                    <v-card-subtitle>Burguer Master</v-card-subtitle>
                                    <v-card-text>CLT <br> De 2020 a 2024</v-card-text>
                                    <EditarExperiencias />
                                </v-card>
                            </v-col>
                        </v-row>
                        <AdicionarExperiencia />
                    </v-expansion-panel-text>
                </v-expansion-panel>
            </v-col>
            <v-col cols="12" md="6">
                <v-expansion-panel>
                    <v-expansion-panel-title>
                        <i class="mdi mdi-star cor-primaria" style="margin-right: 8px;"></i>
                        <h3 class="cor-primaria">Habilidades</h3>
                    </v-expansion-panel-title>
                    <v-expansion-panel-text>
                        <v-row>
                            <v-col cols="12" lg="6" md="12" sm="12" class="bloco"
                                v-for="(habilidade, index) in habilidades" :key="index">
                                <v-card variant="tonal">
                                    <v-card-text> {{ habilidade }} </v-card-text>
                                    <EditarHabilidade />
                                </v-card>
                            </v-col>
                        </v-row>
                        <AdicionarHabilidade />
                    </v-expansion-panel-text>
                </v-expansion-panel>
            </v-col>
        </v-expansion-panels>
    </div>
</template>

<script>
import EditarDescCandidato from './EditarDescCandidato.vue';

export default {
    data() { // Estado inicial do componente
        return {
            descricao: '',
            formacoes: '',
            cursos: '',
            experiencias: '',
            habilidades: '',
            panel: [0],
        };
    },
    created() {
        // this.perfilUser(); // Quando o componente é criado, busca os dados do perfil
        this.teste();
    },
    methods: {
        // async perfilUser() {
        //     try {
        //         const response = await fetch('/user/perfil');
        //         if (!response.ok) {
        //             throw new Error('Erro na resposta da rede');
        //         }
        //         const data = await response.json();

        //         this.descricao = data.descricao; // Atualiza o estado com os dados recebidos
        //         this.formacoes = data.formacoes;
        //         this.habilidades = data.habilidades;
        //     } catch (error) {
        //         console.error('Erro ao carregar os dados do perfil:', error);

        //         this.descricao = 'Erro ao carregar os dados do perfil.'; // Define uma mensagem de erro em caso de falha
        //         this.formacoes = 'Erro ao carregar os dados do perfil.';
        //         this.habilidades = 'Erro ao carregar os dados do perfil.';
        //     }
        // }

        teste() {
            this.habilidades = [
                "Malabarismo",
                "Cozinhar",
                "Programação",
                "Ensinar",
                "Cantar"
            ]
        }
    }
};
</script>

<style>
.div-infos {
    margin: 0 20px 20px 20px;
    padding-bottom: 3px;

    .v-row {
        margin: 0 20px 20px 20px;
    }

    h3 {
        font-size: 20px;
    }

    .bloco-interno {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin: 10px 10px 30px 10px;
        border-bottom: 1px solid #E8E8E8;
    }

    .bloco-interno p {
        min-width: 150px;
        text-align: start;
        color: #666;
    }

    .bloco-interno h3 {
        min-width: 250px;
        color: #212121;
    }
}

.v-expansion-panels {
    .v-expansion-panel-title {
        color: #6732d2;
    }

    .mdi {
        color: #6732d2;
    }

    .bloco {
        padding: 10px;
    }

    .v-card-title {
        font-size: unset;
    }

    @media(max-width:600px) {
        .bloco {
            padding: 10px 0;
        }
    }
}
</style>