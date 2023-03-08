// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js";
import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-auth.js";


// Your web app's Firebase configuration
export const firebaseConfig = {
   apiKey: "AIzaSyCuauoKVzkACGkKNrEcESfA2e564ru8aOc",
   authDomain: "loginpage-1243d.firebaseapp.com",
   databaseURL: "https://loginpage-1243d-default-rtdb.firebaseio.com",
   projectId: "loginpage-1243d",
   storageBucket: "loginpage-1243d.appspot.com",
   messagingSenderId: "326690588735",
   appId: "1:326690588735:web:4a9eb601715e96c35f908a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();


onAuthStateChanged(auth, (user) => {
   if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.uid;
      console.log(uid);

   } else {
      // User is signed out
      // ...
      eject();
   }
});

function exit() {
   window.location.replace('../src/invoice.html');
};

function eject() {
   window.location.replace('../src/login.html');
};

document.getElementById('logout').addEventListener('click', (e) => {
   e.preventDefault();

   signOut(auth)
      .then(() => {
         // Sign-out successful.
         // ...
      }).catch((error) => {
         // An error happened.
      });

});



// Addition of input fields
const inputField = document.getElementById('inputField');
const addButton = document.getElementById('addButton');

addButton.addEventListener('click', () => {

   function addInputField(html) {
      const template = document.createElement('template');
      template.innerHTML = html.trim();
      return template.content.firstElementChild;
   }

   const input = addInputField('<div><input class="col s2" type="text" name="title" placeholder="title"><div class="col s1"></div><input class="col s4" type="text" name="description" placeholder="description"><div class="col s1"></div><input class="col s2" type="text" name="price" placeholder="price"><div class="col s1"></div><input class="col s1" type="text" name="quantity" placeholder="quantity"></div>');
   inputField.appendChild(input);
});

var ClientName = document.getElementById('clientName').value;
var address = document.getElementById('address').value;
var phone = document.getElementById('phone').value;
var email = document.getElementById('email').value;
var title = document.getElementById('title').value;
var description = document.getElementById('description').value;
var price = document.getElementById('price').value;
var quantity = document.getElementById('quantity').value;