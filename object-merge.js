/*
    A js function to mimic the jquery $.extend.
    Merge two or more objects with infinite depth.
    
    @return - the object containing the merged data of all objects passed in.
    
*/
var objMerge = function (){
    var destination = {};
    var a = 0;
    var args = arguments;
    var argsLen = arguments.length;
    if(argsLen < 2) return false;
    
    for(;a < argsLen; a++){
        var source = args[a];
        if(typeof source === "undefined") return false;
        for(k in source){
            if(source.hasOwnProperty(k)){
                if(typeof source[k] !== 'object'){
                    destination[k] = source[k];
                } else {
                    destination[k] = objMerge(source[k], destination[k]||{});
                }
            }
        }
     
    }
    return destination;
};



