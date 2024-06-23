// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { collection, getFirestore, getDocs } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBotGqjlK7pEbK5_R6Dg7Bo0tTfxaRV9KU",
    authDomain: "lexico-en-riesgo-5af2e.firebaseapp.com",
    projectId: "lexico-en-riesgo-5af2e",
    storageBucket: "lexico-en-riesgo-5af2e.appspot.com",
    messagingSenderId: "989926901017",
    appId: "1:989926901017:web:949631c82a0f9789b67188"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export async function getCategories() {
    const response = await getDocs(collection(db, "categories"));

    const listaDePalabras = [];
    response.forEach((docu) => listaDePalabras.push({ id: docu.id, ...docu.data() }))
    return listaDePalabras;
}
