var arrayUnique = require('../arrayfun');

describe("arrayUnique", function(){

  it("Creates a duplicate-value-free version of an array using strict equality for comparisons", function(){
      
    var array = [1, 1, 2, 2, 3, 4, 5, 5, 5, 7, 8];
    
    var result = arrayUnique.unique(array);
    
    expect(result).toEqual([1,2,3,4,5,7,8]);
    
  });

});

/*

uniq( array )

Arguments
array (Array): The arrays to query.

Description
Creates a duplicate-value-free version of an array using strict equality for comparisons.
Example

uniq([1, 2, 1, 3, 1]);
// → [1, 2, 3]

uniq([1, 1, 2, 2, 3, 4, 5, 5, 5, 7, 8]);
// → [1, 2, 3, 4, 5, 7, 8]

*/