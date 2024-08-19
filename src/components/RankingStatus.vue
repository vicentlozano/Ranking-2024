<template>
  <div class="q-pa-md ranking">
    <q-toolbar class="bg-primary text-white shadow-2">
      <q-toolbar-title>
        <q-icon name="emoji_events" color="gold" size="lg" /> Ranking Position
      </q-toolbar-title>
    </q-toolbar>

    <q-list bordered class="ranking-list">
      <q-separator />
      <q-item
        v-for="(contact, index) in offline"
        :key="contact.id"
        class="q-m-sm"
        clickable
        v-ripple
      >
        <q-item-section avatar>
          <q-avatar>
            <q-icon
              :name="getIconName(index)"
              :color="getIconColor(index)"
              size="lg"
            />
          </q-avatar>
        </q-item-section>
        <q-item-section avatar>
          <q-avatar>
            <img :src="`https://cdn.quasar.dev/img/${contact.avatar}`" />
          </q-avatar>
        </q-item-section>
        <q-item-section>
          <q-item-label>{{ contact.name }}</q-item-label>
          <q-item-label caption lines="1">{{ contact.email }}</q-item-label>
        </q-item-section>
        <q-item-section side>
          <q-icon name="chat_bubble" color="grey" />
        </q-item-section>
      </q-item>
    </q-list>
  </div>
</template>

<script>
export default {
  data() {
    return {
      offline: [
        {
          id: 1,
          name: "John Doe",
          email: "john@example.com",
          avatar: "avatar1.jpg",
        },
        {
          id: 2,
          name: "Jane Doe",
          email: "jane@example.com",
          avatar: "avatar2.jpg",
        },
        {
          id: 3,
          name: "Sam Smith",
          email: "sam@example.com",
          avatar: "avatar3.jpg",
        },
      ],
    };
  },
  methods: {
    getIconName(index) {
      if (index === 0) return "emoji_events";
      if (index === 1) return "looks_two";
      if (index === 2) return "looks_3";
      return "star";
    },
    getIconColor(index) {
      if (index === 0) return "gold";
      if (index === 1) return "silver";
      if (index === 2) return "bronze";
      return "grey";
    },
  },
};
</script>

<style scoped>


</style>
