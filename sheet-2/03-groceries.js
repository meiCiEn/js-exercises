// Write a function groceries() that takes an array of object literals of grocery items. The function should return a string with each item separated by a comma except the last two items should be separated by the word 'and'. Make sure spaces (' ') are inserted where they are appropriate.

const groceries = (arr) => {
  let items = [];
  for (const objLit of arr) {
    if (arr.indexOf(objLit) != arr.length-1 && arr.indexOf(objLit) != arr.length-2) {
      items.push(`${objLit.item},`);
    } else if (arr.indexOf(objLit) === arr.length-2) { 
      items.push(`${objLit.item}`)
    } else if (arr.indexOf(objLit) === arr.length-1 && arr.indexOf(objLit) != 0) {
      items.push(`and ${objLit.item}`);
    } else {
      items.push(`${objLit.item}`);
    }

  }
  let stringOfItems = items.join(' ');
  console.log(stringOfItems);
  return stringOfItems;
}

groceries( [{item: 'Carrots'}, {item: 'Hummus'}, {item: 'Pesto'}, {item: 'Rigatoni'}] );
groceries([{item: 'Lettuce'}, {item: 'Onions'}, {item: 'Tomatoes'}])
groceries([{item: 'Ice Cream'}])
// returns 'Carrots, Hummus, Pesto and Rigatoni'