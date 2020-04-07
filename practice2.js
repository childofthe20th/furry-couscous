//Chapter Four: Objects and Arrays (Data Sets)

//Methods
let doh = "Doh";
console.log(typeof doh.toUpperCase);
console.log(doh.toUpperCase());

//push, pop, etc methods
let sequence = [1, 2, 3];
sequence.push(4);
sequence.push(5);
console.log(sequence);
sequence.pop();
console.log(sequence);

//Triangle Loop (2 ways)

var hash = "#";
while (hash.length <= 7) {
    console.log(hash);
    hash += "#";    
}

const triangle = num => {
    for (i = "#"; i.length <= num; i += "#") {
        console.log(i);      
    }
} 

triangle(10);