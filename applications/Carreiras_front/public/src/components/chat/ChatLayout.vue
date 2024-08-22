<template>
    <div class="position-fixed bottom-0 h-0 w-100 d-flex align-end justify-end flex-colunm container-layout">
        <ChatConversa v-if="visibilidadeChatConversa" @FecharChatConversa="fecharChatConversa" />
        <ChatNova v-if="visibilidadeChatNova" @AlternaChatHomeNova="alternaChatHomeNova"
            @FecharChatNova="fecharChatNova" @FecharChatConversa="fecharChatConversa" />
        <ChatHome v-if="visibilidadeChatHome" @AlternaChatHomeNova="alternaChatHomeNova"
            @FecharChatHome="fecharChatHome" />
    </div>
</template>

<script>
import ChatHome from './ChatHome.vue';
import ChatNova from './ChatNova.vue';
import ChatConversa from './ChatConversa.vue';

export default {
    data: () => ({
        loaded: false,
        loading: false,
        visibilidadeChatHome: false,
        visibilidadeChatNova: false,
        visibilidadeChatConversa: false,
    }),
    methods: {
        onClick() {
            this.loading = true

            setTimeout(() => {
                this.loading = false
                this.loaded = true
            }, 2000)
        },
        abrirChatHome() {
            this.visibilidadeChatHome = !this.visibilidadeChatHome;
        },
        alternaChatHomeNova() {
            this.visibilidadeChatHome = !this.visibilidadeChatHome;
            this.visibilidadeChatNova = !this.visibilidadeChatNova;
        },
        fecharChatHome() {
            this.visibilidadeChatHome = !this.visibilidadeChatHome;
        },
        fecharChatNova() {
            this.visibilidadeChatNova = !this.visibilidadeChatNova;
        },
        fecharChatConversa() {
            this.visibilidadeChatConversa = !this.visibilidadeChatConversa;
        },
    },
}
</script>

<style scoped>
* {
    z-index: 1005;
}

@media(max-width:700px) {
    .container-layout {
        /* padding: ; */
    }
}
</style>