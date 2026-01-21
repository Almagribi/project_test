const btn = document.getElementById("btn-action");

btn.addEventListener("click", function () {
  document.body.classList.toggle("dark");

  console.log(`Dark mode on!`);
});
