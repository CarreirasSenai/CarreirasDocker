import { defineStore } from "pinia";
import axios from "axios";

export const usePesquisaVaga = defineStore('pesquisaVaga', {
    state: () => ({
        loaded: false,
        loading: false,
        pesquisa: '',
        visibilidadeHome: true,
        visibilidadeFiltroVagas: false,
    }),

    actions: {
        onClick() {
            this.loading = true

            setTimeout(() => {
                this.loading = false
                this.loaded = true
                this.pesquisar();
            }, 2000)
        },

        onEnter() {
            this.loading = true

            setTimeout(() => {
                this.loading = false
                this.loaded = true
            }, 2000)
        },

        async pesquisar() {
            try {
                const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/vaga/pesquisa`, {
                    pesquisa: this.pesquisa,
                });

                this.visibilidadeHome = false;
                this.visibilidadeFiltroVagas = true;

                console.log('Busca enviada!', response.data);

            } catch (error) {
                console.log('Erro ao enviar busca!', error.response);
            };
        },
    }
})