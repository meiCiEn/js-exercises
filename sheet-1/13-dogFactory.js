// Write a function, dogFactory(). It should:

// - have 3 parameters: name, breed, and weight (in that order)
// - expect name and breed to be strings
// - expect weight to be a number
// - return an object
// - have each of those parameters as keys on the returned object returned with the values of the arguments that were passed in

// Add getters and setters for each of the three properties and change the property names to have an underscore prepended.

// Add two methods to your object: .bark() which returns ‘ruff! ruff!’ and .eatTooManyTreats() which should increment the weight property by 1.

// Write your code here:
const dogFactory = ( name, breed, weight ) =>
{
    return {
        _name: name,
        _breed: breed,
        _weight: weight,
        get name ()
        {
            return this._name;
        },
        get breed ()
        {
            return this._breed;
        },
        get weight ()
        {
            return this._weight;
        },
        set name ( newName )
        {
            if ( typeof newName === 'string' )
            {
                this._name = newName;
            };
        },
        set breed ( newBreed )
        {
            if ( typeof newBreed === 'string' )
            {
                this._breed = newBreed;
            }
        },
        set weight ( newWeight )
        {
            if ( typeof newWeight === 'number' )
            {
                this._weight = newWeight;
            }
        },
        bark ()
        {
            return `ruff! ruff!`;
        },
        eatTooManyTreats ()
        {
            return this._weight++;
        }
    };
};

