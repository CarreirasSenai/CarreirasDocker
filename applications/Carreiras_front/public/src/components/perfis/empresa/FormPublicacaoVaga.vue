<template>
    <v-form ref="form" v-model="formValid">
        <v-row>
            <v-col cols="12">
                <v-text-field v-model="titulo" :rules="tituloRules" label="Título" bg-color="#F7F7F7"
                    density="compact"></v-text-field>
            </v-col>
            <v-col cols="12" sm="8" md="8" lg="8">
                <v-text-field v-model="localizacao" :rules="localizacaoRules" label="Localização" bg-color="#F7F7F7"
                    density="compact"></v-text-field>
            </v-col>
            <v-col cols="12" sm="4" md="4" lg="4">
                <v-select v-model="estado" :rules="estadoRules" :items="listEstados" label="Estado" bg-color="#F7F7F7"
                    density="compact"></v-select>
            </v-col>
            <v-col cols="12">
                <v-select v-model="tipoContrato" :rules="tipoContratoRules" :items="listContratos"
                    label="Tipo de contrato" bg-color="#F7F7F7" density="compact"></v-select>
            </v-col>
            <v-col cols="12">
                <v-select v-model="modalidade" :rules="modalidadeRules" :items="listModalidades" label="Modalidade"
                    bg-color="#F7F7F7" density="compact"></v-select>
            </v-col>
            <v-col cols="12">
                <v-text-field v-model="quantia" label="Remuneração" :rules="quantiaRules" @input="formatarQuantia"
                    prepend-icon="mdi-currency-usd" type="number"></v-text-field>
            </v-col>
            <v-col cols="12">
                <v-textarea :model-value="descricao" label="Descrição" :rules="descricaoRules" counter maxlength="1500"
                    auto-grow></v-textarea>
            </v-col>
            <v-col cols="12">
                <v-expansion-panels>
                    <v-expansion-panel bg-color="#F7F7F7">
                        <v-expansion-panel-title>
                            <i class="mdi mdi-list-box cor-primaria" style="margin-right: 8px;"></i>
                            <h3 class="cor-primaria">Responsabilidades</h3>
                        </v-expansion-panel-title>
                        <v-expansion-panel-text>
                            <v-row>
                                <v-col cols="12" lg="6" md="12" sm="12" class="bloco"
                                    v-for="(responsabilidade, index) in responsabilidades" :key="index">
                                    <v-card variant="tonal">
                                        <v-card-text> {{ responsabilidade }} </v-card-text>
                                        <EditarResponsabilidades />
                                    </v-card>
                                </v-col>
                            </v-row>
                            <AdicionarResponsabilidades />
                        </v-expansion-panel-text>
                    </v-expansion-panel>
                </v-expansion-panels>
            </v-col>
            <v-col cols="12">
                <v-expansion-panels>
                    <v-expansion-panel bg-color="#F7F7F7">
                        <v-expansion-panel-title>
                            <i class="mdi mdi-medal cor-primaria" style="margin-right: 8px;"></i>
                            <h3 class="cor-primaria">Habilidades Exigidas</h3>
                        </v-expansion-panel-title>
                        <v-expansion-panel-text>
                            <v-row>
                                <v-col cols="12" lg="6" md="12" sm="12" class="bloco"
                                    v-for="(habilidadeExigida, index) in habilidadesExigidas" :key="index">
                                    <v-card variant="tonal">
                                        <v-card-text> {{ habilidadeExigida }} </v-card-text>
                                        <EditarHabilidadesExigidas />
                                    </v-card>
                                </v-col>
                            </v-row>
                            <AdicionarHabilidadesExigidas />
                        </v-expansion-panel-text>
                    </v-expansion-panel>
                </v-expansion-panels>
            </v-col>
            <v-col cols="12">
                <v-expansion-panels>
                    <v-expansion-panel bg-color="#F7F7F7">
                        <v-expansion-panel-title>
                            <i class="mdi mdi-star cor-primaria" style="margin-right: 8px;"></i>
                            <h3 class="cor-primaria">Habilidades Extras</h3>
                        </v-expansion-panel-title>
                        <v-expansion-panel-text>
                            <v-row>
                                <v-col cols="12" lg="6" md="12" sm="12" class="bloco"
                                    v-for="(habilidadeExtra, index) in habilidadesExtras" :key="index">
                                    <v-card variant="tonal">
                                        <v-card-text> {{ habilidadeExtra }} </v-card-text>
                                        <EditarHabilidadesExtras />
                                    </v-card>
                                </v-col>
                            </v-row>
                            <AdicionarHabilidadesExtras />
                        </v-expansion-panel-text>
                    </v-expansion-panel>
                </v-expansion-panels>
            </v-col>
            <v-col cols="12">
                <v-expansion-panels>
                    <v-expansion-panel bg-color="#F7F7F7">
                        <v-expansion-panel-title>
                            <i class="mdi mdi-lightbulb cor-primaria" style="margin-right: 8px;"></i>
                            <h3 class="cor-primaria">Benefícios</h3>
                        </v-expansion-panel-title>
                        <v-expansion-panel-text>
                            <v-row>
                                <v-col cols="12" lg="6" md="12" sm="12" class="bloco"
                                    v-for="(beneficio, index) in beneficios" :key="index">
                                    <v-card variant="tonal">
                                        <v-card-text> {{ beneficio }} </v-card-text>
                                        <EditarBeneficios />
                                    </v-card>
                                </v-col>
                            </v-row>
                            <AdicionarBeneficios />
                        </v-expansion-panel-text>
                    </v-expansion-panel>
                </v-expansion-panels>
            </v-col>
            <v-col cols="12">
                <v-select v-model="niveisCargo" :rules="niveisCargoRules" :items="listNiveisCargo"
                    label="Nível de cargo" bg-color="#F7F7F7" density="compact"></v-select>
            </v-col>
            <v-col cols="12">
                <v-expansion-panels>
                    <v-expansion-panel bg-color="#F7F7F7">
                        <v-expansion-panel-title>
                            <i class="mdi mdi-timeline-check cor-primaria" style="margin-right: 8px;"></i>
                            <h3 class="cor-primaria">Etapas</h3>
                        </v-expansion-panel-title>
                        <v-expansion-panel-text>
                            <v-row>
                                <v-col cols="12" lg="6" md="12" sm="12" class="bloco">
                                    <v-card variant="tonal">
                                        <v-card-title>Inscrição</v-card-title>
                                        <v-card-text><strong>Início</strong>: 06/08/2024 - <br>
                                            <strong>Término</strong>: 09/08/2024</v-card-text>
                                        <EditarEtapas />
                                    </v-card>
                                </v-col>
                                <v-col cols="12" lg="6" md="12" sm="12" class="bloco">
                                    <v-card variant="tonal">
                                        <v-card-title>Inscrição</v-card-title>
                                        <v-card-text><strong>Início</strong>: 12/08/2024 - <br>
                                            <strong>Término</strong>: 16/08/2024</v-card-text>
                                        <EditarEtapas />
                                    </v-card>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col cols="12" lg="6" md="12" sm="12" class="bloco">
                                    <v-card variant="tonal">
                                        <v-card-title>Contratação</v-card-title>
                                        <v-card-text><strong>Início</strong>: 19/08/2024 - <br>
                                            <strong>Término</strong>: 24/08/2024</v-card-text>
                                        <EditarEtapas />
                                    </v-card>
                                </v-col>
                            </v-row>
                            <AdicionarEtapas />
                        </v-expansion-panel-text>
                    </v-expansion-panel>
                </v-expansion-panels>
            </v-col>
        </v-row>
    </v-form>
