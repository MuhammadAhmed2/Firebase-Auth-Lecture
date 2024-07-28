
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyBacXc2M2Zb0FNmZHkC73YuVYE82TbdLqs",
  authDomain: "xyzauth-dde5a.firebaseapp.com",
  projectId: "xyzauth-dde5a",
  storageBucket: "xyzauth-dde5a.appspot.com",
  messagingSenderId: "931353696205",
  appId: "1:931353696205:web:50d10359ab024b6e811684"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);