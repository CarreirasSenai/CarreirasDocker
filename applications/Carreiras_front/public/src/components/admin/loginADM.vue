<template>
  <v-container fluid class="login-container fill-height">
    <v-row style="margin: 0" justify="center">
      <v-col cols="12" sm="8" md="6">
        <div class="logo-container text-center">
          <img
            class="carreiras-logo"
            src="/src/assets/Logo_branco.png"
            alt=""
          />
        </div>
        <v-card class="elevation-12" rounded="xl">
          <v-card-text>
            <h1 class="text-center my-1">Login de Administrador</h1>
            <v-form class="my-3" @submit.prevent>
              <v-text-field
                v-model="usuario"
                :rules="usuarioRules"
                label="Usuário"
                class="mb-4"
                bg-color="#F7F7F7"
              ></v-text-field>
              <v-text-field
                v-model="password"
                :rules="passwordRules"
                label="Senha"
                class="mb-4"
                bg-color="#F7F7F7"
              ></v-text-field>
              <div class="sign-in-buttons d-flex justify-center">
                <v-btn lass="adm-btn" class="bg-purple-darken-4 me-2"
                  >Entrar</v-btn
                >
                <v-btn class="adm-btn" variant="outlined">Voltar</v-btn>
              </div>
              <div class="api-google">
                <br />
                <!--Usar aqui a api-->
                <br />
              </div>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      usuario: "",
      usuarioRules: [
        "Usuário requerido",
      ],
      password: "",
      passwordRules: [(v) => !!v || "Senha requerida"],
    };
  },
};
</script>

<style lang="scss" scoped>
.login-container {
  background-color: #6832d2 !important;
  height: 100% !important;
}

.v-row {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 75vh;
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
}
</style>