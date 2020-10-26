let popup = document.querySelectorAll(".popup");
console.log(popup);
document.addEventListener("DOMContentLoaded", function () {
  popup[1].innerText = "BUTTON";
  popup[1].addEventListener("click", function () {
    alert("You press a button");
  });
});
