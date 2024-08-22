<template>
    <div class="h-screen d-flex align-center back-primario">
        <v-container>
            <v-row no-gutters class="d-flex justify-center">
                <v-col cols="12" lg="4" md="6" sm="8" class="text-center">
                    <img width="200px" class="ma-5" src="/src/assets/Logo_branco.png" alt="">
                    <v-card class="elevation-12 ma-5" rounded="xl">
                        <v-card-text class="text-center">                            
                            <v-form class="ma-5 text-center" @submit.prevent="login">
                                <h1 class="text-center">Redefina sua senha</h1>
                                <p class="ma-5">Insira seu endereço de e-mail e lhe enviaremos instruções para redefinir sua
                                    senha.</p>
                                <v-text-field v-model="email" :rules="emailRules" label="E-mail"
                                    class="mb-4"></v-text-field>
                                <v-btn class="bg-purple-darken-4" @click="login">Continuar</v-btn>
                            </v-form>
                            <div class="ma-5 text-center">
                                <a href="/empresa-candidato">Voltar para o Login.</a>
                            </div>
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            email: 'thiago@gmail.com',
            emailRules: [
                (v) => !!v || 'E-mail requerido',
                (v) => /.+@.+\..+/.test(v) || 'E-mail deve ser válido',
            ],
            password: '12345678Ww@',
            passwordRules: [(v) => !!v || 'Senha requerida'],
        };
    },
    methods: {
        async login() {
            try {
                const response = await axios.post('http://localhost:4000/candidato/login', {
                    email: this.email,
                    password: this.password
                }, { withCredentials: true });

                console.log('Login bem-sucedido', response.data);
                this.$router.push('/');
            } catch (error) {
                console.error('Erro no login', error.response.data);
                document.getElementById('aviso-invalido').classList.add('d-block');
            }
        },
        goToSignUp() {
            if (window.location.href.includes("candidato"))
                window.location.href = "cadastro-candidato"
            else
                window.location.href = "cadastro-empresa"
        },
    },
    mounted() {
        this.$route.query.resposta;
    },
};

</script>

<style>
* {
    /* border: 1px solid red; */
}
</style>