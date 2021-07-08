console.log(frasesPeronistas()[1]);

miForm.addEventListener("submit", conseguirComando);

miForm.addEventListener("submit", function () {
  console.log(miComando);
});

miForm.addEventListener("submit", funComando);

setTimeout(() => {
  document.querySelector("#welcome").style.display = "block";
}, 750);
