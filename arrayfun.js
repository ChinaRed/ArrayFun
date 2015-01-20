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

  },

  intersect : function ( a1, a2 ) { 

    var interArray = [];
    var arrayA = 0;
    var arrayB = 0;  
  
    for (var i = 0; i < a1.length; i++){
      arrayA = a1[i];
           
      for (var j = 0; j < a2.length; j++){
        arrayB = a2[j];
              
        if (arrayA === arrayB){
          interArray.push(arrayA); 
        }     
      }
    }
    return (interArray);
  },
 
  difference : function (a, b) {

    var arr = []; 
    var diffArray=[];
    for(var i = 0;i < a.length;i++)
      arr[a[i]] = true;
  
    for(var j = 0;j < b.length;j++){
      if(arr[b[j]]) delete arr[b[j]];
    else arr[b[j]] = true;
    }
 
    for(var k in arr)
      diffArray.push(Number(k));
    return(diffArray);
}
  


};  //end of module exports