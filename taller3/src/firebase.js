import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyD38FkvO92lBEGBcY4DeGTacHE20KEed_g",
    authDomain: "test-autenticacion-d273e.firebaseapp.com",
    projectId: "test-autenticacion-d273e",
    storageBucket: "test-autenticacion-d273e.appspot.com",
    messagingSenderId: "896024836730",
    appId: "1:896024836730:web:3368db9336a5dec66a59c3"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export { auth };