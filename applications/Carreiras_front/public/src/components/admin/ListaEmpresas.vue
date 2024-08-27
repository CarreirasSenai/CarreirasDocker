<template>
  <div style="height: 100%">
    <Navbar />
    <v-container fluid class="fill-height main-container">
      <div class="text-center mt-4">
        <h1>Lista de Empresas</h1>
      </div>
      <div class="busca">
        <div class="procurar-empresas">
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
                <v-col cols="3" class="text-center">
                  <v-avatar color="surface-variant" size="60">
                    <v-icon class="empresa-foto">mdi-account-circle</v-icon>
                  </v-avatar>
                </v-col>
                <v-col cons="3">
                  <h3 class="empresa-nome">TOTVS - Sistemas Inteligentes</h3>
                </v-col>
                <v-col cols="2">
                  <p class="localizacao-empresa">
                    <strong>Localização: </strong> Joinville
                  </p>
                </v-col>
                <v-col cols="2">
                  <p class="status"></p>
                </v-col>
                <v-col cons="3" class="text-right">
                  <div class="locaCor"><MenuAdminEmpresa /></div>
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

.empresa-foto {
  align-items: center;
  justify-content: flex-start;
  flex-direction: row-reverse;
}

.list-empresa {
  width: 95%;
  padding: 10px 0;
}

.card-da-empresa {
  background-color: white;
  border-radius: 8px;
  padding: 10px;
  display: flex;
  align-items: center;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12);
}

.procurar-empresas {
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
  width: 450px;
}

.localizacao-empresa {
  text-align: center;
  font-size: 12px;
}

.locaCor {
  padding: 5px;
  margin: 15px;
  font-weight: 700;
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

  .card-da-empresa {
    flex-direction: row;
    padding: 10px;
  }

  .localizacao-empresa {
    text-align: center;
    font-size: 10px;
  }

  .empresa-nome {
    font-size: 12px;
  }

  .locaCor {
    padding: 5px;
    margin: 15px;
  }

  .v-card-text {
    padding: 10px 15px 5px !important;
  }

  .busca {
    display: flex;
    width: 100%;
    align-items: center;
    flex-direction: column;
    margin-bottom: 15px;
  }

  .status {
    align-content: center;
    align-items: center;
    height: 20px;
    width: 20px;
    border-radius: 50%;
    background-color: #34c759; // cor verde
    margin: 0 30px;
  }
}
</style>