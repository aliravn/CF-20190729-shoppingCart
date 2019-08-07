// shop page is rendered here
// loops through array in JSON and renders boxes with image and text
// create an array of divt to add eventListener later
// loops through array of boxes (var box) JSON and renders boxes with image and text
for (var i = 0; i < products.length; i++) {
	document.getElementById("shop").innerHTML += 
		`<div class="gadgetBox">
		<img src="${products[i].image}">
		<p class="category">${products[i].category}</p>
		<p class="product">${products[i].name} ${products[i].model}</p>
		<p class="price">${products[i].price} EUR</p>
		<button id="${i}" class="add">Add to Cart</button>
		<div>&#9825;&#8644;&#128065;</div>
		</div>`;
	}

var box = document.getElementsByClassName("add");

for (var i = 0; i < box.length; i++) {
	box[i].addEventListener("click", function(){addToCart(this.getAttribute("id"))}, false);
}

// this block of code creates an array of number of products added to the cart 
var cart = [];
function addToCart(i) {
	if (cart[i] == undefined) {
		cart[i] = 0;
	}
	cart[i] += 1; // 
	closeCart();
}

// calculates the total price of all items inside the cart array - triggered by showCart and removeFromCart functions
function calcTotalPrice() {
	var totalPrice = 0;
	for (i = 0; i < cart.length; i++) {
		if (cart[i] == undefined) {
			continue //check if one slot is empty, if yes it moves on without breaking
		} else {
			totalPrice = totalPrice + cart[i] * products[i].price;
		}	
	}
	return totalPrice;
}

// here starts the long shopping cart story:
document.getElementById("cartBtn").addEventListener("click", showCart, false);

function showCart() {
	var shoppingCart = document.getElementById("cart-content");
	if (cart.length == 0 || calcTotalPrice() == 0) {
		alert("Your cart is empty.");
	} else {
		shoppingCart.style.display = "flex";
		shoppingCart.innerHTML = "";
		shoppingCart.innerHTML += `<span id="closeButton">&#10006;</span>`;
		document.getElementById("closeButton").addEventListener("click", closeCart, false);
		for (var i = 0; i < cart.length; i++) {
			if (cart[i] == undefined || cart[i] == 0) {
				continue //check if one slot is empty, if yes it moves on without breaking
			} else {
				shoppingCart.innerHTML += 
					`<div class="cartBox" id="cartBox${i}">
						<img src="${products[i].image}">
						<p>${products[i].name}</p>
						<p>Price: ${products[i].price} EUR</p>
						<p id="item${i}">Items: ${cart[i]}</p>
						<button id="rmv${i}" class="rmvButton"><i class="fas fa-trash-alt"></i></button>
					</div>`;	
			}
		}
	}
	shoppingCart.innerHTML += `<div id="totalPrice"></div>`;
	document.getElementById("totalPrice").innerHTML = `Total: <b>${calcTotalPrice()} EUR</b>`; 
	
	shoppingCart.innerHTML += `<button id="checkout">Checkout</button>`;

	var remove = document.getElementsByClassName("rmvButton");
	for (var i = 0; i < remove.length; i++) {
		remove[i].addEventListener("click", function(){removeFromCart(this.getAttribute("id"))}, false);
	}	
}

// this function will close the shopping cart (pink div)
function closeCart() {
	document.getElementById("cart-content").style.display = "none";
}

// this function will reduce number of items by 1, recalculate the price
// if number of items is zero, it will remove the item completely
// if total price is zero, it will hide the cart window completely
function removeFromCart(id) {
	var i = id[3];
	cart[i] -= 1;
	document.getElementById(`item${i}`).innerHTML = `Items: ${cart[i]}`;
	document.getElementById("totalPrice").innerHTML = `Total: <b>${calcTotalPrice()} EUR</b>`;
	if (cart[i] == 0) {
		document.getElementById(`cartBox${i}`).style.display = "none";
	}
	if (calcTotalPrice() == 0) {
		document.getElementById("cart-content").style.display = "none";
	};
}
