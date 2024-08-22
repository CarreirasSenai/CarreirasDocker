<template>
  <div style="height: 100%">
    <Navbar />
    <v-container fluid class="fill-height main-container">
      <div class="text-center mt-4">
        <h1>Lista de Empresas</h1>
      </div>
      <div class="busca">
        <div class="procurar-Usuarios">
          <v-card-text>
            <v-text-field
              :loading="loading"
              append-inner-icon="mdi-magnify"
              density="compact"
              label="Procure uma Empresa."
              variant="solo"
              hide-details
              single-line
              @click:append-inner="onClick"
            />
          </v-card-text>
        </div>
      </div>

      <div class="list-empresa">
        <v-row v-for="n in 6" :key="n" class="list-empresa-row">
          <v-col cols="12">
            <v-card class="card-da-empresa">
              <v-row align="center" no-gutters>
                <v-col cols="1" class="texte-center">
                  <v-avatar color="surface-variant" size="60">
                    <v-icon>mdi-account-circle</v-icon>
                  </v-avatar>
                </v-col>
                <v-col cons="1">
                  <h3 class="empresa-nome">TOTVS - Sistemas Inteligentes</h3>
                </v-col>
                <v-col cols="4">
                  <p class="localizacao-empresa">
                    <span class="locaCor">Localização:</span> Joinville
                  </p>
                </v-col>
                <v-col cols="4">
                  <p class="status"></p>
                </v-col>
                <v-col cons="4" class="text-ritgh">
                  <div class="dotsNav"><MenuAdminEmpresa /></div>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
        </v-row>
      </div>
    </v-container>
  </div>
</template>

<script>
import MenuAdminEmpresa from "./MenuAdminEmpresa.vue";
export default {
  components: { MenuAdminEmpresa },
  data: () => ({
    items: [{ text: "Offline", icon: "mdi-check-circle" }],
  }),
};
</script>
<style lang="scss" scoped>
// *{
//     border: 1px solid red;
// }
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

.list-empresa {
  width: 95%;
  padding: 10px 0;
}

.v-col {
  padding: 10px;
  border-radius: 8px;
}
.card-da-empresa {
  background-color: white;
  border-radius: 8px;
  padding: 25px;
  display: flex;
  align-items: center;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12);
}
.procurar-Usuarios {
  width: 450px;
}
.busca {
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row-reverse;
}
.empresa-nome {
  font-size: 16px;
  font-weight: 600;
}

.procurar-empresas {
  width: 80%;
}
.localizacao-empresa {
  text-align: center;
}
.locaCor {
  padding: 5px;
  margin: 15px;
}

.status {
  align-content: center;
  align-items: center;
  height: 25px;
  width: 25px;
  border-radius: 50%;
  background-color: #34c759; // cor verde
  margin: 0 100px;
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

  .procurar-empresas {
    width: 100%;
    margin: 10px 0;
  }

  .list-empresa-row {
    margin-bottom: 10px;
  }
  .tipodeempresa {
    font-size: 12px;
    color: #666;
    text-align: center;
  }
  .card-do-empresa {
    flex-direction: row;
    padding: 10px;
  }

  .empresa-nome {
    font-size: 14px;
  }

  .empresa-email {
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