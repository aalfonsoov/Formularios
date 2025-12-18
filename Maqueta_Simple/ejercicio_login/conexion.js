// conexion.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-auth.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyBSMc30An3wI_qv4vCKbb_ZvaR_Bb5G_nE",
  authDomain: "forums-d9016.firebaseapp.com",
  projectId: "forums-d9016",
  storageBucket: "forums-d9016.firebasestorage.app",
  messagingSenderId: "772279055924",
  appId: "1:772279055924:web:91c4575d2c3016f3fdfc61",

  // IMPRESCINDIBLE para Realtime Database:
  // cópialo desde Firebase Console -> Realtime Database -> URL
  databaseURL: "https://forums-d9016-default-rtdb.europe-west1.firebasedatabase.app"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const rtdb = getDatabase(app);
