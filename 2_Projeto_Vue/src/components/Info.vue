<script lang="ts">
export default {
 name: "Info",
 data() {
  return {
   esta_trabalhando: true,
   mostrar_email: false,
   email: "fulano12@gmail.com",
   textoBotao: "Mostrar email",
  };
 },
 methods: {
  showEmail() {
   this.mostrar_email = !this.mostrar_email;
   if (!mostrar_email) {
    this.textoBotao = "Mostrar email";
   } else {
    this.textoBotao = "Esconder email";
   }
  },
 },
};
</script>
<template>
 <div>
  <p v-if="esta_trabalhando">Estou trabalhando no momento.</p>
  <p v-else>Estou em busca de novas oportunidades.</p>
  <p>Utilizo as seguintes tecnologias:</p>
  <ul>
   <li>Javascript</li>
   <li>PHP</li>
   <li v-if="4 > 2">Python</li>
  </ul>
  <div>
   <button
    @click="showEmail"
    class="border-[1px] rounded-lg w-[15%] border-black my-1 font-semibold"
   >
    {{ textoBotao }}
   </button>
  </div>
  <p v-show="mostrar_email">
   Mande um email para:
   <span class="italic underline text-blue-600">{{ email }}</span>
  </p>
 </div>
</template>
