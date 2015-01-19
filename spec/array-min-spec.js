var arrayMinn = require('../arrayfun');

describe("arrayMin", function() {
  it("Retrieves the minimum value of an array", function() {
    
    var testArray = ([ 4 , 2 , 5, 22 ]);
    
    var result = arrayMinn.minn(testArray);

    expect(result).toEqual(2);

  });

  it("returns empty or falsey if the collection is empty");

    var testArray = ([ ]);
    
    var result = arrayMinn.minn(testArray);

    expect(result).toEqual(Infinity);

});