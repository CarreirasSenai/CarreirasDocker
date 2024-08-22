import { defineStore } from 'pinia'
import { useRouter } from 'vue-router';
import axios from 'axios';

export const useCandidatoStore = defineStore('candidato', {
    state: () => ({
        user: {
            initials: '',
            fullName: '',
            email: ''
        },
        visibilidadeNaoLogado: true,
        visibilidadeLogado: false,
        router: useRouter(),
    }),
    actions: {
        async userLogado() {
            try {
                const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/candidato/read`, {
                    withCredentials: true
                });

                this.user.initials = this.extrairIniciais(response.data.usuario.nome_completo);
                this.user.fullName = response.data.usuario.nome_completo;
                this.user.email = response.data.usuario.email;
                this.visibilidadeNaoLogado = false;
                this.visibilidadeLogado = true;

                console.log('Usuário autenticado!', response.data);

            } catch (error) {
                console.error('Erro ao obter dados do usuário', error.response ? error.response.data : error.message);
                this.router.push('/');
            }
        },
        extrairIniciais(nomeCompleto) {
            const iniciais = nomeCompleto.split(' ').map((n) => n[0]).join('');
            return iniciais.toUpperCase();
        }
    }
})
