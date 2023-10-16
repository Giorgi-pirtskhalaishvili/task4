//TASK 1

const replacer = (string, valueToReplace, valueToReplaceWith) => {
  let replace = string.split(valueToReplace);
  let result = replace.join(valueToReplaceWith);
  return result;
};
let original =
  "this is old champion in football : Maradona which was replaced with MARADONA  ";

const oldValue = "MARADONA";
const newValue = "MESSI";

const result = replacer(original, oldValue, newValue);
console.log(result);

// TASK 2
const stringUpper = (str) => {
  let result = "";
  if (typeof str === "string") {
    result = str
      .split(" ")
      .map((el) => el.toUpperCase())
      .join(" ");
  }
  return result;
};

let loverStr = "you have to reassign this string in upper case";

console.log(stringUpper(loverStr));

//TASK 3

const users = [
  { name: "Lasha", age: 30 },
  { name: "Dato", age: 14 },
  { name: "Giga", age: 31 },
  { name: "James", age: 23 },
  { name: "Iasha", age: 45 },
];

const sortArr = (arr) => {
  let result;
  if (Array.isArray(arr)) {
    result = arr.sort((a, b) => a.age - b.age);
  }
  return result;
};

console.log(sortArr(users));
