function generatePDF() {
   var pdfObject = jsPDFInvoiceTemplate.default(props);
}
var ClientName = document.getElementById('clientName').value;
var address = document.getElementById('address').value;
var phone = document.getElementById('phone').value;
var email = document.getElementById('email').value;
var title = document.getElementById('title').value;
var description = document.getElementById('description').value;
var price = document.getElementById('price').value;
var quantity = document.getElementById('quantity').value;
var date = Date();
var props = {
   outputType: jsPDFInvoiceTemplate.OutputType.Save,
   returnJsPDFDocObject: true,
   fileName: "Invoice for " + ClientName,
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
      name: ClientName,
      address: address,
      phone: phone,
      email: email,
      otherInfo: "www.website.al",
   },
   invoice: {
      label: "Invoice #: ",
      num: 19,
      invDate: date,
      invGenDate: date,
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
         "m2",
         total
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