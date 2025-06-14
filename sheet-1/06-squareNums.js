// Write a function, squareNums(), that takes in an array of numbers and, using .map(), returns an array with the square of each of the elements of that array.

const numbers = [ 2, 7, 9, 171, 52, 33, 14 ];

const toSquare = num => num * num;

// Write your code here:
function squareNums ( arr )
{
    let squaredArray = arr.map( number => { return toSquare( number ); } );

    return squaredArray;
}


console.log( squareNums( numbers ) ); // Output: [1, 4, 9, 16, 25]