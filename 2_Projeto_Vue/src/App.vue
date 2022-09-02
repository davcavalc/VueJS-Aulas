<script>
import PrimeiroComponente from "./components/PrimeiroComponente.vue";
export default {
 name: "App",
 components: { PrimeiroComponente },
 data() {
  return {
   nome: "Fulano de Tal",
   profissao: "programador",
  };
 },
};
</script>

<style></style>

<template>
 <div>
  <PrimeiroComponente />
  <p class="flex justify-center text-2xl">
   Meu nome é<span class="text-blue-500 font-bold ml-1 mr-1">{{ nome }}</span> e eu
   trabalho como {{ profissao }}.
  </p>
 </div>
</template>