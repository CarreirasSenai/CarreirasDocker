<template>
  <div class="vacancy-list-container" style="height: 100%">
    <Navbar />
    <h1>Lista de vagas</h1>
      <div class="busca">
        <div class="procurar-Usuarios">
          <v-card-text>
            <v-text-field
              :loading="loading"
              append-inner-icon="mdi-magnify"
              density="compact"
              label="Pesquisar"
              variant="solo"
              hide-details
              single-line
              @click:append-inner="onClick"
            />
          </v-card-text>
        </div>
      </div>
      <div class="empresa-info rounded">
        <div>
          <v-avatar color="surface-variant" size="60">
              <v-icon>mdi-account-circle</v-icon>
          </v-avatar>
          <p>TOTVS - EMPRESAS INTELIGENTES</p>
        </div>
        <p><strong>Localização:</strong> Joinville, SC</p>
        <p class="status"></p>
      </div>
      <div class="vagas-container rounded">
        <div class="vagas-cadastradas-container rounded">
          <div class="vagas-cadastradas rounded">
            <p>Vagas Cadastradas</p>
            <p>Data de postagem</p>
            <span style="color: #ff0008;">1 Strike</span>
          </div>
            <v-expansion-panels>
              <v-expansion-panel
                v-for="i in 5"
                :key="i">
                <v-expansion-panel-title class="vagas-panel-title">
                    <v-row>
                      <div class="linha-vaga">
                        <v-col cols="6">
                          <p>Analista de Suporte ao Usuário Junior</p>
                        </v-col>
                        <v-col>
                          <p>21/08/2024</p>
                        </v-col>
                      </div>
                    </v-row>
                </v-expansion-panel-title>
                <v-expansion-panel-text class="vagas-panel-text">
                  <div class="vagas-text">
                    <p><strong>Nível do cargo:</strong> Júnior</p>
                    <p><strong>Habilidades exigidas:</strong> HTML, CSS, 2 anos de experiência com Java.</p>
                    <p><strong>Descrição:</strong> Buscamos um profissional que esteja disposto a aprender e busque melhorar suas habilidades no dia-a-dia.</p>
                  </div>
                  <div class="buttons-container mt-3 mb-2">
                    <v-btn class="bg-red-accent-4 me-2" density="compact">Strike</v-btn>
                    <v-btn class="bg-purple-darken-4 me-2" density="compact">Aprovar</v-btn>
                  </div>
                </v-expansion-panel-text>
              </v-expansion-panel>
            </v-expansion-panels>
        </div>
      </div>
  </div>
</template>

<script>
    export default {
        data() {
            return {

            }
        }
    }
</script>

<style scoped lang="scss">
.vacancy-list-container {
    background-color: #E1D6F6;
    display: flex;
    height: 100%;
    flex-direction: column;
    align-items: center;

    h1 {
      margin: 20px auto;
      color: #3A1C76;
    }
}

.busca {
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: flex-end;
}

.status {
  align-content: center;
  align-items: center;
  height: 25px;
  width: 25px;
  border-radius: 50%;
  background-color: #DB0000;
}

.procurar-Usuarios {
  width: 400px;
}

.empresa-info {
  background-color: #FAFAFA;
  width: 95%;
  padding: 10px 30px;
  border: 1px solid #3A1C76;
  display: flex;
  justify-content: space-between;
  align-items: center;

  div {
    display: inherit;
    align-items: inherit;
    gap: 20px;
  }
}

.vagas-container {
  display: flex;
  justify-content: center;
  background-color: #fafafa;
  width: 95%;
  padding: 20px 10px;
  margin: 0 auto 15px auto;
  border: 1px solid #3A1C76;
}

.vagas-cadastradas-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  padding: 30px 40px;
  background-color: #fafafa;
}

.vagas-cadastradas {
  display: flex;
  justify-content: space-between;
  width: 100%;
  background-color: #3A1C76;
  color: #ffffff;
  padding: 15px 10px;
}

.vagas-panel-title {
  border: 1px solid #3A1C76; 
  color: #000;
}

.linha-vaga {
  display: flex;
  align-items: center;
  width: 100%;
  padding: 15px 10px;
}

.vagas-panel-text {
  border: 1px solid #3A1C76; 
  border-top: none;
}

.vagas-text {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.buttons-container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
}

@media (max-width: 768px) {
  .busca {
    display: flex;
    width: 100%;
    align-items: center;
    flex-direction: column;
    margin-bottom: 15px;
  }

.procurar-Usuarios {
    width: 100%;
    margin: 10px 0;
  }

  .empresa-info {
    padding: 10px 15px;

    p {
      text-align: center;
      font-size: 13px;
    }
  }

  .vagas-cadastradas {
      p, span {
        text-align: center;
        font-size: 15px;
      }
  }

  .linha-vaga {
      font-size: 14px;
      text-align: center;
  }

  .status {
    height: 25px;
    width: 35px;
  }
}
</style>