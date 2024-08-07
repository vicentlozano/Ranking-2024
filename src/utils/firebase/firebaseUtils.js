import {collection, addDoc, getDocs, serverTimestamp} from "firebase/firestore";
import { db } from "./firebaseConfig";


export async function addMessage(name, avatar, text, sent) {
    try {
      const docRef = await addDoc(collection(db, "messages"), {
        name: name,
        avatar: avatar,
        text: text,
        sent: sent,
        stamp: serverTimestamp()
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  