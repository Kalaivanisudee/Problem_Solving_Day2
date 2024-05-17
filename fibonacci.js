// What is fibonacci?
/*Recursive Approach
* 0 1 1 2 3 5 8 11 ....
*F(n)=F(n-1)+F(n-2)
F(0)=0
F(1)=1
F(2)=F(2-1)+F(2-2)=1
F(3)=F(3-1)+F(3-2)=F(2)+F(1)==>1+1=2
F(4)=F(4-1)+F(4-2)=F(3)+F(2)==>2+1=3
F(5)=F(5-1)+F(5-2)=F(4)+F(3)==>3+2=5

Iterative approach
In order to get the next value in the sequence, we have to add last two element in the sequence.
*/
function fibonacci(n){
if(n==0)return 0;
if(n==1)return 1;
let previous=0;
let current=1;
for(let i=2; i<=n;i++){
   current=previous+current;//0+1=>1//1+1=>2//1+2=>3//2+3=>5//3+5=>8//5+8=>13 current=13
   previous=current-previous;//1-0=>1//2-1=>1;//3-1=>2;//5-2=>3//8-3=>5//13-5=>8 previous=8
}
return current;
}
console.log(fibonacci(7))//5