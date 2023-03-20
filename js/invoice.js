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
      eject();
   }
});


function eject() {
   window.location.replace('../src/login.html');
};

document.querySelector('.logout').addEventListener('click', (e) => {
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
