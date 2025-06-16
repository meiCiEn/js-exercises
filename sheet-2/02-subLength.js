// Write a function subLength() that takes 2 parameters, a string and a single character. The function should search the string for the two occurrences of the character and return the length between them including the 2 characters. If there are less than 2 or more than 2 occurrences of the character the function should return 0.

const subLength = ( str, char ) =>
{
    let indexArray = [];
    let lengthBetweenCharacters = 0;
    for ( i = 0; i < str.length; i++ )
    {
        if ( str[ i ] === char )
        {
            indexArray.push( i );
        }
    }
    if ( indexArray.length === 2 )
    {
        lengthBetweenCharacters = ( indexArray[ 1 ] - indexArray[ 0 ] ) + 1;
        return lengthBetweenCharacters;
    } else
    {
        return 0;
    }
};

subLength( 'Saturday', 'a' ); // returns 6
subLength( 'summer', 'm' ); // returns 2
subLength( 'digitize', 'i' ); // returns 0
subLength( 'cheesecake', 'k' ); // returns 0