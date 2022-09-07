<script>
export default {
 name: "LifeCycle",
 data() {
  return {
   nome: "Ainda não sei",
  };
 },
 created() {
  setTimeout(() => {
   this.nome = "Fulano";
  }, 1000);
 },
 mounted() {
  setTimeout(() => {
   this.nome = "Sicrano";
  }, 2000);
 },
};
</script>

<template>
 <h1 class="font-bold flex justify-center text-4xl">
  Meu nome é:<span class="ml-2 text-blue-600">{{ nome }}</span>
 </h1>
</template>

<style></style>
