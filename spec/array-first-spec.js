var arrayfun = require('../arrayfun.js');


describe("arrayfun", function(){

  it("function first() called by passing array without n parameter should return first element of the array", function(){
      
    var testArray = [1,2,3,4];

    var result = arrayfun.first(testArray);
    
    expect (result).toBe(1);
  });

  describe("arrayfun", function() {
    
    it("function first() called by passing array with n parameter should return first n elements into a new array", function() {
      
      var testArray = [1,2,3,4];

      var result1 = arrayfun.first(testArray,1);
      expect(result1).toEqual([1]);

      var result2 = arrayfun.first(testArray,3);
      expect(result2).toEqual([1,2,3]);

    });
  });
}); 

/*
  Arguments
array (Array): The array to query.
[n] (Number): 

describe("A suite", function() {
  it("contains spec with an expectation", function() {
    expect(true).toBe(true);
  });
});
*/