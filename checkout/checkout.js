function showPopup() {
    var popup = document.getElementById("popup");
    popup.classList.add("show-popup");
  
    setTimeout(function() {
      popup.classList.remove("show-popup");
    }, 3000);
  }