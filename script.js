let popup = document.querySelectorAll(".popup");
let close = document.querySelector(".output__close");
let show = document.querySelector(".output.output--hide");

document.addEventListener("DOMContentLoaded", function () {
  let popupLength = popup.length;
  for (let i = 0; i < popupLength; i++) {
    popup[i].addEventListener("click", function () {
      let outputText = this.getAttribute("data-message");
      let outputMessage = document.querySelector(".output__message");
      outputMessage.innerText = outputText;
      show.classList.remove("output--hide");
    });
  }
  close.addEventListener("click", function () {
    show.classList.add("output--hide");
  });
});
