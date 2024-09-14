/* ----------------- data type conversion -------------------*/

//---------- Numbers to strings

// let a = "3.14"
// console.log(a);
// console.log(Number(a));

//----- conver empty in double inverted commas
// let b = ""

// console.log(Number(b))

// unary operator use
let a1 = "5"
let ab = + a1;
// console.log(ab);
// console.log(typeof(a1));      //show string 
// console.log(typeof(ab));        //show number

// converting numbers to strings

let numberFirst = 123456;
let number2 = 12.95
// console.log(numberFirst);
// console.log(String(numberFirst));  //convert number to string


// converting dates to numbers

let d  = new Date()
// console.log(d);
// let d2 = d.getTime()
let d3 = d.getDay(d);
console.log("Get day is:" + d3);

// converting dates to strings

const date = new Date();

const day = String(date.getDate()).padStart(2, '0'); // Add leading zero if needed
const month = String(date.getMonth() + 1).padStart(2, '0'); // January is 0, so add 1
const year = date.getFullYear();

const formattedDate = `${day}/${month}/${year}`;

console.log(formattedDate);

