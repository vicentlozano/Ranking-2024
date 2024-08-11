<template>
  <div class="q-pa-md q-mt-lg form">
    <q-form @submit="signup" class="q-gutter-md">
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
        v-model="password"
        outlined
        :type="isPwd ? 'password' : 'text'"
        stack-label
        label="Password"
        :rules="[
          (val) =>
            (val && val.length > 5 && /^(?=.*[A-Z])(?=.*\d).+$/.test(val)) ||
            'Password must be at least 6 characters long, contain at least one uppercase letter and one number',
        ]"
      >
        <template v-slot:append>
          <q-icon
            :name="isPwd ? 'visibility_off' : 'visibility'"
            class="cursor-pointer"
            @click="isPwd = !isPwd"
          />
        </template>
      </q-input>

      <q-toggle v-model="accept" label="I accept the license and terms" />

      <div>
        <q-btn label="Register" type="submit" color="primary" />
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
import { ref } from "vue";
import { useAuthStore } from "src/stores/auth";
import { useRouter } from "vue-router";
import { Notify } from "quasar";
const router = useRouter();
const authStore = useAuthStore();
const emailAdress = ref(null);
const password = ref(null);
const isPwd = ref(true);
const signup = async () => {
  
    console.log("Attempting to sign up with email:", emailAdress.value);
    await authStore.signup(emailAdress.value, password.value);
};
</script>

<style scoped>
.form {
  max-width: 700px;
  min-width: 300px;
}
</style>
