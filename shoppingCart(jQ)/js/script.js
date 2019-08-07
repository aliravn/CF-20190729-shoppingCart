// renders products on the index.html page
for (var i = 0; i < products.length; i++) {
	$("#shop").append(`<div class="gadgetBox">
		<img src="${products[i].image}">
		<p class="product">${products[i].name}</p>
		<p class="price">${products[i].price} EUR</p>
		<button id="${i}" class="add">Add to Cart</button>
		</div>`)
}

var count = 0;

// adding items to cart array on click
var cart = [];	
$(".add").click(addToCart);
function addToCart() {
	var i = $(this).attr("id")
	if (cart[i] == undefined) {
		cart[i] = 0;
	}
	cart[i] += 1; //
	count += 1;
	$("#items").text(count);
	closeCart();
}

// calculates total price
function calcTotalPrice() {
	var totalPrice = 0;
	for (i = 0; i < cart.length; i++) {
		if (cart[i] == undefined) {
			continue //
		} else {
			totalPrice = totalPrice + cart[i] * products[i].price;
		}	
	}
	return totalPrice;
}

// show the cart content and calculates the price
$("#cartBtn").click(showCart);
function showCart() {
	var shoppingCart = $("#cart-content");
	if (cart.length == 0 || calcTotalPrice() == 0) {
		alert("Your cart is empty.");
	} else {
		$("#shoppingCart").css("display", "flex");
		shoppingCart.text("");
		for (var i = 0; i < cart.length; i++) {
			if (cart[i] == undefined || cart[i] == 0) {
				continue
			} else {
				shoppingCart.append(
					`<div class="cartBox" id="cartBox${i}">
						<img src="${products[i].image}">
						<span>${products[i].name} Price: ${products[i].price} EUR</span>
						<p id="item${i}">Items: ${cart[i]}</p>
						<button id="add${i}" class="addButton"><i class="fas fa-plus-square"></i></i></button>
						<button id="rmv${i}" class="rmvButton"><i class="fas fa-minus-square"></i></i></button>
						<button id="del${i}" class="delButton"><i class="fas fa-trash-alt"></i></button>
					</div>`);	
			}
		}	
	}
	$("#totalPrice").text(`Total price (netto): ${calcTotalPrice()} EUR`); 
	$("#closeButton").click(closeCart);

	$(".rmvButton").click(removeFromCart);

	$(".addButton").click(addinCart);

	$(".delButton").click(deleteItem);
}	

// remove the items from cart and close the cart if no items present
function removeFromCart() {
	var i = $(this).attr("id")[3];
	console.log(i);
	cart[i] -= 1;
	count= count-1;
	$("#items").text(count);
	console.log(i);
	$(`#item${i}`).text(`Items: ${cart[i]}`);
	$("#totalPrice").text(`Total price (netto): ${calcTotalPrice()} EUR`);
	if (cart[i] == 0) {
		$(`#cartBox${i}`).remove();
	}
	if (calcTotalPrice() == 0) {
		$("#shoppingCart").css("display", "none");
	}
}

function closeCart() {
	$("#shoppingCart").css("display", "none");
}

function addinCart(){
	var i = $(this).attr("id")[3];
	cart[i] += 1;
	count++;
	$("#items").text(count);
	$(`#item${i}`).text(`Items: ${cart[i]}`);
	$("#totalPrice").text(`Total price (netto): ${calcTotalPrice()} EUR`);
}

function deleteItem(){
	var i = $(this).attr("id")[3];
	count = count - cart[i];
	$("#items").text(count);
	cart[i] = 0;
	$(`#cartBox${i}`).remove();
	$("#totalPrice").text(`Total price (netto): ${calcTotalPrice()} EUR`);
	if (calcTotalPrice() == 0) {
		$("#shoppingCart").css("display", "none");
		}
}

function reduction (){

	if (totalPrice > 2000) {
	 return totalPrice = (totalPrice * 0.88) * 1.22;
	}
	else if (totalPrice > 1000) {
		return totalPrice = (totalPrice * 0.93) * 1.22;
	}
	else {
		return totalPrice = totalPrice * 1.22;
	}
}
