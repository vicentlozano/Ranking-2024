import { defineStore } from "pinia";
import { auth } from "../utils/firebase/firebaseConfig";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    user: null,
    isLogged: false,
  }),
  actions: {
    async login(email, password) {
      try {
        const userCredential = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );
        this.user = userCredential.user;
        this.isLogged = true;
        console.log("OKEY!!!");
      } catch (error) {
        console.error("Error logging in:", error);
      }
    },
    async signup(email, password) {
      try {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        this.user = userCredential.user;
        this.isLogged = true;
      } catch (error) {
        console.error("Error signing up:", error);
      }
    },
    async logout() {
      try {
        await signOut(auth);
        this.user = null;
        this.isLogged = false;
      } catch (error) {
        console.error("Error logging out:", error);
      }
    },
  },
});
