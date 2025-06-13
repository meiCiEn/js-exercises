// Write a function, reverseArray(), that takes in an array as an argument and returns a new array with the elements in the reverse order.
// DO NOT use the .reverse() method!

// Write your code here:
const reverseArray = ( arr ) =>
{
    let newArray = [];
    for ( let i = arr.length - 1; i >= 0; i-- )
    {
        newArray.push( arr[ i ] );
    }
    return newArray;
};

// When you're ready to test your code, uncomment the below and run:

const sentence = [ 'sense.', 'make', 'all', 'will', 'This' ];

console.log( reverseArray( sentence ) );
// Should print ['This', 'will', 'all', 'make', 'sense.'];