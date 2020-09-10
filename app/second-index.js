// imports
import {students, totalStudents} from './students';
// import {add, multiply} from './calculator';
// import multiply, {add,divide} from './calculator';
import * as Calc from './calculator';

const points = [10, 20, 30];

let addOne = (e) => {
  return e + 1;
};

// points = points.map(addOne);

console.log(points.map(addOne));

const points2 = points.map(e => {
  return e + 2;
});
console.log(points2);

const points3 = points.map(e => e * 2);
console.log(points3);
let lengths = [3,7,5];
let multiple = 8;
const scale = lengths.map(l => l * multiple);
console.log(scale);

/* let isPassing = (grade) => {
  return grade >= 70;
}; */

const scores = [90,70, 55, 85, 67, 71];

// const passing = scores.filter(isPassing);
// console.log(passing);
const passable = scores.filter(g => g >=70);
console.log(passable, Array.isArray(passable));
// From students.js
console.log(students, totalStudents);
console.log(students.filter(n => n.length > 3));
//
let x = 3;
let y = 5;
console.log(Calc.add(x,y));
console.log(Calc.multiply(x,y));
console.log(Calc.divide(x,y));


