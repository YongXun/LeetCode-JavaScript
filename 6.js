var isPalindrome = function(x) {
    foo = x.toString().split('');
    bar = x.toString().split('').reverse();
    for(i=0;i<foo.length;i++){
        if(foo[i]!=bar[i]){
            return false;
        }
    }
    return true;
};
