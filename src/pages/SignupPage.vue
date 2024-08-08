<template>
  <div class="q-pa-md" style="max-width: 400px">
    <q-form @submit="signup"  class="q-gutter-md">
      <q-input
        outlined
        v-model="emailAdress"
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
            'Please enter a valid email address ending with .com',
        ]"
      />

      <q-input
        outlined
        type="password"
        v-model="password"
        label="Password"
        placeholder="Password"
        lazy-rules
        :rules="[ 
          val => val && val.length > 5 && /^(?=.*[A-Z])(?=.*\d).+$/.test(val) || 'Password must be at least 6 characters long, contain at least one uppercase letter and one number'
        ]"
      />

      <q-toggle v-model="accept" label="I accept the license and terms" />

      <div>
        <q-btn label="Register" type="submit" color="primary"/>
        <q-btn
          label="Reset"
          type="reset"
          color="primary"
          flat
          class="q-ml-sm"
        />
      </div>
    </q-form>
  </div>
</template>

<script setup>
import {ref} from 'vue';
import { useAuthStore } from 'src/stores/auth';
const authStore = useAuthStore();
const emailAdress = ref(null);
const password = ref(null)
const signup = () => {
authStore.signup(emailAdress.value,password.value)
}
</script>



<style scoped></style>