</template>

<script>
export default {
    data() {
        return {
            formValid: '',
            titulo: '',
            tituloRules: [(v) => !!v || 'Título requerido'],
            localizacao: '',
            localizacaoRules: [(v) => !!v || 'Localização requerida'],
            estado: 'Selecionar',
            estadoRules: [(v) => v !== 'Selecionar' || 'Estado requerido'],
            descricao: '',
            descricaoRules: [v => v.length <= 1500 || 'Máximo de 1.500 caracteres'],
            quantia: '',
            quantiaRules: [
                v => !!v || 'Remuneração requerida',
                v => !isNaN(v) || 'Valor inválido',
            ],
            listEstados: ['Selecionar', 'Acre - AC', 'Alagoas - AL', 'Amapá - AP', 'Amazonas - AM', 'Bahia - BA',
                'Ceará - CE', 'Distrito Federal - DF', 'Espírito Santo - ES', 'Goiás - GO', 'Maranhão - MA',
                'Mato Grosso - MT', 'Mato Grosso do Sul - MS', 'Minas Gerais - MG', 'Pará - PA', 'Paraíba - PB',
                'Paraná - PR', 'Pernambuco - PE', 'Piauí - PI', 'Rio de Janeiro - RJ', 'Rio Grande do Norte - RN',
                'Rio Grande do Sul - RS', 'Rondônia - RO', 'Roraima - RR', 'Santa Catarina - SC', 'São Paulo - SP',
                'Sergipe - SE', 'Tocantins - TO'],
            tipoContrato: 'Selecionar',
            tipoContratoRules: [(v) => v !== 'Selecionar' || 'Tipo de contrato requerido'],
            listContratos: ['Selecionar', 'Contrato por prazo determinado', 'Contrato por prazo indeterminado',
                'Contrato de trabalho eventual', 'Contrato de trabalho temporário', 'Contrato de trabalho parcial',
                'Contrato de trabalho autônomo', 'Contrato de experiência', 'Contrato de estágio',
                'Contrato de jovem aprendiz', 'Contrato para trainee', 'Contrato de teletrabalho',
                'Contrato intermitente', 'Contrato de trabalho terceirizado'],
            modalidade: 'Selecionar',
            modalidadeRules: [(v) => v !== 'Selecionar' || 'Modalidade requerida'],
            listModalidades: ['Selecionar', 'Presencial', 'Híbrido',
                'Home office', 'Trabalho externo', 'Freelance'],
            responsabilidades: '',
            habilidadesExtras: '',
            beneficios: '',
            niveisCargo: 'Selecionar',
            niveisCargoRules: [(v) => v !== "Selecionar" || 'Nível de cargo requerido'],
            listNiveisCargo: ["Selecionar", "Estagiário/Intern", "Assistente", "Júnior",
                "Pleno", "Sênior", "Supervisor", "Coordenador", "Gerente",
                "Diretor", "Vice-Presidente", "Presidente", "CEO (Chief Executive Officer)",
                "CFO (Chief Financial Officer)", "COO (Chief Operating Officer)", "CTO (Chief Technology Officer)",
                "CMO (Chief Marketing Officer)", "Conselho de Administração (Board of Directors)"],

        }
    },
    created() {
        this.inicializaInfosVagas();
    },
    watch: {
        formValid(newValue) {
            this.$emit('updateFormValid', newValue);
        }
    },
    methods: {
        formatarQuantia() {
            const valorFormatado = this.quantia.replace(/\D/g, "");
            const valorCasasDecimais = valorFormatado.replace(/(\d{1,})(\d{2})$/, "$1.$2")
            this.quantia = valorCasasDecimais;
        },
        inicializaInfosVagas() {
            this.responsabilidades = [
                "HTML",
                "CSS",
                "JavaScript",
                "Java",
                "MySQL"
            ];
            this.habilidadesExigidas = [
                "Trabalho em equipe",
                "Comunicação",
                "Proatividade",
                "HTML",
                "CSS",
                "JavaScript",
                "React"
            ];
            this.habilidadesExtras = [
                "Inglês intermediário",
                "Testes automatizados",
            ];
            this.beneficios = [
                "Vale Refeição",
                "Day-Off",
                "Plano Odontológico",
                "Plano de saúde"
            ];
        },
    },
}
</script>

<style lang="scss" scoped>
.v-expansion-panels {
    .v-expansion-panel-title {
        color: #6732d2e3;
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