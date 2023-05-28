
// idk how to make this work tbh

const items = [
    { name: 'Purple Brocade', price: 47.00 },
    { name: 'Black Brocade', price: 47.00 },
    { name: 'Brown Brocade', price: 47.00 },
    { name: 'Pink Brocade', price: 47.00 },
    { name: 'Steampunk Brocade', price: 28.00 },
    { name: 'Blue Brocade', price: 28.00 },
    { name: 'Jade Green', price: 47.00 },
    { name: 'Lace Flowers Purple', price: 30.40 },
    { name: 'White Brocade', price: 47.00 },
    { name: 'Faux Leather Silver', price: 86.00 },
    { name: 'Purple Chain', price: 97.00 },
    { name: 'Red Satin', price: 46.00 }
  ];


const selectElement = document.getElementById('sort');

  selectElement.addEventListener('change', (event) => {
    const selectedValue = event.target.value;
    
 
  if (selectedValue === 'default') {
    // Handle default sorting behavior
    console.log('Default sorting');
  } else if (selectedValue === 'name') {
    // Sort by name
    const sortedItems = items.sort((a, b) => a.name.localeCompare(b.name));
    console.log('Sorted by name:', sortedItems);
  } else if (selectedValue === 'price') {
    // Sort by price
    const sortedItems = items.sort((a, b) => a.price - b.price);
    console.log('Sorted by price:', sortedItems);
  } else if (selectedValue === 'date') {
    // Handle sorting by date
    console.log('Sorting by date');
  }
});