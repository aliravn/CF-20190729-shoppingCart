// shop page is rendered here
// loops through array in JSON and renders boxes with image and text
// create an array of divt to add eventListener later
// loops through array of boxes (var box) JSON and renders boxes with image and text
for (var i = 0; i < products.length; i++) {
	document.getElementById("shop").innerHTML += 
		`<div class="gadgetBox" id="${i}">
		<img src="${products[i].image}">
		<p class="category">${products[i].category}</p>
		<p class="product">${products[i].name} ${products[i].model}</p>
		<p class="price">${products[i].price}</p>
		<div>&#9825;&#8644;&#128065;</div>
		</div>`;
	}

var box = document.getElementsByClassName("gadgetBox");

for (var i = 0; i < box.length; i++) {
	box[i].addEventListener("click", function(){addToCart(this.getAttribute("id"))}, false);
}

// this block of code adds items to the cart array and 
// calculates the total price of all itms currently inside the array
var cart = [];
var totalPrice = 0;
function addToCart(i) {
	products[i].inCart += 1;
	cart[i] = ([i, products[i].image, products[i].name, products[i].price, products[i].lager, products[i].inCart]);
	totalPrice = totalPrice + (cart[i][3] * cart[i][5]); //problem in calculation
	console.log(totalPrice);
	// closeCart();
}

// here starts the long shopping cart story:
document.getElementById("cartBtn").addEventListener("click", showCart, false);

function showCart() {
	var shoppingCart = document.getElementById("cart-content");
	if (cart.length == 0) {
		alert("Your cart is empty.");
	} else {
		shoppingCart.style.display = "flex";
		shoppingCart.innerHTML = "";
		
		for (var i = 0; i < cart.length; i++) {
			if (cart[i] == undefined) {
				continue //check if one slot is empty, if yes it moves on without breaking
			} else {
				shoppingCart.innerHTML += 
					`<div class="cartBox" id="cartBox${i}">
						<img src="${cart[i][1]}">
						<p>${cart[i][2]}</p>
						<p>Price: ${cart[i][3]} EUR</p>
						<p id="item${i}">Items: ${cart[i][5]}</p>
						<button id="rmv${i}" class="rmvButton">remove</button>
					</div>`;	
			}
		}
	}
	shoppingCart.innerHTML += `<div id="totalPrice">Total: <b>${totalPrice} EUR</b></div>`;
	shoppingCart.innerHTML += `<button id="closeButton">CLOSE</button>`;
	document.getElementById("closeButton").addEventListener("click", closeCart, false);
	
	var remove = document.getElementsByClassName("rmvButton");
	console.log(remove);
	for (var i = 0; i < remove.length; i++) {
		remove[i].addEventListener("click", function(){removeFromCart(this.getAttribute("id"))}, false);
	}	
}


// this function will close the shopping cart (pink div)
function closeCart() {
	document.getElementById("cart-content").style.display = "none";
}



function removeFromCart(id) {
	var id = id[3];
	cart[id][5] -= 1;
	document.getElementById(`item${id}`).innerHTML = `Items: ${cart[id][5]}`;
	if (cart[id][5] == 0) {
		document.getElementById(`cartBox${id}`).style.display = "none";
	}
}



// 	var totalPrice = 0;
// 	for (var i = 0; i < cart.length; i++) {
// 		if (cart[i] == undefined) { continue 
// 		} else {
// 			totalPrice = totalPrice + (cart[i][3] * cart[i][5]);
// 		}
// }

	// var remove = document.getElementsByClassName("rmvButton");
	// for (var i = 0; i < remove.length; i++) {
	// 	remove[i].addEventListener("click", removeFromCart, false);
	// 	console.log(i);