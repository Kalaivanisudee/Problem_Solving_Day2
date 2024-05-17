let num=78346;

function sumOfDigit(num){
    let sum=0;
while(num>0){
    let reminder= num % 10;
     num=Math.floor(num/10);
    sum=sum+reminder;
}
return sum;
}
console.log(sumOfDigit(num))


