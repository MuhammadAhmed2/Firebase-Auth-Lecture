import { auth } from "./config.js";
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";

const loginForm = document.querySelector('#login-form')

loginForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    const email = loginForm['login-email'].value
    const password = loginForm['login-password'].value
    console.log(email, password);
    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user);
    window.location = './Newsletter.html'
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage);
  });

})
