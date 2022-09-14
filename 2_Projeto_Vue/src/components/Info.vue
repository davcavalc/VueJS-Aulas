<script lang="ts">
export default {
 name: "Info",
 data() {
  return {
   esta_trabalhando: true,
   mande_email: false,
   email: "fulano12@gmail.com",
  };
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
  <p v-show="mande_email">Mande um email para: <span class="italic underline text-blue-600">{{ email }}</span></p>
 </div>
</template>
