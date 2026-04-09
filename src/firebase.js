
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBxBQeah3nWDwC5E-pATYNSwkRUBfjBeQs",
  authDomain: "yolchi-ai.firebaseapp.com",
  projectId: "yolchi-ai",
  storageBucket: "yolchi-ai.firebasestorage.app",
  messagingSenderId: "451774764947",
  appId: "1:451774764947:web:2989a2fad4f79ee233fa66",
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)