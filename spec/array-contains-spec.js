var arrayContains = require('../arrayfun');

describe("arrayContains", function(){

  it("Checks if a given value is present in a collection using strict equality for comparisons", function(){
      
    var arrayA = [1, 1, 2, 2, 3, 4, 5, 5, 5, 7, 8];

    var n = 7;
        
    var result = arrayContains.contains(array,n);
    
    expect(result).toEqual([1,2,3,4,5,7,8]);
    
  });

});


/*

contains( array, target )

Arguments:
array (Array): The array to query.
target (*): The value to check for.

Description
Checks if a given value is present in a collection using strict equality for comparisons
Example

contains([1, 2, 3], 1);
// → true

contains([1, 2, 3], 44);
// → false

*/