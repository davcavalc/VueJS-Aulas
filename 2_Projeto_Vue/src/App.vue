<script>
import PrimeiroComponente from "./components/PrimeiroComponente.vue";
import LifeCycle from "./components/LifeCycle.vue";
import Info from "./components/Info.vue";
import Info1 from "./components/Info.vue";
export default {
 name: "App",
 components: { PrimeiroComponente, LifeCycle, Info, Info1 },
 data() {
  return {
   nome: "Fulano de Tal",
   profissao: "programador Frontend",
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
  <LifeCycle/>
  <Info1/>
 </div>
</template>