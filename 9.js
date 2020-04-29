var isValid = function(s) {
    let foo = [];
    for(let item of s){
        if(item=='(' || item=="{" || item == "["){
            foo.push(item);
        }
        else{
            let bar = foo.pop()
            if(item==")"&bar!="("){return false;}
            if(item=="}"&bar!="{"){return false;}
            if(item=="]"&bar!="["){return false;}
            }
    }
    if(foo.length==0){return true;}
    else{return false;}
};
