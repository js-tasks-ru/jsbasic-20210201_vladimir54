/**
 * Factorial
 * @param {number} n
 * @returns {number}
 */
function factorial(n) {
        f=1;
        if(n == 0) {return 1;}
        else{
            while(n>0){
            f=f*n;
            n--;
            }
            return f;
        };
}
