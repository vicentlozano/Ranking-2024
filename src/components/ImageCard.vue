<template>
  <div class="q-pa-md row items-start q-gutter-md">
    <q-card class="my-card" flat bordered>
      <q-img :src="imageSrc"  class="fish-image" lazy/>

      <q-card-section>
        <div class="text-overline text-orange-9">{{ specie }}</div>
        <div class="text-h6 q-mb-xs row items-center">
          <q-avatar size="sm" class="q-mr-xs">
            <img :src="avatarSrc" />
          </q-avatar>
          <div class="custom-name">{{ name }}</div>
        </div>
        <div class="text-caption text-primary">
          Spot: {{ location }}
        </div>
        <div class="text-caption text-secondary">
          Tamaño: {{ cm }} cm
        </div>
      </q-card-section>

      <q-card-actions>
        <q-btn flat color="primary" label="Share" />
        <q-btn flat color="secondary" label="Book" />

        <q-space />

        <q-btn
          color="grey"
          round
          flat
          dense
          :icon="expanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
          @click="expanded = !expanded"
        />
      </q-card-actions>

      <q-slide-transition>
        <div v-show="expanded">
          <q-separator />
          <q-card-section class="text-subtitle2">
            {{ lorem }}
          </q-card-section>
        </div>
      </q-slide-transition>
    </q-card>
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
  date: Date,
  text: String,
});
const expanded = ref(false);
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
</script>

<style scoped>
.my-card {
  width: 100%;
  min-width: 350px
}
.custom-name{
font-size: 0.8rem;
}
.fish-image{
  object-fit: contain;
  width: 100%;
  height: 250px;
}
@media(max-width: 790px){
  .my-card {
  width: 100%;
  min-width: 400px;
}
}
</style>
