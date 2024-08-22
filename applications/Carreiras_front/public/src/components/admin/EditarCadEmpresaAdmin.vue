<template>
  <div class="text-center">
    <v-dialog v-model="dialog" max-width="800px">
      <template v-slot:activator="{ props: activatorProps }">
        <v-btn
          variant="text"
          v-bind="activatorProps"
          class="w-100 rounded-0 justify-start"
          >Editar Cadastro</v-btn
        >
      </template>

      <v-container>
        <v-row no-gutters>
          <v-col cols="12">
            <v-card title="Editar Cadastro" class="pa-2">
              <v-card-text style="max-height: 70vh" class="overflow-auto">
                <v-form class="my-4" @submit.prevent>
                  <v-row>
                    <v-col cols="12" sm="6" md="6" lg="6">
                      <v-text-field
                        v-model="razaoSocial"
                        :rules="razaoSocialRules"
                        label="Razão social"
                        variant="underlined"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="6" lg="6">
                      <v-text-field
                        v-model="nomeFantasia"
                        :rules="nomeFantasiaRules"
                        label="Nome fantasia"
                        variant="underlined"
                      ></v-text-field>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col cols="12" sm="6" md="6" lg="6">
                      <v-text-field
                        v-model="email"
                        :rules="emailRules"
                        label="Email"
                        variant="underlined"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="3" md="3" lg="3">
                      <v-text-field
                        v-model="telefone"
                        :rules="telefoneRules"
                        label="Telefone"
                        variant="underlined"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="3" md="3" lg="3">
                      <v-text-field
                        v-model="celular"
                        :rules="celularRules"
                        label="Celular"
                        variant="underlined"
                      ></v-text-field>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col cols="12" sm="3" md="3" lg="3">
                      <v-text-field
                        v-model="cnpj"
                        :rules="cnpjRules"
                        label="CNPJ"
                        variant="underlined"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="3" md="3" lg="3">
                      <v-text-field
                        v-model="inscricaoEstadual"
                        :rules="inscricaoEstadualRules"
                        label="Inscrição estadual"
                        variant="underlined"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="4" md="4" lg="4">
                      <v-text-field
                        v-model="cep"
                        :rules="cepRules"
                        label="CEP"
                        variant="underlined"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="2" md="2" lg="2">
                      <v-text-field
                        v-model="numero"
                        :rules="numeroRules"
                        label="Nº"
                        variant="underlined"
                      ></v-text-field>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col cols="12" sm="6" md="6" lg="6">
                      <v-text-field
                        v-model="complemento"
                        label="Complemento"
                        variant="underlined"
                      ></v-text-field>
                    </v-col>
                    <v-col>
                      <v-text-field
                        v-model="endereco"
                        :rules="enderecoRules"
                        label="Endereço"
                        variant="underlined"
                      ></v-text-field>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col cols="12" sm="3" md="3" lg="3">
                      <v-text-field
                        v-model="bairro"
                        :rules="bairroRules"
                        label="Bairro"
                        variant="underlined"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="3" md="3" lg="3">
                      <v-text-field
                        v-model="cidade"
                        :rules="cidadeRules"
                        label="Cidade"
                        variant="underlined"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="6" lg="6">
                      <v-select
                        v-model="estado"
                        :rules="estadoRules"
                        :items="items"
                        label="Estado"
                        variant="underlined"
                      ></v-select>
                    </v-col>
                    <v-col cols="12" sm="6" md="6" lg="6">
                      <v-text-field
                        v-model="responsavelLegal"
                        :rules="responsavelLegalRules"
                        label="Responsável legal"
                        variant="underlined"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="6" lg="6">
                      <v-text-field
                        v-model="responsavelAdm"
                        :rules="responsavelAdmRules"
                        label="Responsável administrativo (RA)"
                        variant="underlined"
                      ></v-text-field>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col cols="12" sm="6" md="6" lg="6">
                      <v-text-field
                        v-model="contatoRA"
                        :rules="contatoRARules"
                        label="Contato RA"
                        variant="underlined"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="3" md="3" lg="3">
                      <v-text-field
                        v-model="senha"
                        :rules="senhaRules"
                        label="Senha"
                        variant="underlined"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="3" md="3" lg="3">
                      <v-text-field
                        v-model="repSenha"
                        :rules="repSenhaRules"
                        label="Repetir senha"
                        variant="underlined"
                      ></v-text-field>
                    </v-col>
                  </v-row>
                </v-form>
              </v-card-text>
              <v-divider></v-divider>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                  text="Fechar"
                  variant="outlined"
                  @click="dialog = false"
                ></v-btn>
                <v-btn
                  text="Salvar"
                  color="Enviar"
                  variant="tonal"
                  @click="dialog = false"
                  class="bg-purple-darken-4"
                ></v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      razaoSocial: "",
      nomeFantasia: "",
      email: "",
      telefone: "",
      celular: "",
      cnpj: "",
      inscricaoEstadual: "",
      cep: "",
      numero: "",
      complemento: "",
      endereco: "",
      bairro: "",
      cidade: "",
      estado: "",
      responsavelLegal: "",
      responsavelAdm: "",
      contatoRA: "",
      senha: "",
      repSenha: "",
      razaoSocialRules: [(v) => !!v || "Razão social requerida"],
      nomeFantasiaRules: [(v) => !!v || "Nome fantasia requerido"],
      emailRules: [
        (v) => !!v || "E-mail requerido",
        (v) => /.+@.+\..+/.test(v) || "E-mail precisa ser válido",
        (v) => v.length <= 254 || "E-mail deve ter no máximo 254 caracteres",
      ],
      telefoneRules: [
        (v) => !!v || "Telefone requerido",
        (v) => v.length >= 10 || "Telefone deve ter pelo menos 10 caracteres",
      ],
      celularRules: [
        (v) => !!v || "Celular requerido",
        (v) => v.length >= 10 || "Celular deve ter pelo menos 10 caracteres",
      ],
      cnpjRules: [
        (v) => !!v || "CNPJ requerido",
        (v) => /^\d+$/.test(v) || "CNPJ deve conter apenas números",
      ],
      inscricaoEstadualRules: [(v) => !!v || "Inscrição estadual requerida"],
      cepRules: [
        (v) => !!v || "CEP requerido",
        (v) => v.length === 8 || "CEP deve ter 8 caracteres",
        (v) => /^\d+$/.test(v) || "CEP deve conter apenas números",
      ],
      numeroRules: [
        (v) => !!v || "Número requerido",
        (v) => v.length >= 1 || "Nº Casa deve ter pelo menos 1 caractere",
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
      estadoRules: [(v) => !!v || "Estado requerido"],
      responsavelLegalRules: [(v) => !!v || "Responsável legal requerido"],
      responsavelAdmRules: [
        (v) => !!v || "Responsável administrativo requerido",
      ],
      contatoRARules: [
        (v) => !!v || "Contato do Responsável administrativo requerido",
      ],
      senhaRules: [(v) => !!v || "Senha requerida"],
      repSenhaRules: [(v) => !!v || "Repetir senha requerido"],
      items: [
        "Amazonas",
        "Amapá",
        "Santa Catarina",
        "Paraná",
        "Rio Grande do Sul",
        "São Paulo",
      ],
      dialog: false,
    };
  },
};
</script>