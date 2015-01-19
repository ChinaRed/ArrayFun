module.exports = {
  
  first : function ( array,n ){

    if ( n > 0) {
      var newArray = [ ];
      for (var i = 0; i < n; i++){
        newArray.push(array[i]);
      } 

      return newArray;

    }else { 

      return array[0];
    
    }
  },
  
  maxx : function (testArray) {

    return Math.max.apply(null,testArray);
  },

  minn : function (testArray) {

    return Math.min.apply(null,testArray);

  }

  
};