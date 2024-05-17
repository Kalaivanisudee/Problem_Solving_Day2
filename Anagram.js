
// What is anagram?
// An Anagram of a string is another string that contains the same characters, only the order of characters can be different.
//
let string1="listen";
let string2="silent";
function isAnagram(string1,string2){
    let myObj={}
    for(let i=0;i<string1.length;i++){
        if(string1[i] >= "a" && string1[i] <= "z"){//Check the character a to Z.It avoiding numbers and special character.
            if(myObj[string1[i]]){
                myObj[string1[i]] +=1
            }else {
                myObj[string1[i]]=1;
            }

        }else {
            return false;
        }

    }
    for(let i=0;i<string2.length;i++){
        if(string2[i] >= "a" && string2[i] <= "z"){
            if(myObj[string2[i]]){
                myObj[string2[i]] -=1
                if(myObj[string2[i]]==0){
                    delete myObj[string2[i]]
                }
            }else{
                return false;
            }
            

        }

    }
    console.log(myObj);
 return Object.keys(myObj).length==0;
}
console.log(isAnagram(string1,string2))



