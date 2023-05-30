        // Get the radio buttons and image container
        const radioButtons = document.querySelectorAll('input[type="radio"][name="image"]');
        const imageContainer = document.getElementById('image-container');

        // Add event listener to each radio button
        radioButtons.forEach(radioButton => {
            radioButton.addEventListener('change', function() {
                // Get the selected value
                const selectedValue = this.value;

                // Update the image source
                const image = imageContainer.querySelector('img');
                image.src = selectedValue;
            });
        });

//image switch
//god help me

$(document).ready(function() {
 
  $('.color-choose input').on('click', function() {
      var image = $(this).attr('data-image');
 
      $('.active').removeClass('active');
      $('.left-column img[data-image = ' + image + ']').addClass('active');
      $(this).addClass('active');
  });
 
});

function change_image() {
  var image = document.getElementById()
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