//paystack payment
const paymentForm = document.getElementById('paymentForm');
paymentForm.addEventListener("submit", payWithPaystack, false);
function payWithPaystack(e) {
   e.preventDefault();
   var price = Number(document.getElementById("amount").value);
   if (price > 5000 && price < 50000 || price == 50000) {
      var VATPrice = price + 25;
   } else if (price > 50000) {
      var VATPrice = price + 50;
   } else if (price > 600 && price < 5000) {
      var VATPrice = price + 10;
   } else {
      var VATPrice = price + price * 0.015;
   }
   console.log(price);
   console.log(VATPrice);

   let handler = PaystackPop.setup({
      key: 'pk_test_7273e0d3e51db20b949946c707d2180a7af72bda',
      email: document.getElementById("email-address").value,
      amount: Math.round(VATPrice) * 100,
      ref: '' + Math.floor((Math.random() * 1000000000) + 1),

      // label: "Optional string that replaces customer email"
      onClose: function () {
         alert('Oops! Are you sure you want to terminate transaction?');
         document.getElementById('transaction-id').value = ref;
      },
      callback: function (response) {
         let message = 'Payment complete! Reference: ' + response.reference;
         alert(message);
         // window.location.replace('../src/payment.html');
      }
   });
   handler.openIframe();
}

export { payWithPaystack };

document.getElementById("#modal").addEventListener('submit', e => {
   if (payWithPaystack) {

   }
})

// .replace(/,/g, '')   => to remove ,