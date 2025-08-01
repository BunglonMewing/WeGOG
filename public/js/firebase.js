import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyA6aJKsF2oS_XbSqWcVFOfYQsvVontV7V8",
  authDomain: "wegog-806ec.firebaseapp.com",
  projectId: "wegog-806ec",
  storageBucket: "wegog-806ec.firebasestorage.app"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
