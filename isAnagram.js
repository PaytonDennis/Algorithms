// Valid Anagram


//o(n)
 function isAnagram(s, t) {
     newString= s.split("").sort().join("")
     newString2= t.split("").sort().join("")
     if(newString == newString2){
        return true
     }
     return false
   }


   function isAnagram(s,t){
    string = s.split("").sort("").join("")
    string2 = t.split("").sort("").join("")
    if (string === string2){
        return true
    }
    return false
   }