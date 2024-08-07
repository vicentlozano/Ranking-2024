import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyBOMpIA732_cIquNDpL_UOcsiHWosk3-GI",
  authDomain: "fishranking-1813a.firebaseapp.com",
  projectId: "fishranking-1813a",
  storageBucket: "fishranking-1813a.appspot.com",
  messagingSenderId: "3904109695",
  appId: "1:3904109695:web:f537b72dc21fd91779d34a"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Inicializar Firestore
const db = getFirestore(app);
const auth = getAuth(app);

export { auth, db };