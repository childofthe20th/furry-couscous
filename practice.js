// Practice Code and Exercises from Eloquent Javascript

const power = (base, exponent) => {
  let result = 1;
  for (i = 0; i < exponent; i++) {
    result *= base;
  }
  return result;
};

console.log(power(2, 10));

// next
console.log("***next example");

let x = 10;
if (true) {
  let y = 20;
  var z = 30;
  console.log(x + y + z);
}

// let is visible only inside function
// var is global inside and outside function

console.log(x + z);

// Ask Ro why this works
const halve = n => {
  return n / 2;
};

let n = 10;

console.log(halve(100));
console.log(n);

// next
console.log("***next example");

// This function is called a function declaration and does not need to be ordered top to bottom
console.log("The future says:", future());

function future() {
  return "You'll never have flying cars";
}

// next
console.log("***next example");

// Call Stack
function greet(who) {
  console.log("Hello " + who);
}

greet("Harry");
console.log("Bye");

// next
console.log("***next example");

// Exponent function

function powerOf(base, exponent = 2) {
  let result = 1;
  for (let count = 0; count < exponent; count++) {
    result *= base;
  }
  return result;
}

console.log(powerOf(4));
// → 16
console.log(powerOf(2, 6));
// → 64

// next
console.log("***next example");

// Ask Ro about this
function multiplier(factor) {
  return number => number * factor; //this is a short-form function within a function without parenthesis wrapped param?
}

let twice = multiplier(2);
console.log(twice(5)); //calls twice as a function??
// → 10

// next
console.log("***next example");

//the number 13 could be reached by first multiplying by 3 and then adding 5 twice, whereas the number 15 cannot be reached at all.
function findSolution(target) {
  function find(current, history) {
    //does the actual recursing
    if (current == target) {
      //if it finds a solution
      return history; //it returns a string that shows how to get to the target
    } else if (current > target) {
      return null; //if no solution is found, it returns null
    } else {
      //if we are still below the target number
      return (
        find(current + 5, `(${history} + 5)`) ||
        find(current * 3, `(${history} * 3)`)
      ); //the function tries both possible paths that start from the current number by calling itself twice, addition and multiplication
    }
  }
  return find(1, "1");
}

console.log(findSolution(24));

// next
console.log("***next example");

function printFarmInventory(cows, chickens) {
  let cowString = String(cows);
  while (cowString.length < 3) {
    cowString = "0" + cowString;
  }
  console.log(`${cowString} Cows`);
  let chickenString = String(chickens);
  while (chickenString.length < 3) {
    chickenString = "0" + chickenString;
  }
  console.log(`${chickenString} Chickens`);
}
printFarmInventory(7, 11);

console.log("a better way!");

function printZeroPaddedWithLabel(number, label) {
  let numberString = String(number);
  while (numberString.length < 3) {
    numberString = "0" + numberString;
  }
  console.log(`${numberString} ${label}`);
}

function printFarmInventory2(cows, chickens, pigs) {
  printZeroPaddedWithLabel(cows, "Cows");
  printZeroPaddedWithLabel(chickens, "Chickens");
  printZeroPaddedWithLabel(pigs, "Pigs");
}

printFarmInventory2(7, 11, 3);

console.log("a third way!");

function zeroPad(number, width) {
  let string = String(number);
  while (string.length < width) {
    string = "0" + string;
  }
  return string;
}

function printFarmInventory3(cows, chickens, pigs) {
  console.log(`${zeroPad(cows, 3)} Cows`);
  console.log(`${zeroPad(chickens, 3)} Chickens`);
  console.log(`${zeroPad(pigs, 3)} Pigs`);
}

printFarmInventory3(7, 16, 3);

//Function Exercises

//write a function min that takes two arguments and returns their minimum
function min(num1, num2) {
  return Math.min(num1, num2);
}

console.log(min(0, -10));

//write a function that checks if a number is even
function isEven(number) {
  if (number % 2 == 0) {
    return true;
  } else {
    return false;
  }
}

console.log(isEven(50));

//write a function that behaves like a bean counter that takes 2 arguments that indicates the number of characters in the second argument. eg Count the number of B's
function countChar(str, letter) {
  var letterCount = 0;
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) == letter) {
      letterCount += 1;
    }
  }
  return letterCount;
}

function countBs(string) {
  var bCount = 0;
  var letterB = "B";
  for (let i = 0; i < string.length; i++) {
    if (string.charAt(i) == letterB) {
      bCount += 1;
    }
  }
  return bCount;
}

console.log(countChar("kakkerlak", "k"));
console.log(countBs("BBC"));
