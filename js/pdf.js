//TODO: hide unoccupied input fields; 
// Addition of input fields
const inputField = document.getElementById('inputField');
const addButton = document.getElementById('addButton');
var classNumber = 0
var inputFieldNumber = 1;

addButton.addEventListener('click', (e) => {
   e.preventDefault();

   inputFieldNumber = inputFieldNumber + 1;

   function addInputField(html) {
      const template = document.createElement('template');
      template.innerHTML = html.trim();
      return template.content.firstElementChild;
   }

   const inputs = [
      addInputField('<div><input class="col s2" id="title2" type="text" name="title" placeholder="title"><input class="col s4 offset-s1" type="text" name="description" id="description2" placeholder="description"><input class="col s2 offset-s1" type="number" name="price" id="price2" placeholder="price"><input class="col s1 offset-s1" type="number" name="quantity" id="quantity2" value="1" placeholder="qty"></div>'),
      addInputField('<div><input class="col s2" id="title3" type="text" name="title" placeholder="title"><input class="col s4 offset-s1" type="text" name="description" id="description3" placeholder="description"><input class="col s2 offset-s1" type="number" name="price" id="price3" placeholder="price"><input class="col s1 offset-s1" type="number" name="quantity" id="quantity3" value="1" placeholder="qty"></div>'),
      addInputField('<div><input class="col s2" id="title4" type="text" name="title" placeholder="title"><input class="col s4 offset-s1" type="text" name="description" id="description4" placeholder="description"><input class="col s2 offset-s1" type="number" name="price" id="price4" placeholder="price"><input class="col s1 offset-s1" type="number" name="quantity" id="quantity4" value="1" placeholder="qty"></div>'),
      addInputField('<div><input class="col s2" id="title5" type="text" name="title" placeholder="title"><input class="col s4 offset-s1" type="text" name="description" id="description5" placeholder="description"><input class="col s2 offset-s1" type="number" name="price" id="price5" placeholder="price"><input class="col s1 offset-s1" type="number" name="quantity" id="quantity5" value="1" placeholder="qty"></div>'),
      addInputField('<div><input class="col s2" id="title6" type="text" name="title" placeholder="title"><input class="col s4 offset-s1" type="text" name="description" id="description6" placeholder="description"><input class="col s2 offset-s1" type="number" name="price" id="price6" placeholder="price"><input class="col s1 offset-s1" type="number" name="quantity" id="quantity6" value="1" placeholder="qty"></div>'),
      addInputField('<div><input class="col s2" id="title7" type="text" name="title" placeholder="title"><input class="col s4 offset-s1" type="text" name="description" id="description7" placeholder="description"><input class="col s2 offset-s1" type="number" name="price" id="price7" placeholder="price"><input class="col s1 offset-s1" type="number" name="quantity" id="quantity7" value="1" placeholder="qty"></div>'),
      addInputField('<div><input class="col s2" id="title8" type="text" name="title" placeholder="title"><input class="col s4 offset-s1" type="text" name="description" id="description8" placeholder="description"><input class="col s2 offset-s1" type="number" name="price" id="price8" placeholder="price"><input class="col s1 offset-s1" type="number" name="quantity" id="quantity8" value="1" placeholder="qty"></div>'),
      addInputField('<div><input class="col s2" id="title9" type="text" name="title" placeholder="title"><input class="col s4 offset-s1" type="text" name="description" id="description9" placeholder="description"><input class="col s2 offset-s1" type="number" name="price" id="price9" placeholder="price"><input class="col s1 offset-s1" type="number" name="quantity" id="quantity9" value="1" placeholder="qty"></div>'),
      addInputField('<div><input class="col s2" id="title10" type="text" name="title" placeholder="title"><input class="col s4 offset-s1" type="text" name="description" id="description10" placeholder="description"><input class="col s2 offset-s1" type="number" name="price" id="price10" placeholder="price"><input class="col s1 offset-s1" type="number" name="quantity" id="quantity10" value="1" placeholder="qty"></div>'),
      addInputField('<div><input class="col s2" id="title11" type="text" name="title" placeholder="title"><input class="col s4 offset-s1" type="text" name="description" id="description11" placeholder="description"><input class="col s2 offset-s1" type="number" name="price" id="price11" placeholder="price"><input class="col s1 offset-s1" type="number" name="quantity" id="quantity11" value="1" placeholder="qty"></div>'),
      addInputField('<div><input class="col s2" id="title12" type="text" name="title" placeholder="title"><input class="col s4 offset-s1" type="text" name="description" id="description12" placeholder="description"><input class="col s2 offset-s1" type="number" name="price" id="price12" placeholder="price"><input class="col s1 offset-s1" type="number" name="quantity" id="quantity12" value="1" placeholder="qty"></div>'),
      addInputField('<div><input class="col s2" id="title13" type="text" name="title" placeholder="title"><input class="col s4 offset-s1" type="text" name="description" id="description13" placeholder="description"><input class="col s2 offset-s1" type="number" name="price" id="price13" placeholder="price"><input class="col s1 offset-s1" type="number" name="quantity" id="quantity13" value="1" placeholder="qty"></div>'),
      addInputField('<div><input class="col s2" id="title14" type="text" name="title" placeholder="title"><input class="col s4 offset-s1" type="text" name="description" id="description14" placeholder="description"><input class="col s2 offset-s1" type="number" name="price" id="price14" placeholder="price"><input class="col s1 offset-s1" type="number" name="quantity" id="quantity14" value="1" placeholder="qty"></div>'),
      addInputField('<div><input class="col s2" id="title15" type="text" name="title" placeholder="title"><input class="col s4 offset-s1" type="text" name="description" id="description15" placeholder="description"><input class="col s2 offset-s1" type="number" name="price" id="price15" placeholder="price"><input class="col s1 offset-s1" type="number" name="quantity" id="quantity15" value="1" placeholder="qty"></div>'),
      addInputField('<div><input class="col s2" id="title16" type="text" name="title" placeholder="title"><input class="col s4 offset-s1" type="text" name="description" id="description16" placeholder="description"><input class="col s2 offset-s1" type="number" name="price" id="price16" placeholder="price"><input class="col s1 offset-s1" type="number" name="quantity" id="quantity16" value="1" placeholder="qty"></div>'),
      addInputField('<div><input class="col s2" id="title17" type="text" name="title" placeholder="title"><input class="col s4 offset-s1" type="text" name="description" id="description17" placeholder="description"><input class="col s2 offset-s1" type="number" name="price" id="price17" placeholder="price"><input class="col s1 offset-s1" type="number" name="quantity" id="quantity17" value="1" placeholder="qty"></div>'),
      addInputField('<div><input class="col s2" id="title18" type="text" name="title" placeholder="title"><input class="col s4 offset-s1" type="text" name="description" id="description18" placeholder="description"><input class="col s2 offset-s1" type="number" name="price" id="price18" placeholder="price"><input class="col s1 offset-s1" type="number" name="quantity" id="quantity18" value="1" placeholder="qty"></div>'),
      addInputField('<div><input class="col s2" id="title19" type="text" name="title" placeholder="title"><input class="col s4 offset-s1" type="text" name="description" id="description19" placeholder="description"><input class="col s2 offset-s1" type="number" name="price" id="price19" placeholder="price"><input class="col s1 offset-s1" type="number" name="quantity" id="quantity19" value="1" placeholder="qty"></div>'),
      addInputField('<div><input class="col s2" id="title20" type="text" name="title" placeholder="title"><input class="col s4 offset-s1" type="text" name="description" id="description20" placeholder="description"><input class="col s2 offset-s1" type="number" name="price" id="price20" placeholder="price"><input class="col s1 offset-s1" type="number" name="quantity" id="quantity20" value="1" placeholder="qty"></div>'),

   ];
   inputField.appendChild(inputs[classNumber]);

   classNumber = classNumber + 1;
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