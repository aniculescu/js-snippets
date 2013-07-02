/*
    A js function to mimic the jquery $.extend.
    Merge two objects with infinite depth.
    
    @param source - the source object
    @param destination - the object to merge source into
    
    TODO: a more elegant(useful) next step is to keep the destination object within the function
    and allow 2 or more objects to be passed in for merging; then return the resulting object.
    
*/
var objMerge = function (source, destination){
   for(k in source){
      if(source.hasOwnProperty(k)){
        if(typeof source[k] !== 'object'){
            destination[k]=source[k];
        } else {
            objMerge(source[k], destination[k]||{});
        }
      }
   }
}
