// SELETORES
const INPUT_TEXT = document.querySelector("#input-text");
const INPUT_CHECKBOX = document.querySelector("#input-checkbox");
const HREF_LINK = document.querySelector("#href");

function href_none(event) {
  event.preventDefault();
}

function checkbox_none(event) {
  event.preventDefault();
}

function inputText_none(event) {
  if (event.key !== 'a') {
    event.preventDefault();
  }
}

HREF_LINK.addEventListener('click', href_none);
INPUT_CHECKBOX.addEventListener('click', checkbox_none);
INPUT_TEXT.addEventListener('keypress', inputText_none);