<template>
  <Section class="ranking">
    <RankingStatus/>
  </Section>
  <section class="grid">
    <ImageCard />
    <ImageCard />
    <ImageCard />
    <ImageCard />
    <ImageCard />
    <ImageCard />
    <ImageCard />
    <ImageCard />
  </section>
</template>

<script setup>
import ImageCard from "src/components/ImageCard.vue";
import RankingStatus from "src/components/RankingStatus.vue";
</script>
<style scoped>
.grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-auto-rows: auto;
}
@media (max-width: 1600px) {
  .grid {
    grid-template-columns: 1fr 1fr 1fr ; /* Dos columnas en pantallas medianas */
  }
}
@media (max-width: 1200px) {
  .grid {
    grid-template-columns: 1fr 1fr; /* Dos columnas en pantallas medianas */
  }
}

@media (max-width: 600px) {
  .grid {
    grid-template-columns: 1fr; /* Una columna en pantallas pequeñas */
  }
}
</style>
