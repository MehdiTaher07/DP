let arr=[],j=0,s=["h","e","l","l","o"];
    
    for(let i=s.length-1;i>=0;i--,j++){
        //arr.push(s[i]);
        arr[j]=s[i];
    }
    console.log(arr);
    //---
var reverseString = function(s) {
  // Loop through 1/2 of s
  s=s.split('');
    for (let i = 0; i < s.length / 2; i++) {
        // Save current val
        let temp = s[i];
        
        // Replace with end of array char
        s[i] = s[s.length - 1 - i];
        
        // Replace end of array letter with current val
        s[s.length - 1 - i] = temp;
    }
return s.join('');;
};
