import { defineStore } from "pinia";
import { ref } from "vue";
import { auth } from "../utils/firebase/firebaseConfig";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  sendEmailVerification,
} from "firebase/auth";

export const useAuthStore = defineStore("auth", () => {
  const user = ref(null);
  const isLogged = ref(false);
  const isEmailVerified = ref(false);

  const login = async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      user.value = userCredential.user;
      isLogged.value = true;
      isEmailVerified.value = user.value.emailVerified;
      if (!isEmailVerified.value) {
        console.warn("Email not verified");
      }
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  const signup = async (email, password) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      user.value = userCredential.user;
      isLogged.value = true;
      isEmailVerified.value = false;
      await sendEmailVerification(user.value);
      console.log("Verification email sent");
    } catch (error) {
      console.error("Error signing up:", error);
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
      user.value = null;
      isLogged.value = false;
      isEmailVerified.value = false;
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return { user, isLogged, isEmailVerified, login, signup, logout };
});