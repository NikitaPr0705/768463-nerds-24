var button = document.querySelector(".write-us-button");
var popup = document.querySelector(".modal-write-us");
var close = popup.querySelector(".modal-close");
var name = popup.querySelector("[name=name-value]");
var form = popup.querySelector(".modal-form");
var email = popup.querySelector("[name=email-value]");
var storage = localStorage.getItem("name");
var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("name")
} catch (err) {
  isStorageSupport = false;
}

button.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
  name.focus();
  if (storage) {
    name.value = storage;
    email.focus();
  } else {
    name.focus();
  }
});

close.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
  popup.classList.remove("modal-error");
});

form.addEventListener("submit", function(evt) {
  if (!login.value || !email.value) {
    evt.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("name", name.value);
    }
  }
});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("modal-show")) {
      popup.classList.remove("modal-show");
      popup.classList.remove("modal-error");
    }
  }
});
