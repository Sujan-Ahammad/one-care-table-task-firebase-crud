// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/database";
import {getFirestore} from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  //   apiKey: import.meta.env.VITE_API_KEY,
  //   authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  //   projectId: import.meta.env.VITE_PROJECT_ID,
  //   storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  //   messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  //   appId: import.meta.env.VITE_APP_ID,
  apiKey: "AIzaSyAXz6-5Avaex7D2UPNSlPkDo23Bjec0Zxk",
  authDomain: "one-care-table-crud.firebaseapp.com",
  projectId: "one-care-table-crud",
  storageBucket: "one-care-table-crud.appspot.com",
  messagingSenderId: "537638913868",
  appId: "1:537638913868:web:96c3d2b0e8ec64e26cf1e9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const appDB = getFirestore(app);
