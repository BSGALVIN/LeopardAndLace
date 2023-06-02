function changeFormula(e){
  e.stopPropagation();  
  var radio = document.getElementsByName('view');
  var image = document.getElementsByName('big-img')
  if (radio[1].checked){
    image.src = "https://i0.wp.com/www.leopardandlace.com.au/wp-content/uploads/2022/04/Pink-Brocade-Burlesque-Sweetheart-Corset-Ruffle-Trim.jpg?fit=300%2C300&amp;ssl=1";
    image.opacity = 1;
  }
  if (radio[2].checked){
    image.src = "https://www.leopardandlace.com.au/wp-content/uploads/2022/04/Pink-Brocade-Burlesque-Sweetheart-Corset-Ruffle-Trim_a-300x300.jpg";
    image.opacity = 1;
  }
  if (radio[3].checked){
    image.src = "formula_none.gif";
    image.opacity = 1;
  }
  else {
    image.src = "https://i0.wp.com/www.leopardandlace.com.au/wp-content/uploads/2022/04/Pink-Brocade-Burlesque-Sweetheart-Corset-Ruffle-Trim.jpg?fit=300%2C300&amp;ssl=1";
    image.opacity = 1;
  }

//make element with name="big-img" = a new image src based on what image is pressed
// the default it the one in the html code ==> only one instead of three is listed there

  if (radio[1].checked){
      formula.src = "formula_gdp.gif";
  }
  if (radio[2].checked){
      formula.src = "formula_pop.gif";
  }
  if (radio[3].checked){
      formula.src = "formula_none.gif";
  }
}



//added to cart popup
document.getElementById("addCartButton").addEventListener("click", function() {
  document.getElementById("addedToPopup").style.display = "block";
});

document.getElementById("closeButton").addEventListener("click", function() {
  document.getElementById("addedToPopup").style.display = "none";
});


// quantity
function increaseValue() {
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('number').value = value;
  }
  
  function decreaseValue() {
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    value < 1 ? value = 1 : '';
    value--;
    document.getElementById('number').value = value;
  }