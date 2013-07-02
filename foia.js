    /*  Find Object In Array  - FOIA
         @desc - a simple array method to find and return an object inside an array based on a given
                 property and value
         @param arr - the array to search
         @param property - the property to search for in the object 
         @param value - the value for the found property;
         @param arguments[3] - optional param that flags the return of the object's index in the array
         
         @return: default return is 1 or more objects where property and value match
            - additional return if arguments[3] exists, it will return the index of that object.
    */ 
    
    var foia = function(arr, property, value){
        if(typeof arr !=='object' && arr.length<1) return false;
        var results = [];
        for(var i=0, arrLen = arr.length;i < arrLen;i+=1){
            if(arr[i].hasOwnProperty(property) && arr[i][property] === value)
                if (typeof arguments[3]!=='undefined')
                    return i+1;
                else {
                    results.push(arr[i]);                    
                }
        }
        return results || false;
    }
