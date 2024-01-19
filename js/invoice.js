let UserCreds = JSON.parse(sessionStorage.getItem("user-creds"));
let UserInfo = JSON.parse(sessionStorage.getItem("user-info"));


let Signout = () => {
   sessionStorage.removeItem('user-creds');
   sessionStorage.removeItem('user-info');
   window.location.href = "login.html";
};

let checkCreds = () => {

   if (!sessionStorage.getItem("user-creds")) {
      alert("Session has Expired!");
      window.location.href = "login.html"
   };
};

setTimeout(function () {
   sessionStorage.removeItem('user-creds');
   sessionStorage.removeItem('user-info');
   alert("Session has Expired!");
   window.location.href = "login.html";
}, 900000);

window.addEventListener('load', checkCreds);
