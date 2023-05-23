// note none of this is my code whoops ==> so i wouldn't necessarily be able to describe this yoikes
//we can figure that out later

 // Function to calculate and update the total price
function updateTotal() {
    const totalCell = document.getElementById('cart-total');
    const rows = document.querySelectorAll('#cart-table tbody tr');

    let total = 0;
    rows.forEach(row => {
      const price = parseFloat(row.cells[1].innerText.substring(1));
      const quantity = parseInt(row.cells[2].innerText);
      total += price * quantity;
    });

    totalCell.innerText = '$' + total.toFixed(2);
}

// Function to handle the remove button click event
function removeItem(e) {
  const row = e.target.closest('tr');
  row.remove();
  updateTotal();
}

 // Attach event listeners to the remove buttons
 const removeButtons = document.querySelectorAll('.remove-button');
 removeButtons.forEach(button => {
   button.addEventListener('click', removeItem);
 });

   // Event listener for the checkout button
   const checkoutButton = document.getElementById('checkout-button');
   checkoutButton.addEventListener('click', function() {
     // Add your checkout logic here
     alert('Checkout functionality is not implemented yet!');
   });

   
     // Event listener for the continue shopping button
     const continueShoppingButton = document.getElementById('continue-shopping-button');
     continueShoppingButton.addEventListener('click', function() {
       // Add your continue shopping logic here
       alert('Continue Shopping functionality is not implemented yet!');
     });