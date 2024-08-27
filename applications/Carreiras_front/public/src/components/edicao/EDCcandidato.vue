<template> 
<v-container fluid class="signup-container fill-height">
    <v-row style="margin: 0" justify="center">
      <v-col cols="12" sm="9" md="10" lg="11">
        <div class="logo-container text-center">
          <img
            class="carreiras-logo"
            src="/src/assets/logo.png"
            alt="Logo do Carreiras"
          />
        </div>
        <v-card class="px-4 elevation-12 signup-card" rounded="xl">
          <v-card-text>
            <h1 class="text-center my-1">Edição do cadastro</h1>
            <v-form class="my-4" @submit.prevent>
              <v-row>
                <v-col cols="12" sm="6" md="6" lg="6">
                  <v-text-field
                    v-model="nameSocial"
                    :rules="namesocialRules"
                    label="Nome Social"
                    bg-color="#F7F7F7"
                    density="compact"

                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="6" lg="6">
                  <v-text-field
                    v-model="nomeCompleto"
                    :rules="nomeCompletoRules"
                    label="Nome Completo"
                    bg-color="#F7F7F7"
                    density="compact"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" sm="6" md="6" lg="6">
                  <v-text-field
                    v-model="email"
                    :rules="emailRules"
                    label="E-mail"
                    bg-color="#F7F7F7"
                    density="compact"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="3" md="3" lg="3">
                  <v-text-field
                    v-model="phone"
                    :rules="phoneRules"
                    label="Telefone"
                    bg-color="#F7F7F7"
                    density="compact"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="3" md="3" lg="3">
                  <v-text-field
                    v-model="cellphone"
                    :rules="cellphoneRules"
                    label="Celular"
                    bg-color="#F7F7F7"
                    density="compact"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" sm="3" md="3" lg="3">
                  <v-text-field
                    v-model="cpf"
                    :rules="cpfRules"
                    label="CPF"
                    bg-color="#F7F7F7"
                    density="compact"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="3" md="3" lg="3">
                  <v-text-field
                    v-model="cep"
                    :rules="confirmcepRules"
                    label="CEP"
                    bg-color="#F7F7F7"
                    density="compact"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="3" md="3" lg="3">
                  <v-text-field
                    v-model="numero"
                    :rules="confirmnumeroRules"
                    label="Nº"
                    bg-color="#F7F7F7"
                    density="compact"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="3" md="3" lg="3">
                  <v-text-field
                    v-model="complemento"
                    label="Complemento"
                    bg-color="#F7F7F7"
                    density="compact"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" sm="6" md="6" lg="6">
                  <v-text-field
                    v-model="endereco"
                    :rules="enderecoRules"
                    label="Endereço"
                    bg-color="#F7F7F7"
                    density="compact"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="3" md="3" lg="3">
                  <v-text-field
                    v-model="bairro"
                    :rules="bairroRules"
                    label="Bairro"
                    bg-color="#F7F7F7"
                    density="compact"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="3" md="3" lg="3">
                  <v-text-field
                    v-model="cidade"
                    :rules="cidadeRules"
                    label="Cidade"
                    bg-color="#F7F7F7"
                    density="compact"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" sm="6" md="6" lg="6">
                  <v-select
                    v-model="estado"
                    :rules="estadoRules"
                    :items="items"
                    label="Estado"
                    bg-color="#F7F7F7"
                    density="compact"
                  ></v-select>
                </v-col>
                <v-col cols="12" sm="3" md="3" lg="3">
                  <v-text-field
                    v-model="password"
                    :rules="passwordRules"
                    label="Senha"
                    bg-color="#F7F7F7"
                    density="compact"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="3" md="3" lg="3">
                  <v-text-field
                    v-model="confirmPassword"
                    :rules="confirmPasswordRules"
                    label="Repetir Senha"
                    bg-color="#F7F7F7"
                    density="compact"
                  ></v-text-field>
                </v-col>
              </v-row>
              <div class="sign-in-buttons d-flex justify-center my-4">
                <v-btn class="adm-btn " variant="outlined me-2">Cancelar</v-btn>
                <v-btn lass="adm-btn" class="bg-purple-darken-4 me-2"
                  >Salvar</v-btn
                >
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
            nameSocial:'',
            nomeCompleto:'',
            email:'',
            phone:'',
            cellphone:'',
            cpf:'',
            cep:"",
            confirmcep:'',
            numero:'',
            complemento:'',
            endereco:'',
            bairro:'',
            cidade:'',
            cidade:'',
            estado:'',
            password:'',
            confirmPassword:'',

            namesocialRules: [
                (v) => !!v || "Nome Social Requerido",
                (v) => v.length >= 3 || "Nome Social deve ter pelo menos 3 caracteres",
            ],

            nomeCompletoRules: [
                (v) => !!v || "Nome Completo Requerido",
                (v) =>
                v.length >= 5 || "Nome Completo deve ter pelo menos 5 caracteres",
            ],

            emailRules: [
                (v) => !!v || "E-mail requerido",
                (v) => /.+@.+\..+/.test(v) || "E-mail precisa ser válido",
                (v) => v.length <= 254 || "E-mail deve ter no máximo 254 caracteres",
            ],
            cellphoneRules: [
                (v) => !!v || "Celular requerido",
                (v) => v.length >= 10 || "Celular deve ter pelo menos 10 caracteres",
                (v) => /^\d+$/.test(v) || "Celular deve conter apenas números",
            ],
            phoneRules: [
                (v) => !!v || "Telefone requerido",
                (v) => v.length >= 10 || "Telefone deve ter pelo menos 10 caracteres",
                (v) => /^\d+$/.test(v) || "Telefone deve conter apenas números",
            ],

            cpfRules: [
                (v) => !!v || "CPF Requerido",
                (v) => v.length === 11 || "CPF deve ter 11 caracteres",
                (v) => /^\d+$/.test(v) || "CPF deve conter apenas números",
            ],

            confirmcepRules: [
                (v) => !!v || "CEP Requerido",
                (v) => v.length === 8 || "CEP deve ter 8 caracteres",
                (v) => /^\d+$/.test(v) || "CEP deve conter apenas números",
            ],

            confirmnumeroRules: [
                (v) => !!v || "Nº Requerido",
                (v) => v.length >= 1 || "Nº deve ter pelo menos 1 caractere",
            ],

            enderecoRules: [
                (v) => !!v || "Endereço Requerido",
                (v) => v.length >= 5 || "Endereço deve ter pelo menos 5 caracteres",
            ],

            bairroRules: [
                (v) => !!v || "Bairro Requerido",
                (v) => v.length >= 3 || "Bairro deve ter pelo menos 3 caracteres",
            ],

            cidadeRules: [
                (v) => !!v || "Cidade Requerida",
                (v) => v.length >= 3 || "Cidade deve ter pelo menos 3 caracteres",
            ],

            estadoRules: [
                (v) => !!v || "Estado Requerido"
            ],

            passwordRules: [
                (v) => !!v || "Senha Requerida",
                (v) => v.length >= 8 || "Senha deve ter pelo menos 8 caracteres",
                (v) =>
                /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}/.test(
                    v
                ) ||
                "Senha deve conter pelo menos uma letra minúscula, uma letra maiúscula, um número e um caractere especial",
            ],

            confirmPasswordRules: [
                (v) => !!v || "Repetir Senha Requerida",
                (v) => v === this.password || "Senhas não coincidem",
            ],
            items: [
                'Amazonas', 
                'Amapá',
                'Santa Catarina', 
                'Paraná', 
                'Rio Grande do Sul', 
                'São Paulo'
            ]
        };
    }
}
</script>

<style lang="scss" scoped>
.signup-container {
  background-color: #E1D6F6 !important;
  height: 100% !important;
}

.signup-card {
  margin: 0 auto;
  width: auto;
  max-width: 1200px;
}

.v-row {
  display: flex;
  align-items: center;
  justify-content: center;
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
  size: "large";
} 
</style>