var button = document.querySelector(".write-us-button");
var popup = document.querySelector(".modal-write-us");
var close = popup.querySelector(".modal-close");


button.addEventListener("click", function(evt) {
  console.log("Клик по кнопке Напишите нам");
  evt.preventDefault();
  popup.classList.add("modal-show");
});

close.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
});
