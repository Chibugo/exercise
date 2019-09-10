// exercise 1
var a = '';

for (var i = 0; i <= 6; i++) {
  a += '#';
  console.log(a);
}
//ignore
// var hot = '';
// for (var a = 0; a <=3; a++) {
//     hot += '^';
//     console.log(hot);
// }

// exercise 2
// printing numbers from 1 to 100
for (let number = 1; number <= 100; number ++) {
    let output ="";
    //determining numbers divisible by 3 and 5
    if (number % 3 == 0) output = output + "Fizz"; 
    if (number % 5 == 0) output = output + "Buzz"; 
    // if (number % 3 == 0 && number % 5 == 0) output = output + "FizzBuzz"; 
    console.log(output || number);
};

// exercise 3
let size = 8;
    let board = "";
    
    // telling the board to add a new line if y is less than size
    for (let y = 0; y < size; y++) {
        for (let x = 0; x < size; x++) {
            if ((x + y) % 2 == 0) {
                board += " ";
            } else {
                board += "#";
            }
        }
        board += "\n";
    }
    console.log(board);
    //i don't really understand the third exercise even though i managed to make it work somehow
     
    console.log("");
    console.log("FUNCTIONS")

    // Functions
    // Exercise 1
    function isEven(number){
        if(number < 0) {
          return isEven(-number);
        }
        else if(number > 1){
         return isEven(number-2);
        }
        return number === 0 ? true:false;
      }
      console.log(isEven(50));

      console.log(isEven(75));
    
      console.log(isEven(-1));
    

    // Exercise 2
    function countBs(str) {
        var count = 0;
        str.toLowerCase().split('').forEach(function(item){
            item==='b' ? count++:null;
           })
           return count; 
         }
         console.log(countBs("BUMBLEBEE"));

    // Exercise 3
    function countChar(str, charac) {
        var count = 0;
        str.toLowerCase().split('').forEach(function(item){
            item===charac.toLowerCase() ? count++:null;
           })
           return count; 
         }
         console.log(countChar("transformer", "R"));
         console.log(countChar("cinderella", "L"));
         console.log(countChar("anaconda", "A"));