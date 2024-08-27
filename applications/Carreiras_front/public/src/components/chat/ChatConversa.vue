<template>
    <!-- <div id="chat-home" class="bg-white h-75 w-25 rounded-t-lg mr-5 min-width-300"> -->
    <div id="chat-home"
        class="bg-white rounded-t-lg mr-5 ml-5 bottom-0 h-75 w-25 d-flex align-end justify-end flex-colunm min-width-300 h-vh-75">
        <v-container fluid class="chat-container d-flex flex-column h-100">
            <v-row class="ma-1" style="max-height: 50px;">
                <v-toolbar density="comfortable" class="bg-white border-b position-relative cursor-pointer">
                    <v-list-item :title="'Nome do Fulano'"
                        :prepend-avatar="'https://randomuser.me/api/portraits/women/1.jpg'"
                        @click="visitaPerfil(title = 'Candidato ' + n)"></v-list-item>
                    <v-btn icon="mdi-close" class="position-absolute right-0"
                        @click="$emit('FecharChatConversa')"></v-btn>
                </v-toolbar>
            </v-row>
            <v-row class="ma-1 overflow-y-auto" id="conversa">
                <div class="w-100 ga-5">
                    <div v-for="n in 3" class="ma-0">
                        <div class="eu d-flex align-end justify-end ma-2">
                            <div class="w-75 d-flex flex-column align-end justify-end">
                                <p class="bg-deep-purple-lighten-5 pa-3 text-body-2">Olá me chamo Roselinda, estou
                                    falando aqui da J&J-Devs, seria sobre a vaga para
                                    Dev Junior.
                                    Ainda tem interesse na vaga?</p>
                                <small class="text-caption">20/12/2024, 15:00.</small>
                            </div>
                        </div>
                        <div class="ele d-flex align-start justify-start ma-2">
                            <div class="w-75">
                                <p class="bg-grey-lighten-3 pa-3 text-body-2">Olá Roselinda, muito obrigado por entrar
                                    em contato</p>
                                <small class="text-caption">20/12/2024, 15:01.</small>
                            </div>
                        </div>
                    </div>
                </div>
            </v-row>
            <v-row class="d-flex align-center ma-0" style="max-height: 400px;" id="entrada">
                <v-form @submit.prevent="enviar" style="all: inherit;" class="mr-1 ml-1 pt-2 ga-2 d-flex align-start">

                    <v-col cols="12" v-if="filePreview">
                        <!-- Visualização do arquivo anexado -->
                        <v-img v-if="isImage" :src="filePreview" max-height="100" max-width="100" />
                        <v-chip v-else color="primary" dark>
                            PDF: {{ fileName }}
                        </v-chip>
                        <embed v-else :src="filePreview" type="application/pdf" width="100%" height="200px" />
                    </v-col>

                    <v-textarea v-model="mensagem" label="Escreva aqui" variant="solo-filled" rows="2" max-rows="6"
                        class="mb-2 custom-textarea" density="compact" append-inner-icon="mdi-send"
                        prepend-inner-icon="mdi-plus-circle" flat auto-grow hide-details single-line
                        @click:append-inner="enviar" @keydown.enter.prevent="enviar"
                        @click:prepend-inner="openFilePicker"></v-textarea>

                    <input ref="fileInput" type="file" accept="image/*,application/pdf" @change="handleFileChange"
                        style="display: none;" />
                </v-form>
            </v-row>
        </v-container>
    </div>
</template>

<script>
export default {
    data: () => ({
        loaded: false,
        loading: false,
        minimize: true,
        mensagem: '',
        file: null,
        filePreview: null,
        fileName: '',
    }),

    computed: {
        isImage() {
            return this.file && this.file.type.startsWith('image/');
        },
        isPDF() {
            return this.file && this.file.type === 'application/pdf';
        },
    },

    methods: {
        onClick() {
            this.loading = true

            setTimeout(() => {
                this.loading = false
                this.loaded = true
            }, 2000)
        },

        openFilePicker() {
            this.$refs.fileInput.click();
        },

        handleFileChange(event) {
            const file = event.target.files[0];
            if (file) {
                this.file = file;
                this.fileName = file.name;

                if (this.isImage || this.isPDF) {
                    this.filePreview = URL.createObjectURL(file);
                } else {
                    this.filePreview = null;
                }
            }
        },

        enviar() {
            if (this.mensagem || this.file) {
                const formData = new FormData();
                formData.append('mensagem', this.mensagem);
                if (this.file) {
                    formData.append('file', this.file);
                }

                // Realize a requisição POST aqui
                // Por exemplo: axios.post('/api/mensagem', formData)
                console.log('Enviar mensagem:', this.mensagem);
                console.log('Arquivo:', this.file);

                // Limpe os campos após o envio
                this.mensagem = '';
                this.file = null;
                this.filePreview = null;
                this.fileName = '';
            }
        },
    },
}
</script>

<style scoped>
#chat-home {
    box-shadow: 0 4px 16px #333;
}

/* .dialogo-conversa::-webkit-scrollbar {
    width: 5px;
    height: 1px;
}

.dialogo-conversa::-webkit-scrollbar-thumb {
    background-color: #adadad;
} */

.corpo-minimizado {
    height: auto !important;
}

.conversa-minimizado {
    flex: 0 0 auto !important;
    height: 0 !important;
}

.entrada-minimizado {
    height: 0 !important;
}

.h-vh-75 {
    height: 75vh !important;
}

@media(max-width:700px) {
    #chat-home {
        margin: 0 !important;
        width: 100% !important;
        height: 100vh !important;
        z-index: 1006;
        position: absolute;
        border-radius: 0 !important;
    }
}
</style>