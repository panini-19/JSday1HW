// Testing javascript link through web console
console.log('test')

// Multi-line Comment
/*
This is
a multiline
comment
*/

// Declaring a variable using var (the old way)
var firstName = 'chrisitan'
console.log(firstName)

// Reassigning values
firstName = 'dylan';
console.log(firstName);

// Use semicolons at the end of your JS code (Or not...)

// Use the typeof operator to see a data type
console.log(typeof firstName)

// numbers in js
var num1 = 5
var num2 = 5
var sum = num1 + num2
console.log(typeof num1)

// Arrays AKA Python Lists
// var students = ['daniel', 'alicia', 'jack']
// console.log(students)

// Objects AKA Python Dicts
var bio = {
    fullName: 'dylan katina',
    age: 99,
    location: 'USA'
}

console.log(bio)

// Hoisting
console.log(hoist)
var hoist = 'I am hoisted'
hoist = 'I am hoisted again'
console.log(hoist)  

/* 
- NOTE: Instead of using VAR to define variables, use LET and CONST (Modern Way)
- Not only because of var hoisting behaviors can be tricky, but so you don't
accidentally re-declare a variable that already exists.
- LET and CONST are also variable declarations using the ES6 Syntax but do allow
for re-declaration.

- LET vs CONST
- let: allows for reassignment of values (Just like Python)
- const: does NOT allow for reassignment of values 
*/

// let
let x = 5
console.log(x)
x = 3
console.log(x)

// const
const y = 10
console.log(y)


// ------------------------ Math Operations ----------------------------

// Addition
let add = 5+5


// Incrementing
add += 5

// Increment by 1
add++
console.log(add)

// Subtraction
let diff = 10 - 5
console.log(diff)

// Decrement by 1
diff--
console.log(diff)

// Decrementing
console.log(diff-=2)

// Multiplication
let prod = 5*5
console.log(prod)

prod *=2
console.log(prod)

// Division
let quo = 25/5
console.log(quo)

quo /= 2
console.log(quo)

// Exponents
let exp = 5**2
console.log(exp)

exp**=2
console.log(exp)

// ---------- Math is a built-in for javascript ---------------

// Math.floor()
console.log(Math.floor(15.67))

// Math.ceil()
console.log(Math.ceil(15.67))

// Watch out for these behaviors when adding number and strings
const dylan_num = 18;
const aakash_num = '23';
console.log(dylan_num + parseInt(aakash_num))

// -------------- Javascript Functions ----------------------
// Function Declaration, Function Expression, Arrow Function (ES6)
// NOTE: Indentation does NOT matter in JS, but its good practice.
// We use curly braces to keep track of scope instead.

// Function Declaration
// Very similar to Python
function fullName(firstName, lastName){
    return `${firstName} ${lastName}`
}
console.log(fullName('Heather', 'Smallwood'))

// Arrow Function (ES6)
const goatPlayer = (playerName) => {
    return `The Goat will always be ${playerName}`
}

console.log(goatPlayer('Michael Jordan'))

// -------------------- if, else if, else conditional statements -----------------------
// syntax: if (condition) { code block ran if true }
const checkWeather = (temp) =>{
    if (temp < 65){
        return 'Its cold outside, consider wearing a hoodie'
    } else if (temp < 80) {
        return 'Its a beautiful day'
    } else {
        return 'Its hot outside, avoid wearing black!'
    }
}
console.log(checkWeather(91))

// ------------------------- Ternary Operators -------------------------
// Python: (run_this_code_on_true) if (condition) else (run_this_code_on_false)
// JS: (Condition) ? (run_this_code_on_true) : (run_this_code_on_false)
const oddOrEven = (num) => (num % 2 === 0 ? true : false)


console.log(oddOrEven(2))


// ------------------------- JS Loops --------------------------------
// ----- For Loops -----
let students = ['jessie', 'jack', 'aakash']
for(let i=0; i<10; i++){
    console.log(i)
}
// loop through an array
for (let i=0; i<students.length; i++){
console.log(students[i])
}

// loop through an array with for-of loop (values) (ES6)
for(let name of students){
    console.log(name)
}

// loop through an array with for-in loop (indices) (ES6)
for(let idx in students){
    console.log(students[idx])
}

// ----- While Loops -----
// let num = 0
// while(num<10){
//     console.log(num)
//     num +=1
// }

// Do-While
// Syntax: do {code block} while (condition)
// NOTE: It is guaranteed to run once
let num3 = 15
do {
    console.log(num3)
    num3 +=1
}while (num3 < 10)

// -------------------- More JS Array Practice & Methods -----------------------
let artists = ['Kendrick Lamar', 'Bruno Mars', 'Chris Brown']

// index
console.log(artists[1])
// indexing from the end
console.log(artists[artists.length-1])

// object.toString() method returns a string representing the object
// NOTE: This is an object method, which means you can you use this on different data types
console.log(artists.toString())

// joining an array with a seperator
// syntax: array.join(seperator)
console.log(artists.join(' '))

// slice method (Out of place algo), does NOT effect the original Array
// syntax: array.slice(start, end)
console.log(artists.slice(2))
console.log(artists)

// splice method (in place algo), does effect the original Array
// syntax: array.splice(start, end)
const splicedArtists = (artists.splice(0,2))
console.log(artists)
console.log(splicedArtists)