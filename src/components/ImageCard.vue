<template>
  <div class="q-pa-md row items-start q-gutter-md">
    <q-card class="my-card" flat bordered>
      <div class="image-container">
        <q-img :src="imageSrc" class="fish-image" lazy />
        <q-btn
          icon="fullscreen"
          class="fullscreen-btn"
          @click="showModal = true"
        />
      </div>

      <q-card-section>
        <div class="text-overline text-orange-9">{{ specie }}</div>
        <div class="text-h6 q-mb-xs row items-center">
          <q-avatar size="sm" class="q-mr-xs">
            <img :src="avatarSrc" />
          </q-avatar>
          <div class="custom-name">{{ name }}</div>
        </div>
        <div class="text-caption text-primary q-pa-xs spot-container">
          Spot: {{ location }}
          <q-space />
          <q-btn
            round
            flat
            color="accent"
            @click="openLocationInNewTab"
            icon="room"
            label-position="left"
          />
        </div>
        <q-linear-progress size="24px" :value="cm / 100" color="orange" class="rounded-borders">
          <div class="absolute-full flex flex-center">
            <q-badge color="white" text-color="accent" :label="cm + ' cm'" />
          </div>
        </q-linear-progress>
      </q-card-section>

      <q-expansion-item
        dense
        dense-toggle
        expand-separator
        icon="info"
        label="Detalles"
        header-class="text-purple"
      >
        <q-card>
          <q-card-section>
            <div class="text-caption text-primary">Spot: {{ location }}</div>
            <div class="text-caption text-secondary">Tamaño: {{ cm }} cm</div>
            <div class="text-caption text-red">Señuelo: {{ lure }}</div>
            <div class="text-caption text-orange">
              Fecha: {{ date ? date.toLocaleDateString('es-ES', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }) : 'Fecha no disponible' }}
            </div>
          </q-card-section>
        </q-card>
      </q-expansion-item>
    </q-card>

    <q-dialog v-model="showModal" transition-show="scale" transition-hide="scale">
      <q-card class="fullscreen-card">
        <q-img :src="imageSrc" class="fullscreen-image" />
        <q-btn
          icon="close"
          class="close-btn"
          @click="showModal = false"
        />
      </q-card>
    </q-dialog>
  </div>
</template>

<script setup>
import { ref, defineProps, computed } from "vue";

const props = defineProps({
  img: String,
  specie: String,
  avatar: String,
  name: String,
  cm: Number,
  location: String,
  lure: String,
  date: Date,
  text: String,
});

const showModal = ref(false);

const avatarSrc = computed(() => {
  try {
    return require(`../assets/avatars/${props.avatar}`);
  } catch (e) {
    console.error(`Error loading avatar: ${props.avatar}`, e);
    return "";
  }
});

const imageSrc = computed(() => {
  try {
    return require(`../assets/fish-catches/${props.img}`);
  } catch (e) {
    console.error(`Error loading img: ${props.img}`, e);
    return "";
  }
});

const locationUrl = computed(() => {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(props.location)}`;
});

const openLocationInNewTab = () => {
  window.open(locationUrl.value, '_blank');
};
</script>

<style scoped>
.my-card {
  width: 100%;
  min-width: 350px;
}
.custom-name {
  font-size: 0.8rem;
}
.image-container {
  position: relative;
}
.fish-image {
  object-fit: contain;
  width: 100%;
  height: 250px;
  cursor: pointer; /* Cambia el cursor para indicar que la imagen es clicable */
}
.fullscreen-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
}
.spot-container {
  display: flex;
  align-items: center;
}
.fullscreen-card, .map-card {
  position: relative;
  width: 90vw;
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.fullscreen-image {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}
.close-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
}
@media (max-width: 790px) {
  .my-card {
    width: 100%;
    min-width: 400px;
  }
}
@media (max-width: 400px) {
  .my-card {
    width: 100%;
    min-width: 300px;
  }
}
</style>