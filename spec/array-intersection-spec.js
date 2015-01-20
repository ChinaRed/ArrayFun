var arrayInter = require('../arrayfun');

describe("arrayInter", function(){

  it("Creates an array of unique values present in all provided arrays using strict equality for comparisons", function(){
      
    var a1 = [0,27,4,1,8,88];
    var a2 = [1,3,5,2,9,27,88];
    
    var result = arrayInter.intersect(a1,a2);
    //var result = arrayInter.intersect( a1 , a2 );
    
    expect(result).toEqual([ 27 , 1 , 88 ]);
    console.log(result);
  });
}); 