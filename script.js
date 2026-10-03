const themeBtn = document.getElementById("theme-btn");

themeBtn.addEventListener("click", function () {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    themeBtn.textContent = "الوضع النهاري";
  } else {
    themeBtn.textContent = "الوضع الليلي";
  }
});
