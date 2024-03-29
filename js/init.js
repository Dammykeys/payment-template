(function ($) {
  $(function () {

    $('.sidenav').sidenav();
    $('.parallax').parallax();

  }); // end of document ready
})(jQuery); // end of jQuery name space



//Service Worker
if (navigator.serviceWorker) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('sw.js').then(reg => {
    }).catch(swErr => {
      console.log(`Service Worker Installation Error: ${swErr}}`)
    });
  });
}


//paystack payment
const paymentForm = document.getElementById('paymentForm');
paymentForm.addEventListener('submit', payWithPaystack, false);
function payWithPaystack(e) {
  e.preventDefault();

  let handler = PaystackPop.setup({
    key: 'pk_test_7273e0d3e51db20b949946c707d2180a7af72bda',
    email: document.getElementById("email-address").value,
    amount: document.getElementById("amount").value * 100,
    ref: '' + Math.floor((Math.random() * 1000000000) + 1),

    // label: "Optional string that replaces customer email"
    onClose: function () {
      alert('Oops! Are you sure you want to terminate transaction?');
      console.log(amount);
      document.getElementById('transaction-id').value = ref;
    },
    callback: function (response) {
      let message = 'Payment complete! Reference: ' + response.reference;
      alert(message);
    }
  });
  handler.openIframe();
}
