var cartNumber = document.querySelector(".cart-number");
var favoritesNumber = document.querySelector(".favorites-number");

var cartCounter = 0;
var favoritesCounter = 0;

var cartBtn = document.querySelector(".cart-btn");
var favoritesBtn = document.querySelector(".favorites-btn");
var skip = document.querySelector(".go-on-btn");

var buyItemBtns = document.querySelectorAll(".buy-item-btn");
var cartItemBtns = document.querySelectorAll(".cart-item-btn");

var modalCart = document.querySelector(".modal-cart");
var cartClose = modalCart.querySelector(".modal-close");



for (var i = 0; i < buyItemBtns.length; i++) {	
	var buyItemBtn = buyItemBtns[i];	
	buyItemBtn.addEventListener("click", function(evt){
		evt.preventDefault();
		modalCart.classList.add("modal-show");
		cartCounter ++;
		cartBtn.classList.add("added");
		cartNumber.innerHTML = cartCounter;
	});	
}
for (var i = 0; i < cartItemBtns.length; i++) {	
	var cartItemBtn = cartItemBtns[i];	
	cartItemBtn.addEventListener("click", function(evt){
		evt.preventDefault();		
		favoritesCounter ++;
		favoritesBtn.classList.add("added");
		favoritesNumber.innerHTML = favoritesCounter;
	});	
}
cartClose.addEventListener("click", function(evt){
	evt.preventDefault();
	modalCart.classList.remove("modal-show");
});
skip.addEventListener("click", function(evt){
	evt.preventDefault();
	modalCart.classList.remove("modal-show");
});


