// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAoPNHSxR9hIxmO6FAgQ_a-H3MTbqkGC1w",
  authDomain: "tournament-manager-92a08.firebaseapp.com",
  databaseURL: "https://tournament-manager-92a08-default-rtdb.firebaseio.com",
  projectId: "tournament-manager-92a08",
  storageBucket: "tournament-manager-92a08.appspot.com",
  messagingSenderId: "278149609307",
  appId: "1:278149609307:web:35dc3dc7e452033faf8c7e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);