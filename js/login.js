// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js";
import { getDatabase, ref, update } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-database.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-auth.js";



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

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
const database = getDatabase(app);
const auth = getAuth();
const dt = new Date();


document.getElementById('login').addEventListener('submit', (e) => {

   e.preventDefault();
   var email = document.getElementById('email').value;
   var password = document.getElementById('password').value;


   signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
         // Signed in 
         const user = userCredential.user;
         // ...
         update(ref(database, 'users/' + user.uid), {
            last_login: dt,
            logged_in: true
         });
         exit();
      })
      .catch((error) => {
         const errorCode = error.code;
         const errorMessage = error.message;

         alert("Wrong Email or Password Detected");
      });


});


function exit() {
   window.location.replace('../src/invoice.html');
};

function eject() {
   window.location.replace('../src/login.html');
};
