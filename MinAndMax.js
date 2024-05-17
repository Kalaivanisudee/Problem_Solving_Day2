//Find minimum and maximum element in the array

let myArray=[5,1,4,2,3];
let myArray1=[5,1,-4,-2,3,6];
function minAndMax(myArray){
    let min=myArray[0];
let max=myArray[0];
for(let i=0;i<myArray.length;i++){
    if(myArray.length==0){
        return;
    }
    if(myArray[i]<min){
        min=myArray[i];
    }
    if(myArray[i]>max){
        max=myArray[i];
    }
}
return {
    min , max
}
}
console.log(minAndMax(myArray))//{ min: 1, max: 5 }
console.log(minAndMax(myArray1))//{ min: -4, max: 6 }