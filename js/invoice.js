// Import the functions you need from the SDKs you need
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
const auth = getAuth();


onAuthStateChanged(auth, (user) => {
   if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.uid;

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
         alert("Check your Internet");
      });

});



// Addition of input fields
const inputField = document.getElementById('inputField');
const addButton = document.getElementById('addButton');
var classNumber = 0


addButton.addEventListener('click', (e) => {
   e.preventDefault();

   function addInputField(html) {
      const template = document.createElement('template');
      template.innerHTML = html.trim();
      return template.content.firstElementChild;
   }

   const inputs = [
      addInputField('<div><input class="col s2" id="title2" type="text" name="title" placeholder="title"><input class="col s4 offset-s1" type="text" name="description" id="description2" placeholder="description"><input class="col s2 offset-s1" type="number" name="price" id="price2" placeholder="price"><input class="col s1 offset-s1" type="number" name="quantity" id="quantity2" value="1" placeholder="qty"></div>'),
      addInputField('<div><input class="col s2" id="title3" type="text" name="title" placeholder="title"><input class="col s4 offset-s1" type="text" name="description" id="description3" placeholder="description"><input class="col s2 offset-s1" type="number" name="price" id="price3" placeholder="price"><input class="col s1 offset-s1" type="number" name="quantity" id="quantity3" value="1" placeholder="qty"></div>'),
      addInputField('<div><input class="col s2" id="title4" type="text" name="title" placeholder="title"><input class="col s4 offset-s1" type="text" name="description" id="description4" placeholder="description"><input class="col s2 offset-s1" type="number" name="price" id="price4" placeholder="price"><input class="col s1 offset-s1" type="number" name="quantity" id="quantity4" value="1" placeholder="qty"></div>'),
      addInputField('<div><input class="col s2" id="title5" type="text" name="title" placeholder="title"><input class="col s4 offset-s1" type="text" name="description" id="description5" placeholder="description"><input class="col s2 offset-s1" type="number" name="price" id="price5" placeholder="price"><input class="col s1 offset-s1" type="number" name="quantity" id="quantity5" value="1" placeholder="qty"></div>'),
      addInputField('<div><input class="col s2" id="title6" type="text" name="title" placeholder="title"><input class="col s4 offset-s1" type="text" name="description" id="description6" placeholder="description"><input class="col s2 offset-s1" type="number" name="price" id="price6" placeholder="price"><input class="col s1 offset-s1" type="number" name="quantity" id="quantity6" value="1" placeholder="qty"></div>'),
      addInputField('<div><input class="col s2" id="title7" type="text" name="title" placeholder="title"><input class="col s4 offset-s1" type="text" name="description" id="description7" placeholder="description"><input class="col s2 offset-s1" type="number" name="price" id="price7" placeholder="price"><input class="col s1 offset-s1" type="number" name="quantity" id="quantity7" value="1" placeholder="qty"></div>'),
      addInputField('<div><input class="col s2" id="title8" type="text" name="title" placeholder="title"><input class="col s4 offset-s1" type="text" name="description" id="description8" placeholder="description"><input class="col s2 offset-s1" type="number" name="price" id="price8" placeholder="price"><input class="col s1 offset-s1" type="number" name="quantity" id="quantity8" value="1" placeholder="qty"></div>'),
      addInputField('<div><input class="col s2" id="title9" type="text" name="title" placeholder="title"><input class="col s4 offset-s1" type="text" name="description" id="description9" placeholder="description"><input class="col s2 offset-s1" type="number" name="price" id="price9" placeholder="price"><input class="col s1 offset-s1" type="number" name="quantity" id="quantity9" value="1" placeholder="qty"></div>'),
      addInputField('<div><input class="col s2" id="title10" type="text" name="title" placeholder="title"><input class="col s4 offset-s1" type="text" name="description" id="description10" placeholder="description"><input class="col s2 offset-s1" type="number" name="price" id="price10" placeholder="price"><input class="col s1 offset-s1" type="number" name="quantity" id="quantity10" value="1" placeholder="qty"></div>'),
      addInputField('<div><input class="col s2" id="title11" type="text" name="title" placeholder="title"><input class="col s4 offset-s1" type="text" name="description" id="description11" placeholder="description"><input class="col s2 offset-s1" type="number" name="price" id="price11" placeholder="price"><input class="col s1 offset-s1" type="number" name="quantity" id="quantity11" value="1" placeholder="qty"></div>'),
      addInputField('<div><input class="col s2" id="title12" type="text" name="title" placeholder="title"><input class="col s4 offset-s1" type="text" name="description" id="description12" placeholder="description"><input class="col s2 offset-s1" type="number" name="price" id="price12" placeholder="price"><input class="col s1 offset-s1" type="number" name="quantity" id="quantity12" value="1" placeholder="qty"></div>'),
      addInputField('<div><input class="col s2" id="title13" type="text" name="title" placeholder="title"><input class="col s4 offset-s1" type="text" name="description" id="description13" placeholder="description"><input class="col s2 offset-s1" type="number" name="price" id="price13" placeholder="price"><input class="col s1 offset-s1" type="number" name="quantity" id="quantity13" value="1" placeholder="qty"></div>'),
      addInputField('<div><input class="col s2" id="title14" type="text" name="title" placeholder="title"><input class="col s4 offset-s1" type="text" name="description" id="description14" placeholder="description"><input class="col s2 offset-s1" type="number" name="price" id="price14" placeholder="price"><input class="col s1 offset-s1" type="number" name="quantity" id="quantity14" value="1" placeholder="qty"></div>'),
      addInputField('<div><input class="col s2" id="title15" type="text" name="title" placeholder="title"><input class="col s4 offset-s1" type="text" name="description" id="description15" placeholder="description"><input class="col s2 offset-s1" type="number" name="price" id="price15" placeholder="price"><input class="col s1 offset-s1" type="number" name="quantity" id="quantity15" value="1" placeholder="qty"></div>'),
      addInputField('<div><input class="col s2" id="title16" type="text" name="title" placeholder="title"><input class="col s4 offset-s1" type="text" name="description" id="description16" placeholder="description"><input class="col s2 offset-s1" type="number" name="price" id="price16" placeholder="price"><input class="col s1 offset-s1" type="number" name="quantity" id="quantity16" value="1" placeholder="qty"></div>'),
      addInputField('<div><input class="col s2" id="title17" type="text" name="title" placeholder="title"><input class="col s4 offset-s1" type="text" name="description" id="description17" placeholder="description"><input class="col s2 offset-s1" type="number" name="price" id="price17" placeholder="price"><input class="col s1 offset-s1" type="number" name="quantity" id="quantity17" value="1" placeholder="qty"></div>'),
      addInputField('<div><input class="col s2" id="title18" type="text" name="title" placeholder="title"><input class="col s4 offset-s1" type="text" name="description" id="description18" placeholder="description"><input class="col s2 offset-s1" type="number" name="price" id="price18" placeholder="price"><input class="col s1 offset-s1" type="number" name="quantity" id="quantity18" value="1" placeholder="qty"></div>'),
      addInputField('<div><input class="col s2" id="title19" type="text" name="title" placeholder="title"><input class="col s4 offset-s1" type="text" name="description" id="description19" placeholder="description"><input class="col s2 offset-s1" type="number" name="price" id="price19" placeholder="price"><input class="col s1 offset-s1" type="number" name="quantity" id="quantity19" value="1" placeholder="qty"></div>'),
      addInputField('<div><input class="col s2" id="title20" type="text" name="title" placeholder="title"><input class="col s4 offset-s1" type="text" name="description" id="description20" placeholder="description"><input class="col s2 offset-s1" type="number" name="price" id="price20" placeholder="price"><input class="col s1 offset-s1" type="number" name="quantity" id="quantity20" value="1" placeholder="qty"></div>'),

   ];
   inputField.appendChild(inputs[classNumber]);

   classNumber = classNumber + 1;
});