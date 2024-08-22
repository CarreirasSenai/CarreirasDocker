<template>
    <v-btn variant="text" icon="mdi-account-multiple-check" @click="dialog = true"></v-btn>

    <v-dialog v-model="dialog" min-width="300px" max-width="800px">
        <v-container>
            <v-row>
                <v-col cols="12">
                    <v-card flat>
                        <v-card-title class="d-flex flex-wrap align-center pe-4 ga-2">
                            <h1 style="font-size: 2.5vh; text-overflow: ellipsis; overflow: hidden;">
                                Candidatos de Analista de Dados
                            </h1>

                            <v-spacer></v-spacer>

                            <v-text-field v-model="search" density="compact" label="Search"
                                prepend-inner-icon="mdi-magnify" variant="solo-filled" flat hide-details
                                single-line></v-text-field>
                        </v-card-title>

                        <v-divider></v-divider>
                        <v-data-table v-model:search="search" :items="items" height="500" class="position-relative">
                            <template v-slot:item.foto="{ item }">
                                <v-card class="my-2 rounded-circle w-75">
                                    <v-img :src="`https://randomuser.me/api/portraits/women/${item.foto}`"
                                        cover></v-img>
                                </v-card>
                            </template>

                            <template v-slot:item.nome="{ item }">
                                <v-btn variant="text" prepend-icon="mdi-arrow-top-right-thick" class="text-capitalize"
                                    @click="redirectPerfil(perfil)">{{ item.nome }}</v-btn>
                            </template>

                            <template v-slot:item.habilidades="{ item }">
                                <v-sheet class="py-4 px-1" style="max-width: 300px;">
                                    <v-chip-group selected-class="text-primary" mandatory>
                                        <v-chip variant="outlined" v-for="(habilidade, index) in item.habilidades"
                                            :key="index">{{ habilidade }}</v-chip>
                                    </v-chip-group>
                                </v-sheet>
                            </template>

                            <template v-slot:item.stock="{ item }">
                                <div class="text-end">
                                    <v-chip :color="item.stock ? 'green' : 'red'"
                                        :text="item.stock ? 'In stock' : 'Out of stock'" class="text-uppercase"
                                        size="small" label></v-chip>
                                </div>
                            </template>
                        </v-data-table>
                        <v-btn class="bt-primario position-absolute bottom-0 ma-2"
                            @click="dialog = false">Fechar</v-btn>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </v-dialog>
</template>

