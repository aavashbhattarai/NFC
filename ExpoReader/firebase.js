// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAqr0MOAXAmiLSeWlveODKLMNRlNdR7weE",
  authDomain: "nfcapp-7fa62.firebaseapp.com",
  projectId: "nfcapp-7fa62",
  storageBucket: "nfcapp-7fa62.appspot.com",
  messagingSenderId: "179491203328",
  appId: "1:179491203328:web:60f3eaca1cffb29b636be5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);
export { auth, db, storage };
