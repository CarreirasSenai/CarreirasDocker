<template>
    <v-row>
        <!-- <v-col cols="12" lg="4" md="6" sm="6" v-for="n in 9" :key="n"> -->
        <v-col cols="12" lg="4" md="6" sm="6" v-for="vaga in vagas" :key="vaga.id">
            <v-card class="elevation-2 rounded-lg observavel" style="border-color: #6200EA !important;">
                <v-card-title class="opacity-100 bg-deep-purple-accent-4 rounded-lg observavel">
                    {{ vaga.vaga }}
                </v-card-title>
                <v-card-text class="pa-4">
                    <p class="observavel">Local: &nbsp;{{ vaga.local }}</p>
                    <p class="observavel">Contrato: &nbsp;{{ vaga.contrato }}</p>
                    <p class="observavel">Modalidade: &nbsp;{{ vaga.modalidade }}</p>
                    <p class="observavel">Remuneração: &nbsp;{{ vaga.remuneracao }}</p>
                </v-card-text>
                <small
                    class="position-absolute top-0 right-0 ma-2 text-white observavel bg-deep-purple-accent-3 pa-1 rounded-lg elevation-2 data-vaga">
                    {{ vaga.data }}
                </small>
                <v-card-actions class="d-flex justify-space-between">
                    <ModalDetalhesVaga />
                    <div class="d-flex align-center justify-center ga-2">
                        {{ vaga.empresa }}
                        <img src="/src/assets/avatar.png" width="50px" class="rounded-circle">
                    </div>
                </v-card-actions>
            </v-card>
        </v-col>
    </v-row>
</template>

<script>
export default {
    data() {
        return {
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
                {
                    id: 2,
                    vaga: 'Analista de Segurança da Informação',
                    local: 'Vila Olímpia, São Paulo, São Paulo',
                    contrato: 'CLT',
                    modalidade: 'Híbrido',
                    remuneracao: 'R$ 8.500,00',
                    empresa: 'SecureTech',
                    data: '4 dias atrás'
                },
                {
                    id: 3,
                    vaga: 'Engenheiro de Software',
                    local: 'Savassi, Belo Horizonte, Minas Gerais',
                    contrato: 'PJ',
                    modalidade: 'Remoto',
                    remuneracao: 'R$ 10.000,00',
                    empresa: 'CodeWorks',
                    data: '1 semana atrás'
                },
                {
                    id: 4,
                    vaga: 'Desenvolvedor Front-end',
                    local: 'Botafogo, Rio de Janeiro, Rio de Janeiro',
                    contrato: 'CLT',
                    modalidade: 'Presencial',
                    remuneracao: 'R$ 6.000,00',
                    empresa: 'Web Solutions',
                    data: '2 semanas atrás'
                },
                {
                    id: 5,
                    vaga: 'Cientista de Dados',
                    local: 'Lourdes, Belo Horizonte, Minas Gerais',
                    contrato: 'CLT',
                    modalidade: 'Híbrido',
                    remuneracao: 'R$ 12.000,00',
                    empresa: 'Data Insights',
                    data: '3 semanas atrás'
                },
                {
                    id: 6,
                    vaga: 'DevOps Engineer',
                    local: 'Centro, Curitiba, Paraná',
                    contrato: 'PJ',
                    modalidade: 'Remoto',
                    remuneracao: 'R$ 9.500,00',
                    empresa: 'CloudTech',
                    data: '5 dias atrás'
                },
            ],

        }
    },

    mounted() {
        function observarEntrada(entries, observer) {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.classList.add('visivel');
                    }, index * 10); // Ajuste o tempo conforme necessário
                }
            });
        }

        const observer = new IntersectionObserver(observarEntrada, {
            root: null,
            rootMargin: '0px',
            threshold: 0.7
        });

        // Observar os elementos observavel
        this.$el.querySelectorAll('.observavel').forEach((element) => {
            observer.observe(element);
        });
    },
};
</script>

<style scoped>
@media(max-width:600px) {
    .row-rev div:nth-child(2) {
        display: flex;
        justify-content: start;
    }
}

.v-card {
    transition: transform 0.3s;
}

.v-card:hover {
    transform: scale(1.05);
}

.v-card.visivel {
    animation: fadeInLeft 1s normal;
}

.v-card-title.visivel {
    animation: fadeInLeft 2s normal;
}

.data-vaga.visivel {
    animation: fadeInLeft 2s normal;
}
</style>
