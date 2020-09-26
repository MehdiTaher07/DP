//Method 1
let sorted=['20','120','111','215','54','78'].sort(function(a, b) { return b - a; });
console.log(sorted[0],sorted[1]);//215 120
//Method 2
var arr = [20, 120, 111, 215, 54, 78]; // use int arrays
let largest1=  Math.max(...arr); // get the max of the array
arr.splice(arr.indexOf(largest1), 1); // remove max from the array
let largest2=  Math.max(...arr); // get the max of the array
