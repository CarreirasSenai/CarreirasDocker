<template>
  <div class="h-screen d-flex align-center back-primario">
    <v-container fluid>
      <v-row no-gutters class="d-flex justify-center">
        <v-col cols="12" lg="4" md="6" sm="8" class="text-center">
          <img width="200px" class="ma-5" src="/src/assets/Logo_branco.png" alt="">
          <v-card class="elevation-12 ma-5" rounded="xl">
            <v-card-text class="text-center">
              <v-form class="ma-5 text-start" @submit.prevent="login">
                <h1 class="text-center ma-5">Faça o Login</h1>

                <v-text-field v-model="email" label="E-mail" type="email"></v-text-field>
                <v-text-field v-model="password" label="Senha" type="password"></v-text-field>

                <div class="text-center text-red d-none mb-4" id="aviso-invalido">Email ou senha inválidos.</div>

                <v-btn class="bg-purple-darken-4" @click="login" block>Continuar</v-btn>
              </v-form>
              <v-row class="ma-2">
                <v-col cols="6">
                  <p class="cor-primaria cursor-pointer text-start" @click="respostaGrupo">Esqueceu a
                    senha?</p>
                </v-col>
                <v-col cols="6">
                  <p class="cor-primaria cursor-pointer text-end" @click="goToSignUp">Não tem uma conta? Cadastre-se.
                  </p>
                </v-col>
              </v-row>
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
      resposta: this.$route.query.resposta,
    };
  },
  methods: {
    async login() {
      try {
        const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/candidato/login`, {
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
      if (window.location.href.includes("candidato")) {
        this.$router.push({ path: '/cadastro-candidato'});
      } else {
        this.$router.push({ path: '/cadastro-empresa'});
      }
    },
    respostaGrupo() {
      this.$router.push({ path: '/redefinir-senha', query: { resposta: this.resposta } });
    },
  },
  mounted() {
    this.$route.query.resposta;
  },
};

</script>

<style scoped>
* {
  /* border: 1px solid red; */
}
</style>