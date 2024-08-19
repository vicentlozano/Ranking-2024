<template>
  <div class="photo">
    <BasicCarrusel />
    <BasicCarrusel />
    <BasicCarrusel />
    <BasicCarrusel />
    <BasicCarrusel />
    <BasicCarrusel />
  </div>
</template>

<script setup>
import BasicCarrusel from "src/components/BasicCarrusel.vue";
</script>
<style scoped>

.photo {
display: grid;
grid-template-columns: 1fr 1fr 1fr;
grid-auto-rows: max-content;
width: 80%;
height: 80vh;
}
@media (max-width: 1200px){
  .photo{
    grid-template-columns: 1fr 1fr;
  }
}
@media (max-width: 600px){
  .photo{
    grid-template-columns: 1fr;
  }
}
</style>
