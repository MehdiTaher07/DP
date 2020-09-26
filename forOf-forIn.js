let person = {
  name: "John",
  age: 22,
  occupation: "Accountant"
}
let text;
for (let prop in person) {
  text += person[prop] + " ";
}
console.log(text);//"John 22 Accountant "

let s=0;
let numbers=[0,2,4,6,8];
for(number in numbers)
{
   s+=numbers[number];
}
console.log(s);

sum=0;
for(number of numbers)
{
   sum+=number;
}
console.log(sum);
