function changeImage(){
    var radio = document.getElementsByName('view');
    var image = document.getElementsByName('big-img')
    if (radio[1].checked){
      image.src = "https://www.leopardandlace.com.au/wp-content/uploads/2022/03/Leopard-Splicing-Lingerie-Set-Adjustable-Neck-Collar-Garters.jpg";
      image.opacity = 1;
    }
    if (radio[2].checked){
      image.src = "https://www.leopardandlace.com.au/wp-content/uploads/2022/03/Leopard-Splicing-Lingerie-Set-Adjustable-Neck-Collar-Garters-B112-100x100.jpg";
      image.opacity = 1;
    }
    if (radio[3].checked){
      image.src = "https://www.leopardandlace.com.au/wp-content/uploads/2022/03/B112_C-100x100.jpg";
      image.opacity = 1;
    }
    else {
      image.src = "https://www.leopardandlace.com.au/wp-content/uploads/2022/03/Leopard-Splicing-Lingerie-Set-Adjustable-Neck-Collar-Garters.jpg";
      image.opacity = 1;
    }
  };