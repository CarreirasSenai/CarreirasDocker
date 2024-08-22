<template>
    <div style="height: 100%;">
        <Navbar />
        <v-container fluid class="fill-height main-container">
            <div class="mt-4">
                <h1>Lista de candidatos</h1>
            </div>
            <div class="list-candidato">
                <div class="card-do-candidato rounded">
                    <div class="corpo-card-candidato">
                        <v-avatar color="surface-variant ma-3" size="50"></v-avatar>
                        <div>
                            <h3>Fulano da Silva dos Santos</h3>
                            <span>Analista de testes</span>
                        </div>
                    </div>
                    <div>
                        <ul class="habilidades-candidato">
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JavaScript</li>
                            <li>Java</li>
                            <li>MySQL</li>
                        </ul>
                    </div>
                    <div>
                        <a href="/perfil-candidato">
                            <v-icon class="perfil-candidato-link" icon="mdi-arrow-top-right" color="black" />
                        </a>
                    </div>
                </div>
                <div class="card-do-candidato rounded">
                    <div class="corpo-card-candidato">
                        <v-avatar color="surface-variant ma-3" size="50"></v-avatar>
                        <div>
                            <h3>Relâmpago Mauesck</h3>
                            <span>Tech Lead</span>
                        </div>
                    </div>
                    <div>
                        <ul class="habilidades-candidato">
                            <li>HTML</li>
                            <li>SCSS</li>
                            <li>Angular</li>
                            <li>C#</li>
                            <li>SQL Server</li>
                        </ul>
                    </div>
                    <div>
                        <a href="/perfil-candidato">
                            <v-icon class="perfil-candidato-link" icon="mdi-arrow-top-right" color="black" />
                        </a>
                    </div>
                </div>
                <div class="card-do-candidato rounded">
                    <div class="corpo-card-candidato">
                        <v-avatar color="surface-variant ma-3" size="50"></v-avatar>
                        <div>
                            <h3>Chat GPT</h3>
                            <span>Desenvolvedor de Sistemas</span>
                        </div>
                    </div>
                    <div>
                        <ul class="habilidades-candidato">
                            <li>HTML</li>
                            <li>SCSS</li>
                            <li>Angular</li>
                            <li>C#</li>
                            <li>SQL Server</li>
                        </ul>
                    </div>
                    <div>
                        <a href="/perfil-candidato">
                            <v-icon class="perfil-candidato-link" icon="mdi-arrow-top-right" color="black" />
                        </a>
                    </div>
                </div>
                <div class="card-do-candidato rounded">
                    <div class="corpo-card-candidato">
                        <v-avatar color="surface-variant ma-3" size="50"></v-avatar>
                        <div>
                            <h3>Casimiro Miguel</h3>
                            <span>Torcedor do Vasco</span>
                        </div>
                    </div>
                    <div>
                        <ul class="habilidades-candidato">
                            <li>HTML</li>
                            <li>SCSS</li>
                            <li>Angular</li>
                            <li>C#</li>
                            <li>SQL Server</li>
                        </ul>
                    </div>
                    <div>
                        <a href="/perfil-candidato">
                            <v-icon class="perfil-candidato-link" icon="mdi-arrow-top-right" color="black" />
                        </a>
                    </div>
                </div>
            </div>
        </v-container>
    </div>
</template>
<script>
export default {
    data() {
        
    }
}
</script>
<style lang="scss" scoped>
// *{
//     border: 1px solid red;
// }
.main-container {
    background-color: #E1D6F6;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
}

.list-candidato {
    display: inherit;
    flex-direction: inherit;
    gap: 15px;
    width: 100%; 
    padding: 30px 50px;
}

.card-do-candidato{
    background-color: white;
    padding: 20px 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100rem;
    flex-wrap: wrap;
    max-width: 100%;
    position: relative;
}

.corpo-card-candidato {
    display: inherit;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
}

.habilidades-candidato {
    list-style: none;
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
    margin: 15px auto;

    li {
        background-color: #adadad;
        padding: 5px 25px;
        border-radius: 10px;
        user-select: none;
    }
}

.perfil-candidato-link {
    position: absolute;
    top: 0;
    right: 0;
    margin: 10px;
}

.card-candidato {
    display: flex;
    flex-direction: column;
    padding: 10px;
    width: 90%;
}

.skills {
  width: 100%;
  display: flex;
}

.v-slide-group {
    :deep(.v-slide-group__content) {
        display: flex;
        justify-content: center;
    }
}
</style>