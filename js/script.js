var modal = document.querySelector(".modal");
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
