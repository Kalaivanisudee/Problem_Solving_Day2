let string1="listen";
let string2="silent";
console.log(string1.charCodeAt(0));//108 //L ASCII
console.log(string2.charCodeAt(0));//115 //L ASCII
let arr=Array.from({length:256},()=>0);
// console.log(...arr); // 256 index filled with value 0
if(string1.length != string2.length) return false;
for(let i=0; i<string1.length;i++){
    arr[string1.charCodeAt(i)]++;
    arr[string2.charCodeAt(i)]--;
}
let filterArray=arr.filter((value)=>value !=0).length==0;
console.log(filterArray);//true

