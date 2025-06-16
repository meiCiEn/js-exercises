// Write function below
const groceries = (arr) => {
  // Extract just the item names into a new array
  const itemNames = arr.map(obj => obj.item);

  // Handle edge cases for empty or single-item arrays
  if (itemNames.length === 0) {
    return '';
  } else if (itemNames.length === 1) {
    return itemNames[0];
  }

  // For two or more items:
  // Get all items except the last one and join them with a comma and space
  const allButLast = itemNames.slice(0, -1).join(', ');
  // Get the last item
  const lastItem = itemNames[itemNames.length - 1];

  // Combine them with " and " for the final formatted string
  const result = `${allButLast} and ${lastItem}`;
  
  console.log(result); // For testing purposes, as per your original code
  return result;
};

// Test cases (unchanged from your examples)
groceries( [{item: 'Carrots'}, {item: 'Hummus'}, {item: 'Pesto'}, {item: 'Rigatoni'}] );
groceries([{item: 'Lettuce'}, {item: 'Onions'}, {item: 'Tomatoes'}])
groceries([{item: 'Ice Cream'}])
