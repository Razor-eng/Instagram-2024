import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyAMm6J0lDcqgsuevgIbzPHEuT3OMhV4Ii0",
    authDomain: "instagram-ra.firebaseapp.com",
    projectId: "instagram-ra",
    storageBucket: "instagram-ra.appspot.com",
    messagingSenderId: "569735137098",
    appId: "1:569735137098:web:81d51350fc490b4d7823b3"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, auth, firestore, storage };