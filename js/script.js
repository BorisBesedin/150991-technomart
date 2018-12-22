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


var serviceBtns = document.querySelectorAll(".services-slider-btn");
var slides = document.querySelectorAll(".service-slide");
function showSlide(n){
	for (var i = 0; i < slides.length; i++) {
		var slide = slides[n-1];
		slides[i].classList.remove("showing");
		slide.classList.add("showing");
		for (var j = 0; j < serviceBtns.length; j++){
		var serviceBtn = serviceBtns[n-1];
		serviceBtns[i].classList.remove("active");
		serviceBtn.classList.add("active");
		}
	}
	
}






