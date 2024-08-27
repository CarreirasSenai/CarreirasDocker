<template>
  <v-card>
    <v-card-title>
      <span class="headline">Novo Cadastro</span>
    </v-card-title>
    <v-card-text>
      <v-form class="my-4" @submit.prevent="atualizarCadastro">
        <v-card title="Informações Pessoais" class="pa-2">
          <v-card-text style="max-height: 70vh" class="overflow-auto">
            <v-row>
              <v-col cols="12" sm="6" md="6" lg="6">
                <v-text-field v-model="nomeSocial" :rules="nomeSocialRules" label="Nome Social"
                  variant="underlined" :disabled="isDisabled"></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="6" lg="6">
                <v-text-field v-model="nomeCompleto" :rules="nomeCompletoRules" label="Nome Completo"
                  variant="underlined" :disabled="isDisabled"></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" sm="6" md="6" lg="6">
                <v-text-field v-model="email" :rules="emailRules" label="E-mail" variant="underlined"
                  :disabled="isDisabled"></v-text-field>
              </v-col>
              <v-col cols="12" sm="3" md="3" lg="3">
                <v-text-field v-model="phone" :rules="phoneRules" label="Telefone" variant="underlined"
                  :disabled="isDisabled"></v-text-field>
              </v-col>
              <v-col cols="12" sm="3" md="3" lg="3">
                <v-text-field v-model="cellphone" :rules="cellphoneRules" label="Celular" variant="underlined"
                  :disabled="isDisabled"></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" sm="6" md="6" lg="6">
                <v-text-field v-model="password" :rules="passwordRules" label="Senha" variant="underlined"
                  :disabled="isDisabled" type="password"></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="6" lg="6">
                <v-text-field v-model="confirmPassword" :rules="confirmPasswordRules" label="Repetir Senha"
                  variant="underlined" :disabled="isDisabled" type="password"></v-text-field>
              </v-col>
            </v-row>
          </v-card-text>

          <v-divider></v-divider>

          <v-card-actions class="d-flex justify-end">
            <v-spacer></v-spacer>
            <v-btn text="Fechar" variant="outlined" @click="$emit('update:dialog', false)"></v-btn>
            <v-btn text="Salvar" color="Enviar" variant="tonal" class="bg-purple-darken-4"
              @click="atualizarCadastro"></v-btn>
          </v-card-actions>
        </v-card>
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script>
import axios from "axios";

export default {
  props: {
    dialog: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      nomeSocial: "",
      nomeCompleto: "",
      email: "",
      phone: "",
      cellphone: "",
      password: "",
      confirmPassword: "",
      resposta: false,
      mensagemErro: "",
      isDisabled: false,

      nomeSocialRules: [
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
    };
  },
  methods: {
    async atualizarCadastro() {
      try {
        const response = await axios.post(
          "http://localhost:3000/update/create",
          {
            nomeSocial: this.nomeSocial,
            nomeCompleto: this.nomeCompleto,
            email: this.email,
            phone: this.phone,
            cellphone: this.cellphone,
            password: this.password,
          }
        );

        this.resposta = true;
        console.log("Atualização bem-sucedida", response.data);
        this.$emit('update:dialog', false);
      } catch (error) {
        this.resposta = false;
        console.error(
          "Erro ao atualizar o cadastro",
          error.response.data.error
        );
        this.mensagemErro = error.response.data.error;
      }
    },
  },
};
</script>
