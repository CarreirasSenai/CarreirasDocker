<template>
    <div class="div-capa-foto rounded-b-xl elevation-2" id="foto-capa">
        <img class="capa" src="/src/assets/capa (1).png">
        <div class="pos-capa">
            <div class="div-foto-perfil">
                <div class="position-relative">
                    <img src="/src/assets/avatar.png" class="foto-perfil" alt="Foto de Perfil">
                </div>
                <div>
                    <h3 class="cor-primaria">Nome da Empresa</h3>
                    <h5 class="text-grey-darken-2">Joinville, Santa Catarina, Brasil</h5>
                    <MenuEditarEmpresa style="height: 20px !important;" class="d-flex align-center" />
                </div>
            </div>
            <div class="descricao text-grey-darken-4 pb-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magnaaliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea
                commodo consequat. et dolore magnaaliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris
                nisi ut aliquip ex ea commodo consequat. et dolore magnaaliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </div>
        </div>
    </div>
</template>

<script>
import MenuEditarEmpresa from './MenuEditarEmpresa.vue';
</script>

<style lang="scss" scoped>
.box-shadow {
    box-shadow: 0 2px 4px gray;
}

.div-capa-foto {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-bottom: 25px;
}

.capa {
    height: 250px;
    width: 100%;
    object-fit: cover;
    object-position: center;
}

.pos-capa {
    height: 150px auto;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 25px;
    gap: 15px;
}

.div-foto-perfil {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    min-width: 300px;
    gap: 20px;
}

.foto-perfil {
    width: 150px;
    height: 150px;
    border-radius: 100%;
    border: 2px solid #6832D2;
}

.descricao {
    min-width: 300px;
    max-width: 600px;
    padding: 15px;
}

@media(max-width:800px) {
    .div-capa-foto {
        margin: 0;
    }

    .pos-capa {
        justify-content: center !important;
        padding-top: 130px;
    }

    .div-foto-perfil {
        display: flex;
        flex-direction: column;
        gap: 5px;
        position: absolute;
        top: 150px;
    }

    .div-foto-perfil div {
        text-align: center;
    }

    .box-shadow {
        box-shadow: none;
    }
}
</style>