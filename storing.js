customerobjs = [];
let iteminfo = [{item:"Black Beans", price: 2.00, quantity:1},
                {item:"Pasta", price: 1.00, quantity:1},
                {item:"Watties Spaghetti", price: 2.00, quantity: 1},
                {item:"Canned Peaches", price: 2.50, quantity:1},
                {item:"Chicken Soup", price: 2.80, quantity:1},
                {item:"Corn Soup", price: 2.80, quantity:1},
                {item:"Tomato Soup", price: 2.80, quantity:1},
                {item:"Magnum Ice-Cream", price: 5.90, quantity:1},
                {item:"Cadbury Chocolate", price: 3.50, quantity:1},
                {item:"Kit-Kat", price: 3.50, quantity:1},
                {item:"Heiniken Beer", price: 20.90, quantity:1},
                {item:"Frozen Vege", price: 3.50, quantity:1},
                {item:"Chicken nuggets", price: 10.80, quantity:1},
                {item:"Shapes", price: 2.50, quantity:1},
                {item:"Fries", price: 3.50, quantity:1},
                {item:"Beverage beers", price: 8.90, quantity:1},
                {item:"Milo", price: 4.90, quantity:1},
                {item:"Sprite", price: 2.00, quantity:1},
                {item:"Fanta", price: 2.00, quantity:1},
                {item:"Coffee", price: 5.70, quantity:1},
                {item:"Cola", price: 2.00, quantity:1},
                {item:"Nescafe", price: 4.50, quantity:1},
                {item:"Toothpaste", price: 3.00, quantity:1},
                {item:"Shampoo", price: 6.90, quantity:1},
                {item:"Body Lotion", price: 5.00, quantity:1},
                {item: "Hand Sanitizer", price: 2.50, quantity:1},
                {item:"Deodorant", price: 4.00, quantity:1},
                {item:"Conditoner", price: 6.00, quantity:1},
                {item:"Toothbrush", price: 2.00, quantity:1},
                {item:"Perfume", price: 7.00, quantity:1}];
let itemsincart = []; 
//accesses the customer details and stores it into an array

function newcustomerdetails(){
  var objects = {};
  let name = document.getElementById("name");
  let address = document.getElementById("address");
  let bankno = document.getElementById("bankcardno");
  let email = document.getElementById("email");
  objects.custname = name;
  objects.custaddress = address;
  objects.custbank = bankno;
  objects.custemail = email; 
  customerobjs.push(objects);

}

//searching for products

const input = document.getElementById('searches');

const products = document.getElementsByClassName('product');


input.addEventListener('keyup', (e) => {search(e.target.value.toLowerCase())}
  );

function search(item){
  for (i = 0; i < products.length; i++) {


if (!products[i].innerText.toLowerCase().includes(item)) {
  
  products[i].style.display = 'none';

} else {
  products[i].style.display = 'stack-item';
  console.log(products[i]);
}
}
}

 

function addToCart(item){
	for (i=0; i<itemsincart.length; i++){
  	if(itemsincart[i].item == item){
    	itemsincart[i].item.quantity += 1;
    }
    else{
    	for (j=0;j<iteminfo.length;j++){
      	if (iteminfo[j].item == item){
        	itemsincart.push(iteminfo[i]);
        }
      }
    
    }
  }
  totalsum();
	
}let total = document.getElementById("total");
//calculating total sum of products added to cart
function totalsum(){
	let sum=0;
  for (i=0; i<itemsincart.length; i++){
  	sum += itemsincart[i].price * itemsincart[i].quantity;
  }
  total.innerText="Total: $"+sum;
}
//storing feedback from users
function feedback(){
	let email = docucment.getElementsByname("email");
  let name = document.getElementsByName("name");
  let feedback = document.getElementByName("feedback");
  
  
}
function displaycart(){
	for (let i=0;i<myCart.length;i++){
		for (let j=0; products.length;j++){
				if (products[j].innerHTML.toLowerCase().contains(myCart[i].item)){
          products[j].style.display = 'list-item';
        }
        

				
				
		}
		
	}
}

