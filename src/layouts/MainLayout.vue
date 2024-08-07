<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />
        <q-toolbar-title> Ranking 2024 </q-toolbar-title>
        <q-btn-group push flat class="q-mr-md"  v-if="!isLogged">
          <q-btn flat rounded :to="'Signup'" :label="'sign up'" />
          <q-btn outline rounded :to="'Login'" :label="'Log in'" />
        </q-btn-group>
          <q-btn
            flat
            icon="brightness_6"
            @click="toggleDarkMode"
            :label="darkMode ? 'Light Mode' : 'Dark Mode'"
          />
       
        <!-- <div>{{currentDateTime}}</div> -->
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header> Menu </q-item-label>

        <EssentialLink
          v-for="link in linksList"
          :key="link.title"
          v-bind="link"
          :children="link.children"
        />
      </q-list>
    </q-drawer>

    <q-page-container class="flex flex-center q-pa-md">
        <router-view />
      <!-- Tu contenido aquí -->
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from "vue";
import EssentialLink from "components/EssentialLink.vue";
import { Dark } from "quasar";

defineOptions({
  name: "MainLayout",
});
const currentDateTime = ref(new Date().toLocaleString());
const darkMode = ref(Dark.isActive);

const toggleDarkMode = () => {
  Dark.set(!darkMode.value);
  darkMode.value = !darkMode.value;
};

const isLogged = false;
setInterval(() => {
  currentDateTime.value = new Date().toLocaleString();
}, 1000);
const linksList = [
  {
    title: "Inicio",
    caption: "Página Inicio",
    icon: "home",
    link: "Home",
  },
  {
    title: "Ranking",
    caption: "Ranking 2024",
    icon: "emoji_events",
    link: "Ranking",
  },
  {
    title: "Games",
    caption: "Game Plays",
    icon: "games",
    link: "Games",
  },
  {
    title: "Chat",
    caption: "Chat for users",
    icon: "chat",
    link: "Chat",
  },
  {
    title: "Photos",
    caption: "The best Photos",
    icon: "photo",
    link: "Photos",
  },
  {
    title: "Videos",
    caption: "The best Videos",
    icon: "videocam",
    link: "Videos",
  },
  {
    title: "Instagram",
    caption: "Profiles",
    icon: "rss_feed",
    link: "Instagram",
  },
];

const leftDrawerOpen = ref(false);

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}
</script>
