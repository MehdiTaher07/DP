let z=[... new Array(14)].map((e,i)=>i+1).reduce((a,c)=>a+=c+'');
z.charAt(0);//1
z.charCodeAt(0);//49

let values=[1,8,5];
let newValues=values.map((value)=>value+2);
console.log(values)// [1, 8, 5]
console.log(newValues)//[3, 10, 7]
//[1,8,5].map((v,i)=>v+i)//[1, 9, 7]
