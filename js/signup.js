// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js";
import { getDatabase, set, ref } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-database.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-auth.js";


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
const database = getDatabase();
const auth = getAuth(app);



document.getElementById('signup').addEventListener('submit', (e) => {
   e.preventDefault();
   let email = document.getElementById('email').value;
   let password = document.getElementById('password').value;
   let firstName = document.getElementById('firstName').value;
   let lastName = document.getElementById('lastName').value;



   createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
         // Signed in
         const user = userCredential.user;
         // ...
         set(ref(database, 'admins/' + user.uid), {
            Email: email,
            FirstName: firstName,
            LastName: lastName
         });
         alert('User created');
      })
      .catch((error) => {
         const errorCode = error.code;
         const errorMessage = error.message;
         // ..
         alert(errorMessage);
      });

});
