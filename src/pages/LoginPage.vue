<template>
  <div class="q-pa-md q-mt-lg form">
    <q-form @submit="signup" class="q-gutter-md">
      <q-input
        outlined
        v-model="emailAdress"
        stack-label
        label="Email Adress"
        type="email"
        placeholder="name@domain.com"
        lazy-rules
        :rules="[
          (val) =>
            (val &&
              val.length > 0 &&
              /^[^@]+@[^@]+\.[^@]+$/.test(val) &&
              val.endsWith('.com')) ||
            'Please enter a valid email address',
        ]"
      />

      <q-input
        v-model="password"
        outlined
        :type="isPwd ? 'password' : 'text'"
        stack-label
        label="Password"
      >
        <template v-slot:append>
          <q-icon
            :name="isPwd ? 'visibility_off' : 'visibility'"
            class="cursor-pointer"
            @click="isPwd = !isPwd"
          />
        </template>
      </q-input>

      <q-toggle v-model="accept" label="Remenber me" />

      <div>
        <q-btn label="Log in" type="submit" color="primary" />
      </div>
    </q-form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useAuthStore } from 'src/stores/auth';
const authStore = useAuthStore();
const emailAdress = ref(null);
const password = ref(null);
const isPwd = ref(true);
const signup = () => {
    authStore.login(emailAdress.value, password.value);
}
</script>

<style scoped>
.form {
  max-width: 700px;
}
</style>
