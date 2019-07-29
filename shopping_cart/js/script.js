
// loops through array in JSON and renders boxes with image and text
for (var i = 0; i < products.length; i++) {
	document.getElementById("shop").innerHTML += `<div class="gadgetBox" id="${i}">
	<img src="${products[i].image}"><p class="category">${products[i].category}</p>
	<p class="product">${products[i].name} ${products[i].model}</p><p class="price">${products[i].price}</p>
	<div>&#9825;&#8644;&#128065;</div></div>`;
	}

var box = document.getElementsByClassName("gadgetBox");

// loops through array of boxes (var box) JSON and renders boxes with image and text
for (var i = 0; i < box.length; i++) {
	box[i].addEventListener("click", function(){addToCart(this.getAttribute("id"))}, false);
}

// function addToCart() should do:
// - take an element and add it to an array (var shoppingCart)
// - should use the operator += (to add quantity of product)
// - may be add input fields inside the cart to take values from
var cart = [];
function addToCart(i) {
	cart.push([i, products[i].name, products[i].price]);
	console.log(cart, typeof cart);
}

document.getElementById("cartBtn").addEventListener("click", showCart, false);

function showCart() {
	console.log(cart);
	document.getElementById("cart-content").style.display = "initial";
	// document.getElementById("cart-content").innerHTML = "Hello from cart box";
}



// if (i==2) {
// 		document.getElementById("shop").innerHTML += `<div id="test"></div>`;
// 			}
// // function that is performed, when user clicks on one of the 9 small boxes
// // upon rendering, functions gets data from JSON file upon array name and key
// 		function expand(id) {
// 			// var loc = locator.attributes.getNamedItem("carid").value;
// 			// 	console.log(locator.attributes)
// 			// 	console.log(loc, typeof loc);
// 			// 	console.log(cars[loc].carPrice);
// 			document.getElementById("test").innerHTML = `<img id="test-img" src="` + cars[id].carImage + `" alt=""><div id="test-text"><div id="cross">&#9938;</div><h2>` + cars[id].carName + " " + cars[id].carModel + "</h2><p>" + cars[id].carMakeYear + "</p><p>" + cars[id].carColor + "</p><h2>Price:<br>" + cars[id].carPrice + "</h2></div>";

// // feature to "focus" on big div when it is opened (scrolls window to the targeted id)
// 			window.location.hash = '#test';

// // function that closes the big div if clicked on cross in right up corner
// 			function close() {
// 				document.location.reload(true);
// 			// document.getElementById("test").style.display = "none"; 
// 			// will hide the element from the screen, but works only once 
// 			// and does not allow to call big div again
// 			}

// 			document.getElementById("cross").addEventListener("click", close, false);
// 		}

			
			
			
// 			// 	document.getElementById("test").style.display = "flex";