<script>
export default {
    data() {
        return {
            dialog: false,
            perfil: '/perfil-candidato',
            search: '',
            items: [
                {
                    foto: '1.jpg',
                    nome: 'João Pereira',
                    profissão: 'Engenheiro de Software',
                    habilidades: ['javascript', 'typescript', 'node.js', 'express', 'angular', 'docker', 'kubernetes'],
                },
                {
                    foto: '2.jpg',
                    nome: 'Maria Fernandes',
                    profissão: 'Desenvolvedora Full Stack',
                    habilidades: ['php', 'laravel', 'mysql', 'vue', 'nuxt', 'tailwind', 'git'],
                },
                {
                    foto: '3.jpg',
                    nome: 'Carlos Silva',
                    profissão: 'Especialista em DevOps',
                    habilidades: ['bash', 'aws', 'terraform', 'ansible', 'jenkins', 'k8s', 'grafana'],
                },
                {
                    foto: '4.jpg',
                    nome: 'Ana Souza',
                    profissão: 'Cientista de Dados',
                    habilidades: ['python', 'r', 'pandas', 'scikit-learn', 'tensorflow', 'keras', 'matplotlib'],
                },
                {
                    foto: '5.jpg',
                    nome: 'Bruno Oliveira',
                    profissão: 'Desenvolvedor Front-End',
                    habilidades: ['html', 'css', 'javascript', 'react', 'redux', 'sass', 'webpack'],
                },
                {
                    foto: '6.jpg',
                    nome: 'Luiza Alves',
                    profissão: 'Engenheira de Software',
                    habilidades: ['c++', 'qt', 'opencv', 'python', 'bash', 'cmake', 'git'],
                },
                {
                    foto: '7.jpg',
                    nome: 'Fernando Lima',
                    profissão: 'Desenvolvedor Back-End',
                    habilidades: ['java', 'spring', 'hibernate', 'maven', 'mysql', 'docker', 'junit'],
                },
                {
                    foto: '8.jpg',
                    nome: 'Juliana Costa',
                    profissão: 'Desenvolvedora Mobile',
                    habilidades: ['kotlin', 'android', 'java', 'retrofit', 'coroutines', 'jetpack compose', 'sqlite'],
                },
                {
                    foto: '9.jpg',
                    nome: 'Ricardo Pereira',
                    profissão: 'Administrador de Banco de Dados',
                    habilidades: ['oracle', 'sql', 'pl/sql', 'db2', 'mysql', 'mongodb', 'backup'],
                },
                {
                    foto: '10.jpg',
                    nome: 'Isabel Martins',
                    profissão: 'Desenvolvedora Front-End',
                    habilidades: ['html', 'css', 'javascript', 'vue.js', 'vuetify', 'bootstrap', 'sass'],
                },
                {
                    foto: '11.jpg',
                    nome: 'Gabriel Mendes',
                    profissão: 'Desenvolvedor Full Stack',
                    habilidades: ['node.js', 'express', 'react', 'mongodb', 'docker', 'aws', 'graphql'],
                },
                {
                    foto: '12.jpg',
                    nome: 'Patrícia Oliveira',
                    profissão: 'Analista de Dados',
                    habilidades: ['sql', 'tableau', 'power bi', 'python', 'r', 'excel', 'bigquery'],
                },
                {
                    foto: '13.jpg',
                    nome: 'Lucas Rocha',
                    profissão: 'Engenheiro de Software',
                    habilidades: ['java', 'spring boot', 'microservices', 'oracle', 'hibernate', 'maven', 'git'],
                },
                {
                    foto: '14.jpg',
                    nome: 'Bianca Ramos',
                    profissão: 'Cientista de Dados',
                    habilidades: ['python', 'numpy', 'scikit-learn', 'pytorch', 'jupyter', 'seaborn', 'sql'],
                },
                {
                    foto: '15.jpg',
                    nome: 'Thiago Nunes',
                    profissão: 'Desenvolvedor Back-End',
                    habilidades: ['golang', 'grpc', 'docker', 'kubernetes', 'redis', 'postgresql', 'elastic search'],
                },
                {
                    foto: '16.jpg',
                    nome: 'Mariana Souza',
                    profissão: 'Especialista em UX/UI',
                    habilidades: ['figma', 'sketch', 'adobe xd', 'photoshop', 'illustrator', 'css', 'usability testing'],
                },
                {
                    foto: '17.jpg',
                    nome: 'Roberto Lima',
                    profissão: 'Administrador de Redes',
                    habilidades: ['cisco', 'linux', 'firewall', 'vpn', 'dns', 'tcp/ip', 'wireshark'],
                },
                {
                    foto: '18.jpg',
                    nome: 'Larissa Silva',
                    profissão: 'Engenheira de Machine Learning',
                    habilidades: ['python', 'tensorflow', 'keras', 'pandas', 'scikit-learn', 'pytorch', 'mlops'],
                },
                {
                    foto: '19.jpg',
                    nome: 'Eduardo Ferreira',
                    profissão: 'Desenvolvedor Mobile',
                    habilidades: ['swift', 'ios', 'objective-c', 'xcode', 'core data', 'firebase', 'testflight'],
                },
            ],
        }
    },
    methods: {
        redirectPerfil(perfil) {
            const url = this.$router.resolve(perfil).href;
            window.open(url, '_blank');
        }
    }
}
</script>

<style scoped>
* {
    /* border: 1px solid red; */
}

.v-data-table {
    height: 65vh;
}
</style>