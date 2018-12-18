var writeUs = document.querySelector(".modal-write-us");
var writeUsBnt = document.querySelector(".to-write-us-btn");
var close = writeUs.querySelector(".modal-close");
var username = writeUs.querySelector("[name=name]");

writeUsBnt.addEventListener("click", function(evt){
	evt.preventDefault();
	writeUs.classList.add("modal-show");
	username.focus();
});
close.addEventListener("click", function(evt){
	evt.preventDefault();
	writeUs.classList.remove("modal-show");
});

var mapModal = document.querySelector(".modal-map");
var mapBtn = document.querySelector(".map-btn");
var closeMap = mapModal.querySelector(".modal-close");

mapBtn.addEventListener("click", function(evt){
	evt.preventDefault();
	mapModal.classList.add("modal-show");
});
closeMap.addEventListener("click", function(evt){
	evt.preventDefault();
	mapModal.classList.remove("modal-show");
});

var cartNumber = document.querySelector(".cart-number");
var favoritesNumber = document.querySelector(".favorites-number");

var cartCounter = 0;
var favoritesCounter = 0;

var cartBtn = document.querySelector(".cart-btn");
var favoritesBtn = document.querySelector(".favorites-btn");

var buyItemBtns = document.querySelectorAll(".buy-item-btn");
var cartItemBtn = document.querySelector(".cart-item-btn");

var modalCart = document.querySelector(".modal-cart");
var cartClose = modalCart.querySelector(".modal-close");

for (var i = 0; i < buyItemBtns.length; i++) {	
	var buyItemBtn = buyItemBtns[i];	
	buyItemBtn.addEventListener("click", function(evt){
		modalCart.classList.add("modal-show");
		cartCounter ++;
		if (cartCounter > 0) {
		cartBtn.classList.add("added");
		cartNumber.innerHTML = cartCounter;
		}
	});
	cartClose.addEventListener("click", function(evt){
	evt.preventDefault();
	modalCart.classList.remove("modal-show");
});
}



if (favoritesCounter > 0) {
	favoritesBtn.classList.add("added");
	favoritesNumber.innerHTML = favoritesCounter;
}

