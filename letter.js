import { db } from "./config.js";
import { collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-firestore.js";

const newsLetter = document.querySelector('#newsLetter');
const note = document.querySelector('#note');
const toast = document.querySelector('#toast');

let subs = [];

async function getData(){
    const data = await getDocs(collection(db, 'users'));
    data.forEach((docs) => {
        subs.push(docs.data());
    });
    console.log(subs);
}
getData();

newsLetter.addEventListener("submit", async (event) => {
    event.preventDefault();
    const email = newsLetter['email'].value;
    const name = newsLetter['name'].value;
    console.log(name, email);
    toast.innerHTML = `Hey, ${name} You Have Succecfully Subscribed`;
        subs.push({
            Name:name,
            Email:email
        })
    try {
      const docRef = await addDoc(collection(db, "users"), {
        Name:name,
        Email:email
      });
      console.log(subs);
      note.style.visibility = "visible"
      setTimeout(function(){note.style.visibility = "hidden"}, 7000);
      
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  });