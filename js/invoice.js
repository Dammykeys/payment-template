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


// var ClientName = document.getElementById('clientName').value;
// var address = document.getElementById('address').value;
// var phone = document.getElementById('phone').value;
// var email = document.getElementById('email').value;
// var title = document.getElementById('title').value;
// var description = document.getElementById('description').value;
// var price = document.getElementById('price').value;
// var quantity = document.getElementById('quantity').value;
// var date = Date();
// var props = {
//    outputType: jsPDFInvoiceTemplate.OutputType.Save,
//    returnJsPDFDocObject: true,
//    fileName: "Invoice for " + ClientName,
//    orientationLandscape: false,
//    compress: true,
//    logo: {
//       src: "../images/dammykeys04_logo.png",
//       type: 'PNG', //optional, when src= data:uri (nodejs case)
//       width: 26.66, //aspect ratio = width/height
//       height: 26.66,
//       margin: {
//          top: 0, //negative or positive num, from the current position
//          left: 0 //negative or positive num, from the current position
//       }
//    },
//    business: {
//       name: "Dammykeys",
//       address: "Shop 08, FMS Market, LASU.",
//       phone: "(+234) 812 2468 628",
//       email: "immanueladeniyi7@gmail.com",
//       email_1: "immanueladeniyi7@gmail.com",
//       website: "https://dammykeys.github.io/payment-template",
//    },
//    contact: {
//       label: "Invoice issued for:",
//       name: ClientName,
//       address: address,
//       phone: phone,
//       email: email,
//       otherInfo: "www.website.al",
//    },
//    invoice: {
//       label: "Invoice #: ",
//       num: 19,
//       invDate: date,
//       invGenDate: date,
//       headerBorder: false,
//       tableBodyBorder: false,
//       header: [
//          {
//             title: "#",
//             style: {
//                width: 10
//             }
//          },
//          {
//             title: "Title",
//             style: {
//                width: 30
//             }
//          },
//          {
//             title: "Description",
//             style: {
//                width: 80
//             }
//          },
//          { title: "Price" },
//          { title: "Quantity" },
//          { title: "Unit" },
//          { title: "Total" }
//       ],
//       table: Array.from(Array(1), (item, index) => ([
//          index + 1,
//          title,
//          description,
//          price,
//          quantity,
//          "m2",
//          "total"
//       ])),
//       additionalRows: [{
//          col1: 'Total:',
//          col2: '145,250.50',
//          col3: 'ALL',
//          style: {
//             fontSize: 14 //optional, default 12
//          }
//       },
//       {
//          col1: 'VAT:',
//          col2: '20',
//          col3: '%',
//          style: {
//             fontSize: 10 //optional, default 12
//          }
//       },
//       {
//          col1: 'SubTotal:',
//          col2: '116,199.90',
//          col3: 'ALL',
//          style: {
//             fontSize: 10 //optional, default 12
//          }
//       }],
//       invDescLabel: "Invoice Note",
//       invDesc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
//    },
//    footer: {
//       text: "The invoice is created on a computer and is valid without the signature and stamp.",
//    },
//    pageEnable: true,
//    pageLabel: "Page ",
// };