var arrayMax = require('../arrayfun');

describe("arrayMax", function() {
  it("Retrieves the maximum value of an array", function() {
    
    var testArray = ([ 4 , 2 , 5, 22 ]);
    
    var result = arrayMax.maxx(testArray);

    expect(result).toEqual( 22 );

  });

  it("returns empty or falsey if the collection is empty");

    var testArray = ([ ]);
    
    var result = arrayMax.maxx(testArray);

    expect(result).toEqual(-Infinity);
});


//max( array )

// Arguments
// array (Array): The array to query.

// Description
// Retrieves the maximum value of a collection. If the collection is empty or falsey -Infinity is returned.
// Example

// max([4, 2, 8, 6]);
// → returns 8  ath.max.apply(null,x)