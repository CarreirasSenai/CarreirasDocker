import { createRouter, createWebHistory } from 'vue-router';
import Index from '@/pages/index.vue'; // Importa o componente Index
import Login from '@/components/login/Login.vue';
import CADempresa from '@/components/cadastro/CADempresa';
import CADcandidato from '@/components/cadastro/CADcandidato';
import EntrarEmpresaOuCandidato from '@/components/menu/EntrarEmpresaOuCandidato.vue';
import EDCcandidato from '@/components/edicao/EDCcandidato.vue';
import PerfilCandidato from '@/pages/perfilCandidato.vue';
import AgendaCandidato from '@/pages/AgendaCandidato.vue';
import AgendaEmpresa from '@/pages/AgendaEmpresa.vue';
import ListaCandidatosEmpresa from '@/pages/ListaCandidatosEmpresa.vue';
import RedefinirSenha from '@/pages/redefinirSenha.vue';
import ModalJustificativa from '@/components/perfis/empresa/ModalJustificativa.vue';
import ListaEmpresas from '@/components/admin/ListaEmpresas.vue';
import loginADM from '@/components/admin/loginADM.vue';
import ListaDeUsuarios from '@/components/admin/ListaDeUsuarios.vue';
import PerfilEmpresa from '@/pages/perfilEmpresa.vue';
import ListaVagas from '@/components/admin/ListaVagas.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: Index }, // Página Index como a rota padrão
    { path: '/login', component: Login },
    { path: '/cadastro-empresa', component: CADempresa },
    { path: '/cadastro-candidato', component: CADcandidato },
    { path: '/empresa-candidato', component: EntrarEmpresaOuCandidato },
    { path: '/editar-candidato', component: EDCcandidato },
    { path: '/perfil-candidato', component: PerfilCandidato },
    { path: '/perfil-empresa', component: PerfilEmpresa },
    { path: '/agenda-candidato', component: AgendaCandidato },
    { path: '/lista-candidatos-empresa', component: ListaCandidatosEmpresa },
    { path: '/redefinir-senha', component: RedefinirSenha },
    { path: '/modal-justificativa', component: ModalJustificativa },
    { path: '/login', component: Login },
    { path: '/cadastro-empresa', component: CADempresa },
    { path: '/cadastro-candidato', component: CADcandidato },
    { path: '/empresa-candidato', component: EntrarEmpresaOuCandidato },
    { path: '/editar-candidato', component: EDCcandidato },
    { path: '/perfil-candidato', component: PerfilCandidato },
    { path: '/agenda-empresa', component: AgendaEmpresa },
    { path: '/lista-candidatos-empresa', component: ListaCandidatosEmpresa },
    { path: '/lista-empresas', component: ListaEmpresas },
    { path: '/login-admin', component: loginADM },
    { path: '/lista-de-usuarios', component: ListaDeUsuarios },
    { path: '/lista-vagas', component: ListaVagas}
  ],
});

export default router;
