  function burger() {
    var btn = this
    requestAnimationFrame(function() {
      btn.setAttribute("aria-pressed", "false" === btn.getAttribute("aria-pressed"));
    });
  }
  
  var burgerButton = document.getElementById("burger");
  if (burgerButton) {
    burgerButton.addEventListener("click", burger, false);
  }