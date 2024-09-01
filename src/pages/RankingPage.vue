<template>
  <div class="container">
    <Section class="ranking">
      <RankingStatus />
    </Section>
    <section class="grid">
      <ImageCard
        :specie="'Sargo'"
        :avatar="'Pedro.jpg'"
        :name="'Pedro'"
        :img="'Sargo.jpg'"
        :cm="28"
        :location="'Javea'"
      />
      <ImageCard
        :specie="'Mero'"
        :avatar="'Vicent.jpg'"
        :name="'Vicent'"
        :img="'MeroVicent.jpg'"
        :cm="22"
        :location="'Punta Estrella'"
      />
      <ImageCard
        :specie="'Aguja'"
        :avatar="'Vicent.jpg'"
        :name="'Vicent'"
        :img="'AgujaVicent.jpg'"
        :cm="80"
        :location="'Morro Toix'"
      />
      <ImageCard
        :specie="'Dentón'"
        :avatar="'Vicent.jpg'"
        :name="'Vicent'"
        :img="'DentonVicent.jpg'"
        :cm="28"
        :location="'Cantal Roig'"
      />
      <ImageCard
        :specie="'Dorada'"
        :avatar="'Vicent.jpg'"
        :name="'Vicent'"
        :img="'DoradaVicent.jpg'"
        :cm="25"
        :location="'Cala Alga'"
      />
      <ImageCard
        :specie="'Golfás'"
        :avatar="'Vicent.jpg'"
        :name="'Vicent'"
        :img="'GolfasVicent.jpg'"
        :cm="28"
        :location="'Morro Toix'"
      />
      <ImageCard
        :specie="'Palometón'"
        :avatar="'Vicent.jpg'"
        :name="'Vicent'"
        :img="'PalometonVicent.jpg'"
        :cm="50"
        :location="'Morro Toix'"
      />
      <ImageCard
        :specie="'Lubina'"
        :avatar="'Vicent.jpg'"
        :name="'Vicent'"
        :img="'LubinaVicent.jpg'"
        :cm="40"
        :location="'Cala Alga'"
      />
    </section>
  </div>
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
  gap: 0.3rem; /* Añade un espacio entre las tarjetas */
}
@media (max-width: 1600px) {
  .grid {
    grid-template-columns: 1fr 1fr 1fr; /* Dos columnas en pantallas medianas */
  }
}
@media (max-width: 1330px) {
  .grid {
    grid-template-columns: 1fr 1fr; /* Dos columnas en pantallas medianas */
  }
}

@media (max-width: 790px) {
  .grid {
    grid-template-columns: 1fr; /* Una columna en pantallas pequeñas */
  }
}
</style>
