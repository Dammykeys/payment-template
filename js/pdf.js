


const invoiceForm = document.getElementById('submit');
invoiceForm.addEventListener('click', function generatePDF(e) {
   e.preventDefault()

   var clientName = document.getElementById("clientName").value;
   var address = document.getElementById('address').value.toString();
   var phone = document.getElementById('phone').value.toString();
   var email = document.getElementById('email').value.toString();
   var title = document.getElementById('title').value.toString();
   var description = document.getElementById('description').value.toString();
   var price = document.getElementById('price').value.toString();
   var quantity = document.getElementById('quantity').value.toString();
   var date = new Date();
   var year = date.getFullYear();
   var month = date.getMonth() + 1;
   var day = date.getDate();
   var newDate = day + ":" + month + ":" + year;



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
         invDate: newDate,
         invGenDate: newDate,
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
         table: Array.from(Array(1), (item, index) => ([
            index + 1,
            title,
            description,
            price,
            quantity,
            price * quantity,
            "total"
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

   // var pdfObject = jsPDFInvoiceTemplate.default(props);
   console.log(price * quantity);
   console.log(clientName);
   console.log(address);
   console.log(phone);
   console.log(price);
   console.log(quantity);
   console.log(day + "/" + month + "/" + year)
});