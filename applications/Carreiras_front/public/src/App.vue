<template>
  <v-app>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
</script>

<style>
.mdi {
  font-size: 30px;
  cursor: pointer;
}

.cor-primaria {
  color: #6832D2;
}

.cor-secundaria {
  color: #191919;
}

.cor-terciaria {
  color: #3A1C76;
}

.bt-primario {
  background-color: #6E3AD4 !important;
  color: white !important;
}

.back-primario {
  background-color: #6832D2;
}

.back-secundario {
  background-color: #f0f0f0;
}

.min-width-300 {
  min-width: 300px;
}

.box-shadow {
  box-shadow: 0 2px 4px gray;
}

.v-container {
  padding: 0 !important;
}
</style>