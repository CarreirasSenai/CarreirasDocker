<template>
  <v-container fluid class="bg-white fill-height d-flex flex-column first-container">
    <v-col class="align-start"
      style="padding: 0px!important; margin:0% !important; width: 100vw; height: 100vh; position: relative;">
      <v-row style="display:flex; flex-direction: row; padding: 0px!important; margin:0% !important;"
        class="bg-white fill-height">
        <img class="carreiras-logo" src="../../assets/logo.png" alt="Logo" />

        <v-col class="candidate-column"
          style="display:flex; flex-direction:column; align-items:center; padding:0px!important; margin:0% !important; position: relative;"
          cols="12" md="6">
          <div style="display: flex; align-items: center; flex-direction: column;">
            <h2 class="titulo-candidato">Candidato</h2>
            <v-btn style="font-weight: bold; color: white; z-index: 3;" dark
              class="v-btn--size-x-large bg-purple-darken-4  v-btn--density-comfortable"
              @click='redirectToLogin("candidato")'>
              Entrar
            </v-btn>
          </div>
          <div class="img-div">
            <img class="img-person" src="../../assets/happy-man.png" />
          </div>
        </v-col>

        <v-col class="company-column bg-purple-darken-4"
          style="display:flex; flex-direction: column; align-items: center; padding: 0px !important; margin:0% !important; position: relative;"
          cols="12" md="6">
          <div style="display: flex; align-items: center; flex-direction: column;">
            <h2 class="titulo-empresa" style="z-index: 2;">Empresa</h2>
            <v-btn style="color:rgba(58, 28, 118, 1);font-weight: bold; z-index: 3;" outlined
              class="v-btn--size-x-large v-btn--density-comfortable" @click='redirectToLogin("empresa")'>
              Entrar
            </v-btn>
          </div>
          <div class="img-div">
            <img class="img-people" src="../../assets/businesspeople.png" alt="Business People" />
          </div>
        </v-col>
      </v-row>
    </v-col>
  </v-container>
</template>

<script>
export default {
  name: 'LandingPage',
  methods: {
    redirectToLogin(resposta) {
      const encodedResposta = encodeURIComponent(resposta);
      this.$router.push({ path: '/login', query: { resposta: encodedResposta } });
    }
  }
}
</script>

<style scoped>
.titulo-candidato {
  color: #4A148C;
  margin-top: 130px;
  z-index: 2;
  text-shadow:
    -1px -1px 0 #ffffff,
    1px -1px 0 #ffffff,
    -1px 1px 0 #ffffff,
    1px 1px 0 #ffffff;
}

.carreiras-logo {
  width: 200px;
  height: auto;
  margin: 20px;
  position: absolute;
  z-index: 1;
}

.titulo-empresa {
  color: white;
  margin-top: 130px;
}

.img-people {
  margin-top: 20px;
  width: 100%;
}

.img-div {
  display: flex;
  justify-content: center;
  align-items: flex-end;
  position: absolute;
  bottom: 0;
  width: 100%;
}

.img-person {
  width: 46%;
}

.first-container {
  width: 100%;
  position: fixed;
}

/* Media query for mobile devices */
@media (max-width: 955px) {
  .titulo-empresa {
    margin-top: 80px;
  }

  .bg-white .fill-height {
    display: flex;
    justify-content: center;
  }

  .img-person {
    margin-top: 20px;
    max-width: 50%;
  }

  .img-people {
    margin-top: 20px;
    width: 100%;
  }

  .first-container {
    position: static;
  }

  .candidate-column,
  .company-column {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .img-div {
    position: static;
  }
}
</style>