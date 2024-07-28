import { auth } from "./config.js";
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";


const signupForm = document.querySelector('#signup-form')
const GoogleSignup = document.querySelector('#GoogleSignup')

signupForm.addEventListener('submit', (e)=>{
  e.preventDefault();
  const email = signupForm['signup-email'].value
  const password = signupForm['signup-password'].value
  console.log(email, password);
  
  createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {

    // Signed up 
    const user = userCredential.user;
    console.log(user);
    window.location = './login.html'
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode);
    console.log(errorMessage);
    // ..
  });

})

// Google Authentication  Start From Here.

import { signInWithPopup, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";
const provider = new GoogleAuthProvider();

GoogleSignup.addEventListener("click", () => {
  console.log("google login");

  signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user;
      console.log(user);
      window.location = "https://sky-devs.web.app/";
    })
    .catch((error) => {
      const errorMessage = error.message;
      console.log(errorMessage);
    });
});