//TODO: hide unoccupied input fields; 

var addButton = document.getElementById('addButton');
var inputFieldNumber = 1;

addButton.addEventListener('click', function iterate() {
   inputFieldNumber = inputFieldNumber + 1;
   console.log(inputFieldNumber);
});

const invoiceForm = document.getElementById('submit');
invoiceForm.addEventListener('click', function generatePDF(e) {
   e.preventDefault()

   var titles = [];
   var descriptions = [];
   var prices = [];
   var quantities = [];
   var idNumber = 0;

   for (let i = 1; i < inputFieldNumber + 1; i++) {
      idNumber += 1;
      var title = "title";
      var description = "description";
      var price = "price";
      var quantity = "quantity";
      titles.push(title + idNumber);
      descriptions.push(description + idNumber);
      prices.push(price + idNumber);
      quantities.push(quantity + idNumber);
   }


   var clientName = document.getElementById("clientName").value;
   var address = document.getElementById('address').value;
   var phone = document.getElementById('phone').value;
   var email = document.getElementById('email').value;
   var date = new Date();
   var year = date.getFullYear();
   var month = date.getMonth() + 1;
   var day = date.getDate();
   var newDate = day + "/" + month + "/" + year;



   var props = {
      outputType: jsPDFInvoiceTemplate.OutputType.Save,
      returnJsPDFDocObject: true,
      fileName: "Invoice for " + clientName,
      orientationLandscape: false,
      compress: true,
      logo: {
         src: "../images/dammykeys04_logo.png",
         type: 'PNG', //optional, when src= data:uri (nodejs case)
         width: 26.66, //aspect ratio = width/height
         height: 26.66,
         margin: {
            top: 0, //negative or positive num, from the current position
            left: 0 //negative or positive num, from the current position
         }
      },
      business: {
         name: "Dammykeys",
         address: "Shop 08, FMS Market, LASU.",
         phone: "(+234) 812 2468 628",
         email: "immanueladeniyi7@gmail.com",
         email_1: "immanueladeniyi7@gmail.com",
         website: "https://dammykeys.github.io/payment-template",
      },
      contact: {
         label: "Invoice issued for:",
         name: clientName,
         address: address,
         phone: phone,
         email: email,
         otherInfo: "www.website.al",
      },
      invoice: {
         label: "Invoice #: ",
         num: 19,
         invDate: "Invoice Date: " + newDate,
         invGenDate: "Invoice Gen. Date: " + newDate,
         headerBorder: false,
         tableBodyBorder: false,
         header: [
            {
               title: "#",
               style: {
                  width: 10
               }
            },
            {
               title: "Title",
               style: {
                  width: 30
               }
            },
            {
               title: "Description",
               style: {
                  width: 80
               }
            },
            { title: "Price" },
            { title: "Quantity" },
            { title: "Unit" },
            { title: "Total" }
         ],
         table: Array.from(Array(inputFieldNumber), (item, index) => ([
            index + 1,
            document.getElementById(titles[index]).value,
            document.getElementById(descriptions[index]).value,
            document.getElementById(prices[index]).value.replace(/,/g, ''),
            document.getElementById(quantities[index]).value,
            document.getElementById(prices[index]).value.replace(/,/g, '') * document.getElementById(quantities[index]).value,
            parseFloat(document.getElementById(prices[index]).value.replace(/,/g, '') * document.getElementById(quantities[index]).value)
         ])),
         additionalRows: [{
            col1: 'Total:',
            col2: '145,250.50',
            col3: 'ALL',
            style: {
               fontSize: 14 //optional, default 12
            }
         },
         {
            col1: 'VAT:',
            col2: '20',
            col3: '%',
            style: {
               fontSize: 10 //optional, default 12
            }
         },
         {
            col1: 'SubTotal:',
            col2: '116,199.90',
            col3: 'ALL',
            style: {
               fontSize: 10 //optional, default 12
            }
         }],
         invDescLabel: "Invoice Note",
         invDesc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
      },
      footer: {
         text: "The invoice is created on a computer and is valid without the signature and stamp.",
      },
      pageEnable: true,
      pageLabel: "Page ",
   };


   var pdfObject = jsPDFInvoiceTemplate.default(props);
});