<template>
  <div style="height: 100%">
    <Navbar />
    <v-container fluid class="fill-height main-container">
      <div class="text-center mt-4">
        <h1>Lista de Usuários</h1>
      </div>
      <div class="busca">
        <div class="procurar-Usuarios">
          <v-card-text>
            <v-text-field
              :loading="loading"
              append-inner-icon="mdi-magnify"
              density="compact"
              label="Procure um Usuário."
              variant="solo"
              hide-details
              single-line
              @click:append-inner="onClick"
            />
          </v-card-text>
        </div>
        <v-btn
          style="
            font-weight: 900;
            color: rgba(58, 28, 118, 1);
            border-width: 2px;
          "
          text
          variant="outlined"
          @click="abrirModal"
        >
          Novo Cadastro
        </v-btn>
      </div>

      <div class="list-usuario">
        <v-row v-for="n in 6" :key="n" class="list-usuario-row">
          <v-col cols="12">
            <v-card class="card-do-usuario">
              <v-row align="center" no-gutters>
                <v-col cols="3" class="text-center">
                  <v-avatar color="surface-variant" size="60">
                    <v-icon>mdi-account-circle</v-icon>
                  </v-avatar>
                </v-col>
                <v-col cols="5">
                  <h3 class="usuario-nome">Robsoh Hush</h3>
                  <p class="usuario-email">robsoh56@gmail.com</p>
                </v-col>
                <v-col cols="2">
                  <p class="tipodeUsuario">ADM</p>
                </v-col>
                <v-col cols="2" class="text-right">
                  <div class="locaCor"><MenuAdminUsuario /></div>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
        </v-row>
      </div>
    </v-container>

    <!-- Modal -->
    <v-dialog v-model="modalVisible" max-width="800px">
      <CadUsuarioAdmin v-model:dialog="modalVisible" />
    </v-dialog>
  </div>
</template>

<script>
import MenuAdminUsuario from "./MenuAdminUsuario.vue";
import CadUsuarioAdmin from "./CadUsuarioAdmin.vue";

export default {
  components: { MenuAdminUsuario, CadUsuarioAdmin },
  data: () => ({
    loading: false,
    modalVisible: false,
  }),
  methods: {
    onClick() {
      console.log("Ícone de busca clicado");
    },
    abrirModal() {
      this.modalVisible = true;
    },
  },
};
</script>

<style lang="scss" scoped>
// Estilos gerais
.main-container {
  background-color: #e1d6f6;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
}

.v-card-text {
  padding: 30px 40px 30px 20px !important;
  flex: 1 1 auto;
  font-size: 0.875rem;
  font-weight: 400;
  letter-spacing: 0.0178571429em;
  opacity: var(--v-card-text-opacity, 1);
  text-transform: none;
}

.busca {
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row-reverse;
}

.list-usuario {
  width: 95%;
  padding: 10px 0;
}

.card-do-usuario {
  background-color: white;
  border-radius: 8px;
  padding: 10px;
  display: flex;
  align-items: center;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12);
}

.usuario-nome {
  font-size: 16px;
  font-weight: 600;
}

.tipodeUsuario {
  font-size: 12px;
  font-weight: bold;
  color: #3a3a3a;
}

.usuario-email {
  font-size: 14px;
  color: #666;
}

.procurar-Usuarios {
  width: 450px;
}

.locaCor {
  padding: 5px;
  margin: 15px;
}
.v-btn__content {
  font-size: 12px !important;
  font-weight: bold !important;
  color: black !important;
}

// Responsividade para telas menores
@media (max-width: 768px) {
  .main-container {
    padding: 10px;
  }

  .procurar-Usuarios {
    width: 100%;
    margin: 10px 0;
  }

  .list-usuario-row {
    margin-bottom: 10px;
  }
  .tipodeUsuario {
    font-size: 12px;
    color: #666;
    text-align: center;
  }
  .card-do-usuario {
    flex-direction: row;
    padding: 10px;
  }

  .usuario-nome {
    font-size: 14px;
  }

  .usuario-email {
    font-size: 12px;
  }

  .locaCor {
    padding: 5px;
    margin: 15px;
  }

  .v-card-text {
    padding: 20px 20px 10px !important;
  }

  .busca {
    display: flex;
    width: 100%;
    align-items: center;
    flex-direction: column;
    margin-bottom: 15px;
  }
}
</style>