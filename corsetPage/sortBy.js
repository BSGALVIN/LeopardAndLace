const selectElement = document.getElementById('sort');

  selectElement.addEventListener('change', (event) => {
    const selectedValue = event.target.value;
    
    // Perform sorting based on the selected value
    if (selectedValue === 'default') {
      // Handle default sorting behavior
    } else if (selectedValue === 'name') {
      // Handle sorting by name
    } else if (selectedValue === 'price') {
      // Handle sorting by price
    } else if (selectedValue === 'date') {
      // Handle sorting by date
    }
    
    // Call a function or perform any other actions based on the selected value
    console.log('Selected value:', selectedValue);
  });