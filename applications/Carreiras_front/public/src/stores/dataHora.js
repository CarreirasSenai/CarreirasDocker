import { defineStore } from "pinia";
const agora = new Date();

export const useDataHora = defineStore('dataHora', {
    state: () => ({
        dia: String(agora.getDate()).padStart(2, '0'),
        mes: String(agora.getMonth() + 1).padStart(2, '0'),
        ano: agora.getFullYear(),
        hora: String(agora.getHours()).padStart(2, '0'),
        segundo: String(agora.getMinutes()).padStart(2, '0'),
        minuto: String(agora.getSeconds()).padStart(2, '0'),
    }),
})