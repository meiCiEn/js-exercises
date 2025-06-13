// Write a function, convertToBaby(), that takes in an array as an argument and, using a loop, returns a new array with each string in the array prepended with 'baby '.

// DO NOT use the .map() method

// Write your code here:
const convertToBaby = ( arr ) =>
{
    let newArray = [];
    for ( let i = 0; i < arr.length; i++ )
    {
        let babyAnimal = `baby ${ arr[ i ] }`;
        newArray.push( babyAnimal );
    }
    return newArray;
};

// When you're ready to test your code, uncomment the below and run:

const animals = [ 'panda', 'turtle', 'giraffe', 'hippo', 'sloth', 'human' ];

console.log( convertToBaby( animals ) );
