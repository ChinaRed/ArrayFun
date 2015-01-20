var arrayDiff = require('../arrayfun');

describe("arrayDiff", function(){

  it("Creates an array excluding all values of the provided arrays using strict equality for comparisons", function(){
      
    var a1 = [0,27,4,1,8,88];
    var a2 = [1,3,5,2,9,27,88];
    
    var result = arrayDiff.difference(a1,a2);
    
    expect(result).toEqual([ 0 , 2 , 3 , 4 , 5 , 8 , 9 ]);
    
  });
}); 

 
//a1[i]  