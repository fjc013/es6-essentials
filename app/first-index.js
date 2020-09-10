console.log("Hello, from webpack");
console.log("hello from the browser");

function print(a,b,c){
  console.log(a,b,c);
}
const print2 = function(a,b,c) {
  console.log(`print2 ${a} ${b} ${c}`);
};
const print3 = (a,b,c) => {
  console.log(`print3 ${a} ${b} ${c}`);
};
// Spread Operator as parameters
const print4 = (...z) => {
  console.log(`print4 ${z}`);
};

{
  let a = 'goodbye';
  console.log(`block scope a is ${a}`);
};
{
  const arr1 = [1,2,3];
  arr1.push(4);
  const arr2 = [...arr1, 5, 6, 7];
  const arr3 = [...arr1, ...arr2, 8,9,10];
  console.log(arr3);
}
const arr4 = [1,2,3];
print(...arr4);
print2(...arr4);
print3(...arr4);

print4(1,2,3,4,5,6,7);

//destructuring arrays
let c = [100,200];
let [a,b] = c;
console.log(a, b);

let fellowship = ["frodo", "gandalf","aragorn"];
let [hobbit, wizard, ranger] = fellowship;
console.log(hobbit, wizard, ranger);
print4(hobbit, wizard, ranger);

//destructuring objects
const WIZARD = {magical: true, power: 10};
let {magical, power} = WIZARD;
console.log(magical, power);
