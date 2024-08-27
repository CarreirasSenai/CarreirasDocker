<template>
    <v-card>
        <v-card-title class="cor-primaria" title="teste">Informações Pessoais</v-card-title>
        <v-card-text class="d-flex">
            <v-container>
                <v-row>
                    <v-col cols="6" md="2" class="infos-pessoais">
                        <p>Nome:</p>
                        <p>Sobrenome:<v-tooltip activator="parent" location="right">Sobrenome</v-tooltip></p>
                        <p>E-mail:</p>
                        <p>Telefone:<v-tooltip activator="parent" location="right">Telefone</v-tooltip></p>
                        <p>Celular:</p>
                        <p>CPF:</p>
                        <p>Senha:</p>
                    </v-col>
                    <v-col cols="6" md="4" class="infos-valores">
                        <p>{{ nome }}<v-tooltip activator="parent" location="right">{{ nome }}</v-tooltip></p>
                        <p>{{ sobrenome }}<v-tooltip activator="parent" location="right">{{ sobrenome }}</v-tooltip></p>
                        <p>{{ email }}<v-tooltip activator="parent" location="right">{{ email }}</v-tooltip></p>
                        <p>{{ telefone }}<v-tooltip activator="parent" location="right">{{ telefone }}</v-tooltip></p>
                        <p>{{ celular }}<v-tooltip activator="parent" location="right">{{ celular }}</v-tooltip></p>
                        <p>{{ cpf }}<v-tooltip activator="parent" location="right">{{ cpf }}</v-tooltip></p>
                        <p>{{ senha }}<v-tooltip activator="parent" location="right">{{ senha }}</v-tooltip></p>
                    </v-col>
                    <v-col cols="6" md="2" class="infos-pessoais">
                        <p>CEP:</p>
                        <p>Rua:</p>
                        <p>Número:</p>
                        <p>Complemento:<v-tooltip activator="parent" location="right">Complemento</v-tooltip></p>
                        <p>Bairro:</p>
                        <p>Cidade:</p>
                        <p>Estado:</p>
                    </v-col>
                    <v-col cols="6" md="3" class="infos-valores">
                        <p>{{ cep }}<v-tooltip activator="parent" location="right">{{ cep }}</v-tooltip></p>
                        <p>{{ rua }}<v-tooltip activator="parent" location="right">{{ rua }}</v-tooltip></p>
                        <p>{{ numero }}<v-tooltip activator="parent" location="right">{{ numero }}</v-tooltip></p>
                        <p>{{ complemento }}<v-tooltip activator="parent" location="right">{{ complemento }}</v-tooltip></p>
                        <p>{{ bairro }}<v-tooltip activator="parent" location="right">{{ bairro }}</v-tooltip></p>
                        <p>{{ cidade }}<v-tooltip activator="parent" location="right">{{ cidade }}</v-tooltip></p>
                        <p>{{ estado }}<v-tooltip activator="parent" location="right">{{ estado }}</v-tooltip></p>
                    </v-col>
                </v-row>
            </v-container>
        </v-card-text>
    </v-card>
</template>

<script>
export default {
    data: () => ({
        nome: 'Yudi',
        sobrenome: 'Tamashiro',
        email: 'japayudi@gmail.com',
        telefone: '4002-8922',
        celular: '(47) 9 4002-8922',
        cpf: '340.345.234-90',
        senha: 'asd978fh93uf0asdf03r8asf',
        cep: '78.876-876',
        rua: 'Rua da Compania',
        numero: '40',
        complemento: 'Casa',
        bairro: 'Liberdade',
        cidade: 'São Paulo',
        estado: 'SP',
    }),
}
</script>

<style scoped>
* {
    /* border: 1px solid red; */
}

p {
    margin: 5px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}

p title {
    color: red;
}

/* .infos-pessoais p {
    color: #6732d2;
} */
</style>