/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
`Matched ${dog_name}` if name is in the string, if its not a match console.log "No Match"
*/
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]

function findWords(str, dogNames){ 
    for(let name of dogNames){
        //checks for lowercase of string in name
        if(str.toLowerCase().includes(name.toLowerCase())){
            console.log(`Matched ${name}`);     
        }else console.log("No Match")
    }
    }

//Call method here with parameters
findWords(dog_string, dog_names)

//============Exercise #2 ============//
/*Write a function that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

arr = ["Max", "Baseball", "Reboot", "Goku", "Trucks", "Rodger"]

function replaceEvens(arr) {
    for (let i = arr.length - 2; i >=0; i -= 2) {
        //arr.length - 2; sets the start point at the second last indices
        //i >= 0; stops the loop once the value of i is greater or equal to 0
        //i -= 2 moves the indices back 2 spaces
      arr.splice(i, 1, "even index");
    }
    return arr;
  }
console.log(replaceEvens(arr.slice()))
//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]

//Codewars:

//1)We need a function that can transform a string into a number. What ways of achieving this do you know?
// Note: Don't worry, all inputs will be strings, and every string is a perfectly valid representation of 
// an integral number.

//Python Solution:
// def string_to_number(s):
//     return int(s)

// Java Solution:
function str_to_num(s){
    return parseInt(s)
}
console.log(str_to_num('1234'))
console.log(typeof str_to_num('1234'))

//2)Return the number (count) of vowels in the given string.
// We will consider a, e, i, o, u as vowels for this Kata (but not y).
// The input string will only consist of lower case letters and/or spaces.

// Python Solution:
// def get_count(sentence):
//     return sum([sentence.count(c) for c in "aeiou"])

//Java Solution:
function get_count(str) {
    return (str.match(/[aeiou]/ig)).length;
  }
  //'i' = flag that specifies case sensitive, seaarching for both upper and lower
  //'g' = flag that searches the entire string, rather than stopping at the first match
console.log(get_count('There Are 11 Vowels In This Sentence'))