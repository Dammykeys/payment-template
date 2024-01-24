let UserCreds = JSON.parse(sessionStorage.getItem("user-creds"));
let UserInfo = JSON.parse(sessionStorage.getItem("user-info"));
var frequency = null;


window.onblur = function () {
   enableAutoLogout();
};
window.onfocus = function () {
   if (frequency !== null) {
      disableAutoLogout();
   };
};
window.onclick = function () {
   if (frequency !== null) {
      disableAutoLogout();
   };
};

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

function enableAutoLogout() {
   frequency = setTimeout(function () {
      sessionStorage.removeItem('user-creds');
      sessionStorage.removeItem('user-info');
      alert("Session has Expired!");
      window.location.href = "login.html";
   }, 900000);
};

function disableAutoLogout() {
   clearTimeout(frequency);
   frequency = null;
}

window.addEventListener('load', checkCreds);
