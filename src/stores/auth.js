import { defineStore } from "pinia";
import { ref } from "vue";
import { auth } from "../utils/firebase/firebaseConfig";
import { Notify } from "quasar";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  sendEmailVerification,
  reload,
  fetchSignInMethodsForEmail,
  onAuthStateChanged,
} from "firebase/auth";
import { useRouter } from "vue-router";

export const useAuthStore = defineStore("auth", () => {
  const user = ref(null);
  const isLogged = ref(false);
  const isEmailVerified = ref(false);
  const router = useRouter();

  // Configura el observador de estado de autenticación
  const handleAuthStateChanged = (firebaseUser) => {
    if (firebaseUser) {
      // Usuario está autenticado
      user.value = firebaseUser;
      isLogged.value = true;
      isEmailVerified.value = firebaseUser.emailVerified;
      console.log("User is logged in:", firebaseUser);
    } else {
      // Usuario no está autenticado
      user.value = null;
      isLogged.value = false;
      isEmailVerified.value = false;
      console.log("User is not logged in");
    }
  };

  onAuthStateChanged(auth, handleAuthStateChanged);

  const login = async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      user.value = userCredential.user;
      isLogged.value = true;
      await reload(user.value); // Recarga el usuario para obtener el estado actualizado
      isEmailVerified.value = user.value.emailVerified;
      if (!isEmailVerified.value) {
        // Desconectar al usuario si el correo no está verificado
        await signOut(auth);
        user.value = null;
        isLogged.value = false;
        Notify.create({
          type: "negative",
          message: "Please verify your email before logging in",
        });
      } else {
        router.push({ name: "home" });
        Notify.create({
          type: "positive",
          message: "You are logged in successfully",
        });
      }
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  const signup = async (email, password) => {
    try {
      const methods = await fetchSignInMethodsForEmail(auth, email);
      if (methods.length > 0) {
        const error = new Error("El correo electrónico ya está en uso.");
        error.code = "auth/email-already-in-use";
        throw error;
      }
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      user.value = userCredential.user;
      isLogged.value = true;
      isEmailVerified.value = false;
      await sendEmailVerification(user.value);
      console.log("Verification email sent");
      router.push({ name: "home" });
      Notify.create({
        type: "positive",
        message:
          "Your registration was successful. Please verify your email to activate your account.",
      });
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        Notify.create({
          type: "negative",
          message:
            "The email address is already in use. Please use another email.",
        });
      } else if (error.code === "auth/invalid-email") {
        console.error("Error signing up: Invalid email.");
      } else if (error.code === "auth/weak-password") {
        console.error("Error signing up: Weak password.");
      } else {
        console.error("Error signing up:", error.message);
      }
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
      user.value = null;
      isLogged.value = false;
      isEmailVerified.value = false;
      Notify.create({
        type: 'info',
        message: 'You are logged out successfully'
      });
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  const reloadUser = async () => {
    if (user.value) {
      try {
        await reload(user.value);
        isEmailVerified.value = user.value.emailVerified;
      } catch (error) {
        console.error("Error reloading user:", error);
      }
    } else {
      console.error("No user is currently logged in.");
    }
  };

  return { user, isLogged, isEmailVerified, login, signup, logout, reloadUser,onAuthStateChanged };
});