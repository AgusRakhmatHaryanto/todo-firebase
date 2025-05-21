
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCBtMMcvGCdr4NuZRPbVK8hSBAUxF9hKzA",
  authDomain: "todo-2c866.firebaseapp.com",
  projectId: "todo-2c866",
  storageBucket: "todo-2c866.firebasestorage.app",
  messagingSenderId: "1008654072971",
  appId: "1:1008654072971:web:d85eea5a98b2d55436e88e",
  measurementId: "G-1E4BD57P9F",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export  {db}
