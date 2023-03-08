import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAz9npl1IlmGWoYChftnOmF5tD5ZFCwT50",
  authDomain: "task-management-f5c5a.firebaseapp.com",
  projectId: "task-management-f5c5a",
  storageBucket: "task-management-f5c5a.appspot.com",
  messagingSenderId: "89424459652",
  appId: "1:89424459652:web:b69a21d32dc068f6988fd1",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
