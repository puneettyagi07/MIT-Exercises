//Global scope

// var a = "Hello World";
// console.log(a)
// {
//     var a = "This is new Hello World";
//     console.log(a)
//in this object we have updated the values and can use it any where.
// }
// console.log(a)
// //We can use new update value anytime using var.


//Local / Block scope (Let and Const)

// let a = "Hello";
// console.log(a)


// ************** IF else **************

// Question 1: WAP to check whether a number is even or odd

// let a = 2;

// if(a%2===0){
//         console.log("Even");
// }
// else{
//         console.log("Odd");
// }


// Question 2: WAP to check whether a numeber is positive, negative, or zero.

// let a = 0;
// let n =10;/

// if(a<n){
//         console.log("Positive");
// }
// else if(a==0){
//         console.log("Number is Equal to zero");
// }
// else if(a>n){
//         console.log("Negative");
// }
// else{
//         console.log("Error");
// }

// Question 3: WAP to find the largest of two numbers.

// let a = 2;
// let b = 3;

// if(a>b){
//         console.log("A is Greater then B");
// }
// else {
//         console.log("B is Greater then A");
// }

// Question 4: WAP to find the largest of three numbers.

// let a = 2;
// let b = 3;
// let c = 4;

// if (a>b && a>c){
//         console.log("A is Greater then B and C");
// }
// else if( b>a && b>c){
//         console.log("B is greater then A and B");
// }
// else {
//         console.log("C is greater then A and B");
// }

// Question 5: WAP to check whether a year is a leap year or not.

// let a = 2024;

// if(a%4==0){
//         console.log("2024 is Leap year");
// }
// else{
//         console.log("2024 is not a Leap Year");
// }

// Question 6: WAP to check whether a person is eligible to vote.

// let a = 20;

// if(a>=18){
//         console.log("A is eligible to Vote");
// }
// else{
//         console.log("A is not eligible to Vote");
// }

// Question 7: WAP to check wheather a number is divisible by both 5 and 11.

// let a = 10;

// if(a%5==0 && a%11==0){
//         console.log("This number is not divisible by both 5 and 11");
// }
// else {
//         console.log("This number is divisible by both 5 and 11");
// }

// Question 8: WAP to check wheather a number is either divisible 5 or 11.

// let a = 22;

// if(a%5==0 || a%11==0){
//         console.log("This number is either Divisible by 5 or 11");
// }
// else{
//         console.log("This number is not divisible by both 5 and 11");
// }

// Question 9: WAP to assign grades based on marks: (1) 90+ : A, (2) 75-89 : B, (3) 50-74 : C, (4) Below 50 : Fail

// let = "n";

// if(n>=90){
//         console.log("A");
// }
// else if(n>=75 && n<=89){
//         console.log("B");
// }
// else if(n>=50 && n<=74){
//         console.log("C");
// }
// else {
//         console.log("Fail");
// }

// Question 10: WAP to check whether a character is vowel or consonant.

// let n = "a";

// if(n==a || n==e || n==i || n==o || n==u ){
//         console.log("Vowel");
// }
// else{
//         console.log("Consonant");
// }

// Question 11: WAP to check whether a number is divisible by 3 or 7.
//  let a = prompt("Enter a number");

//  if(a%3==0 || a%7==0){
//         console.log("This number is either divisible by 3 or 7");
//  }
//  else{
//         console.log("This number is nither divisible by 3 nor 7");
//  }


// ************** For (Loop) **************

// Question 1: WAP to Print the function for 1 to 50 counting.

// let n= 1;

// for(let a=n; a<=50; a++){
//         console.log(a);
// }

// Question 2: WAP to print even numbers from 0 to 40.

// let a = 0;

// for(let a=2; a<=40; a+=2){
//         console.log(a);
// }

// second method:- 

// let a=0;

// for(let a=0; a%2==0; a++ ){. wrong 
//         console.log(a);
// }

// let a=0;

// for(let a=0; a<=40; a++){
//         if(a%2==0){
//                 console.log(a);
//         }
// }

// Question 3: WAP to print 50 to 0 numbers

// let a = 50;

// for(let a=50; a>=1; a++){
//         console.log(a);
// }

// Question 4: WAP to print table of n

// let n=5;

// for(let a=1; a<=10; a++){
//         console.log(a*n);
// }

// Question 5: WAP to print sum from 1 to 100.

// let sum = 0;

// for(let i=1; i<=100; i++){
//         sum+=i;
// }
// console.log(sum)

//Question 6: WAP to print product from 1 to 100.

// let product = 1;

// for(let i=1; i<=100; i++){
//         product *= i;
// }
// console.log(product);

//Question 7:- WAP to print square of 1 to 100.

// We define the starting number
// let num = 2; 

// We limit the loop to 4 iterations because these numbers become massive very quickly!

// for (let i = 0; i < 4; i++) {
//     let result = num * num;

//     console.log(result);
//     // Printing the operation in the format: "x * x = y"

//     // Updating num to be the result for the next iteration
//     num = result;
// }







// We define the starting number
// let num = 2; 
// let result = 0;
// // We limit the loop to 4 iterations 
// // because these numbers become massive very quickly!
// for (let i = 0; i < 4; i++) {
//      result = num * num * num;

//     // Printing the operation in the format: "x * x = y"
//     console.log(`${num} * ${num} = ${result}`);

//     // Updating num to be the result for the next iteration
//     num = result;
// }

//************** For - in (Loop) **************
// for in used for object (keys : values) :- 

// let a = {
//         "name" : "Yash",
//         "Class" : 12,
//         "Roll no" : 1
// }

// // console.log(a)

// for (const keys in a) {
//         const b = a[keys]
//         console.log(b)   
// }

//************** For - of (Loop) **************
//for of used for strings and array :-

// let a = { "Puneet"}

// // console.log(a)

// for (const keys of a) {
//         const b = a[keys]
//         console.log(b)   
// }


//************** While (Loop) **************
//It's bit of slower then for loop, hence it's used lower comparativly for loop

//Question 1:- WAP to print the table of 5.

// let i = 1;
// let table = 100;

// while(i<=10){
//         console.log(i*table);
//         i++;
// }


//************** do - While (Loop) **************
//It's bit of slower then while and for loop, hence it's used rarely.

//Question 1:- WAP to print the table of 5.

// let i = 1;
// let table = 10;

// do{
//         console.log(i*table);
//         i++;
// }
// while(i<=10)


//************** Functions **************

//It's used to reuse the code manytimes by calling function namme. we can use 1 parameter, 2 para, 3 parameter and many parameters.

//Question 1: make a function to multiple 2 * 4

// function product(a,b){
//         console.log(a*b);
// }
// product(2,4)


// Question 2: Make a function to make data of 5 students.

// function fullName(firstname, space, lastname){
//         return(firstname+space+lastname);
// }
// let student1 =fullName("Yash"," ","Chaudhary");
// let student2 =fullName("Puneet"," ","Tyagi");
// let student3 =fullName("Krish"," ","Kumar");
// let student4 =fullName("Suraj"," ","Kumar");
// let student5 =fullName("Manoj"," ","singh");

// console.log(student1,student2,student3,student4,student5);

// Question 3: Make a function to make data of student marks and grades.

// function student_marks(studentname, space, marks, space, grades){
//         return(studentname +space+ marks + space + grades);
// }
// let student1_marks = student_marks("Yash"," ", "90%"," ","A" );
// let student2_marks = student_marks("Puneet"," ", "85%"," ","B" );
// let student3_marks = student_marks("Hritik"," ", "60%"," ","c" );
// let student4_marks = student_marks("Manoj"," ", "50%"," ","D" );

// console.log(student1_marks, student2_marks, student3_marks, student4_marks);

// Question 4: Make a function for modules of 4 and 2.

// function modules(a, b){
//         return(a % b);
// }
// let result = modules(2,4);
// console.log(result);

//************** Using If Else in Function **************

// Question 5: Make a function to find greater of two number.

// function bigger(a,b){
//         if(a>b){
//                 console.log("A is bigger");
//         }
//         else{
//                 console.log("B is bigger");
//         }
// }
// bigger(4,5);

//Question 6: Make a function and take 2 random number and one string. if string is valued add then add both numbers if string is valued subtract then subtract both number.

// function random(a, b, c){
//         if(c=="add")
//                 return(a+b);
//         else if(c=="subtract")
//                 return(a-b);
//         else
//                 return("Enter Valid input");
// }
// console.log(random(4, 5, "subtract"));

// Alert:- 
// alert("THis is a alert");

// prompt:-

// function userinput(a, b, c){

//         if(c=="add")
//                 return parseInt(a) + parseInt(b);
//         else if(c=="sub")
//                 return parseInt(a)- parseInt(b);
//         else if(c=="mul")
//                 return parseInt(a)* parseInt(b);
//         else if(c=="divide")
//                 return parseInt(a)% parseInt(b);
// } 
// console.log(userinput(prompt("Enter First Number"),
//                         prompt("Enter Second Number"),
//                         prompt("Enter Method")
//                 ))

//************** Using For Loop in Functions **************

// Question 7:- Make a For loop function printing numbers from 1 to 100.

// function counting(a, b){
//         for(let i= parseInt (a); i<=parseInt (b); i++){
//                 console.log(i);
//         }
// }
// counting(prompt("Enter first number"), prompt("Enter a second number"));


// Question 8:- Make a  function finding even / odd numbers between any two random numbers.

// function even_odd(a, b) {
//         for (let i = parseInt(a); i <= parseInt(b); i++) {
//                 if (i % 2 == 0) {
//                         console.log(i);
//                 }
//         }
//         for(let i = parseInt(a); i<= parseInt(b); i++){
//                 if(i%2 != 0){
//                         console.log(i);
//                 }
//         }
// }
// even_odd(prompt("Enter Start Number"), prompt("Enter End Number"));


//************** Using For Loop with If Else in Functions **************

// Question 9:- Make a function to find prime numbers between any two random numbers.

// Method 1:-
// function primeNum(a,b){
// for(let i=parseInt(a); i<=parseInt(b); i++){
//         if(parseInt(a)%i==0 && parseInt(b)%i==0){
//                 console.log(i);
//         }
// }
// }
// primeNum(prompt("Enter 1st Number"), prompt("Enter 2nd Number"));


// Method 2:-
// let primeNum = (num) =>{
//     if(num <= 1){
//         return false;
//     }
//     for(let i=2; i<=n-1; i++){
//         if(num % i == 0){

//         }
//     }
//     if(n==1) return ("1 is neither prime nor composite");
//     else if(a==0) return ("Numebr is Prime\n");
//     else return ("Number is Composite\n");
// }
// primeNum(prompt("Enter Start Number"), prompt("Enter End Number"));


// Method 3:-
// function showPrime(){
//     let num1 = Number(prompt("Enter Number 1"));
//     let num2 = Number(prompt("Enter Number 2"));

//     // Assigning Variable to take small value always as start and bigger value always as end. 
//     let start, end;
//     if(num1 < num2){
//         start = num1;
//         end = num2;
//     }
//     else{
//         start = num2;
//         end = num1;
//     }

//     for(let i=start; i<=end; i++){
//         let prime = true;
//         if(i<=1){
//             prime = false;
//         }
//         else{
//             for(let j=2; j<i; j++){
//                 if(i%j===0){
//                     prime = false;
//                 }

//             }
//         }
//         if(prime){
//             console.log(i);
//         }
//     }
// }
// showPrime();


// Question 10:- Make a Function, and take three random variable. 2 variable should contain random number and in 1 varible user should type add/sub/multi/divide. As per 3rd vardible output should print of 2 number.

// function asmd(a,b,c){

//         if(c=="add"){
//                  return a + b;
//          }
//          else if(c=="sub"){
//                 return a-b;
//          }
//          else if(c=="multi"){
//                 return a*b;
//          }
//          else if(c=="divide"){
//                 return a%b;
//          }
//          else
//                 return ("Not Valid input");
// }

// console.log( asmd( prompt("Enter 1st Number"), prompt("Enter 2nd Number"), prompt("Enter Method")) );




// Question 11:- Make a Function, and take three random variable. 2 variable should contain random number and in 1 varible user should type even/odd/prime. As per 3rd vardible output should print of 2 number.

// function eop(a,b,c){
// for(let i=parseInt(a); i<=parseInt(b); i++){
//         if (c=="even") {
//                      return a % 2 == 0;
//                  }
//          else if(c=="odd"){
//                     return a%2 != 0;
//                  }
//          else if(c=="prime"){
//                 return parseInt(a)%i==0 && parseInt(b)%i==0;
//         }
//          else
//                 return ("Not Valid input");
// }

// console.log (eop( prompt("Enter 1st Number"), prompt("Enter 2nd Number"), prompt("Enter Method")));


//************** Arrow Function **************
//************** Using Multiple For Loop in Array Functions **************

// It's Little faster then function, and we can use async await.

// Question 12:- Make a  function finding even / odd numbers between any two random numbers.

// let even_odd = (a, b) => {
//         for (let i = parseInt(a); i <= parseInt(b); i++) {
//                 if (i % 2 == 0) {
//                         console.log(i);
//                 }
//         }
//         for(let i = parseInt(a); i<= parseInt(b); i++){
//              if(i%2 != 0){
//                      console.log(i);
//              }
//      }
// }

// even_odd(prompt("Enter Start Number"), prompt("Enter End Number"));


// Question 13:- Make a function to check if the number is prime or not.
// function prime(num){
//     if(num <= 1){
//         return false;
//     }
//     for(let i = 2; i<num; i++){
//         if(num % i === 0){
//             return false;
//         }
//     }
//     return true;
//     let number = 10;
//     if(prime(number)){
//         console.log(number + "is a prime number");
//     }
//     else{
//         console.log(number + "is not a prime number");
//     }

// }

// Using Arrow Method for above Question :- 
// let prime = (num) => {
//     if (num <= 1) {
//         return false;
//     }
//     else {
//         for (let i = 2; i < num; i++) {
//             if (num % i === 0) {
//                 return false;
//             }
//             else {
//                 return true;
//             }
//         }
//     }
// }

// let number = Number(prompt("Enter the Number"));
// if(prime(number)){
//     console.log(number + " is a prime number");
// }
// else{
//     console.log(number + "is not a prime number");
// }


// Question 14:- Make a function to find if a number is composite number and print it.

// method 1 (Not ! Method):- 
// function showPrime(){
//     let num1 = Number(prompt("Enter Number 1"));
//     let num2 = Number(prompt("Enter Number 2"));

//     // Assigning Variable to take small value always as start and bigger value always as end. 
//     let start, end;
//     if(num1 < num2){
//         start = num1;
//         end = num2;
//     }
//     else{
//         start = num2;
//         end = num1;
//     }

//     for(let i=start; i<=end; i++){
//         let prime = true;
//         if(i<=1){
//             prime = false;
//         }
//         else{
//             for(let j=2; j<i; j++){
//                 if(i%j===0){
//                     prime = false;
//                 }  
//             }
//         }
//         if(!prime){
//             console.log(i);
//         }
//     }
// }
// showPrime();

// method 2: 

/* let showPrime = () =>{
    
}
*/

//************** String Function **************

// Question 15:- make a function which finds length of sentance, longest word, smallest word, total words, words without space.

//Input from user:- This is a New World!
// Longest word:-
// const longestWord = () =>{

//     let sentence = prompt("Enter the Sentence").trim();

//     let totalLength = sentence.length;
//     let lettersWithoutSpace = 0;
//     let totalWords = 0;
//     let currentWord = "";
//     let longestWord = "";
//     let smallestWord = "";


//     for(let i=0; i <= sentence.length; i++){
//         let char = sentence[i];

//         if(char === " " || i === sentence.length){
//             if(currentWord.length > longWord.length){
//                 longWord = currentWord;
//             }
//                 currentWord = "";
//         }
//         else{
//             currentWord += char;
//         }
//     }
//     console.log(`In this Sentence "${sentence}" the longest word is "${longWord}" `);

// }
// longestWord();

//************** Using For Loop with Nested If Else in Arrow Functions **************
// Smallest Word:- 
/* const smallestWord = () =>{
    let sentence = prompt("Enter the Sentence").trim();

    let currentWord = "";
    let smallWord = "";

    for(let i=0; i <= sentence.length; i++){
        let char = sentence[i];
        if(char === " " || i === sentence.length){
            if(smallWord === "" || currentWord.length < smallWord.length){
                // if(char === " "){
                //     return char.trim();
                // }
                smallWord = currentWord;
            }
            currentWord = "";
        }
        else{
            currentWord += char;
        }
    }
    console.log(`In this Sentence "${sentence}" the smallest word is "${smallWord}" `);
}
smallestWord(); */ 

// Letter without space:-

/* const withoutSpace = () =>{
    let sentence = prompt("Enter the Sentence");

    let count = 0;

    for(let i = 0; i < sentence.length; i++){
        let char = sentence[i];
        if(char3 !== " " ){
           count++;
        }
    }
    console.log(count);
}
withoutSpace(); */


// Print letters without space

/* const letterPrint = () =>{
    let sentence = prompt("Enter the Sentence");

    let count = 0;

    for(let i = 0; i < sentence.length; i++){
        let char = sentence[i];
        if(char !== " " ){
           count++;
           console.log(char)
        }
    }
}
letterPrint(); */

// Quesrtion 15, All conditions in one function :-
/* function analyzeSentence() {
    // 1. Getting raw input from the user
    let rawInput = prompt("Enter a sentence:");
    
    // If user clicks cancel or enters nothing, stop the function safely
    if (rawInput === null || rawInput === "") {
        console.log("No input provided.");
        return;
    }

    // 2. Variables to store our final calculations
    let totalLength = rawInput.length; 
    let lettersWithoutSpace = 0;
    let totalWords = 0;
    
    let currentWord = "";
    let longestWord = "";
    let smallestWord = "";

    // 3. Loop through every character in the string
    for (let i = 0; i < totalLength; i++) {
        let char = rawInput.charAt(i);

        // Check if character is NOT a space
        if (char !== " ") {
            lettersWithoutSpace++; // Increment non-space counter
            currentWord += char;   // Build the word character by character
        } 
        // If the character IS a space (or we reached the end of the sentence)
        if (char === " " || i === totalLength - 1) {
            
            // Check if we actually built a valid word
            if (currentWord.length > 0) {
                totalWords++; // Count this word

                // Logic for finding the Longest Word
                if (currentWord.length > longestWord.length) {
                    longestWord = currentWord;
                }

                // Logic for finding the Smallest Word
                if (smallestWord === "" || currentWord.length < smallestWord.length) {
                    smallestWord = currentWord;
                }

                // Reset the building block for the next word
                currentWord = ""; 
            }
        }
    }

    // 4. Output the results cleanly to the console
    console.log("--- Sentence Analysis ---");
    console.log("Original Input: '" + rawInput + "'");
    console.log("1. Total length of sentence (including spaces): " + totalLength);
    console.log("2. Length of sentence (characters excluding spaces): " + lettersWithoutSpace);
    console.log("3. Total words: " + totalWords);
    console.log("4. Longest word: '" + longestWord + "' (Length: " + longestWord.length + ")");
    console.log("5. Smallest word: '" + smallestWord + "' (Length: " + smallestWord.length + ")");
}

// Execute the function
analyzeSentence(); */

//************** Array Function **************

// Question 16:- Write a array function for:-
// const numbers = [12, 5, 18, 7, 25, 10, 3, 20];
/** 
 * find the total sum of all number
 * find the largest number
 * find the smallest number
 * count how many number are even
 * count how many number are odd
 * create a new array containing only numbers greater than 10
 * find the average of all number
 * check if the number 25 present in the array
 * find the first number greater than 15
*/

//************** Using For Loop with If Else in Array Functions **************
// find the total sum of all number :-

// const sumOfTotalNumber = () => {
//     const numbers = [12, 5, 18, 7, 25, 10, 3, 20];

//     let sum = 0;
//     let currentNum = 0;
    
//     /* for(let i = 0; i <= numbers.length; i++){
//         if(numbers.pop()){
//             sum += numbers.pop();
//         }
//         console.log(i);
//     }
//     } */
//     for(let i = 0; i < numbers.length; i++){
//         sum += numbers[i];
//         console.log(sum);
//     }
// }

// sumOfTotalNumber();


// find the largest number :-

// const largestNumber = () =>{

//     const numbers = [12, 5, 18, 7, 25, 10, 3, 20];

//     /* let currentNum = 0;
//     let largeNum = 0;

//     for(let i = 0; i < numbers.length; i++){
//         if(largeNum.numbers[i] < currentNum.numbers[i]){
//             largeNum.number[i] = currentNum.numbers[i];
//         }
//         currentNum.numbers[i] = 0;
//     }
//     console.log(largeNum);*/

//     let largeNum = numbers[0];
    
//     for(let i=0; i < numbers.length; i++){
//         let currentNum = numbers[i];
//         if(currentNum > largeNum){
//             largeNum = currentNum;
//         }
//     }
//     console.log(largeNum);
// }
// largestNumber(); 


// Find smallest number :- 
//  const smallestNumber = () => {

//     const numbers = [12, 5, 18, 7, 25, 10, 3, 20];
//      let smallNum = numbers[0];

//      for(let i=0; i < numbers.length; i++){
//         let currentNum = numbers[i];
//         if(currentNum < smallNum){
//             smallNum = currentNum;
//         }
//      }
//      console.log(smallNum);
// }
// smallestNumber (); 



// count how many number are even :-

//  const evenNumber = () => {

//     const numbers = [12, 5, 18, 7, 25, 10, 3, 20];

//     // let evenNum = numbers[0];

//     for(let i = 0; i < numbers.length; i++){
//         if(numbers[i] % 2 == 0){
//             console.log(numbers[i]);
//         }
//     }
// }
// evenNumber();



// Find odd numbers:- 
//  const oddNumber = () => {

//     const numbers = [12, 5, 18, 7, 25, 10, 3, 20];

//     for(let i = 0; i < numbers.length; i++){
//         if(numbers[i] % 2 != 0){
//             console.log(numbers[i]);
//         }
//     }
// }
// oddNumber(); 


// create a new array containing only numbers greater than 10 :-

//  const greaterThen = () => {

//     const numbers = [12, 5, 18, 7, 25, 10, 3, 20];

//     let result = [];

//     for(let i = 0; i < numbers.length; i++){
//         if(numbers[i] > 10){
//             result.push(numbers[i]);
//         }
//     }
//     console.log(result);
// }
// greaterThen(); 



// find the average of all number :-
// const averageNumber = () => {

//     const numbers = [12, 5, 18, 7, 25, 10, 3, 20];

//     let sum = 0;

//     for(let i = 0; i < numbers.length; i++){
//         sum += numbers[i];
//     }
//     console.log(sum/numbers.length);
// }
// averageNumber();



// check if the number 25 present in the array :-

// const findNumber = () => {

//     const numbers = [12, 5, 18, 7, 25, 10, 3, 20];

//      /* switch (numbers[i] == 25){
//         case 0:
//         num = 25;
//         break;
//      }
//      console.log(num); */

//      for(let i = 0; i < numbers.length; i++){
//         if(numbers[i] == 25){
//             console.log(`The 25 Number is present in this Array`);
//         }
//      }
// }
// findNumber();



// // find the first number greater than 15:-
// const findNumber = () => {

//     const numbers = [12, 5, 18, 7, 25, 10, 3, 20];
//     for(let i=0; i<numbers.length; ++i){
//         if(numbers[i] > 15 ){
//             break;
//             console.log(numbers[i]);
//         }
//     }
// }
// findNumber();



// print a array in a reverse without reverse.
/* const reverseArray = () => {

const numbers = [12, 5, 18, 7, 25, 10, 3, 20];
let reverseNum = [];

for(let i = numbers.length-1; i >= 0; i--)

console.log(reversedNumbers)
}
findNumber(); */



// Find the Number of Positive, negative and Zero from the array, tell numbers only how many positive, negative and zero :- 
//let number = [5, -3, 0, 8, -1, 0, 12, -7];

//  const checkNumber = () =>{

//     let number = [5, -3, 0, 8, -1, 0, 12, -7];

//     let positiveNum = [];
//     let negativeNum = [];
//     let zero = [];

//     for(let i = 0; i < number.length; i++){
//         if(number[i] > 0 ){
//             positiveNum.push(number[i]);
//         }
//         else if(number[i] < 0 ){
//             negativeNum.push(number[i]);
//         }
//         else{
//             zero.push(number[i]);            
//         }
//     }
//     console.log(`There are total of ${positiveNum.length} Postive numbers in the Given Array`);
//     console.log(`There are total of ${negativeNum.length} Negative numbers in the Given Array`);
//     console.log(`There are total of ${zero.length} Zero's in the Given Array`);
// }
// checkNumber(); 


// check if given array is sorted or not print true and false only:- 
//let number = [10, 20, 30, 40, 50];

//  const checkOrder = () =>{
//     let number = [10, 20, 30, 40, 50];

//     // let currentNum = number[i];
//     // let nextNum = number[i + 1];

//     for(let i = 0; i < number.length; i++){
//         let currentNum = number[i];
//         let nextNum = number[i + 1];

//          if(currentNum < nextNum){
//             console.log(`True`);
//             break;
//         }
//         console.log(`False`);
//         break;
//     }
// }
// checkOrder(); 

// move all zeros in the end of the array and print array:- 
//let number = [0,5,0,8,12,0,3];

// const moveZero = () =>{
//     let number = [0,5,0,8,12,0,3];
//     let storeZero = [];
//     let newNumber = [];

//     for(let i = 0; i < number.length; i++){
//         if(number[i] === 0){
//             storeZero.push(number[i]);
//             // number.shift(i);
//         }
//         else if(number[i] !== 0){
//             newNumber.push(number[i]);
//         }
//     }
//     newNumber =  newNumber.concat(storeZero);
//     console.log(`The New Array is ${newNumber}`);
// }
// moveZero(); 

// find common elements from both array and move in new array:- 
//let number = [1, 2, 3, 4, 5];
//let number2 = [3, 4, 5, 6, 7];


//************** Using Nested For Loop with If Else in Array Functions **************
//  const commonElement = () =>{

//     let number = [1, 2, 3, 4, 5,7,8,9,10];
//     let number2 = [3, 4, 5, 6, 7,9];
//     let newNum = [];

//     for(let i=0; i< number.length; i++){
//         for(let j=0; j<number2.length; j++){
//             if(number[i] === number2[j]){
//                 newNum.push(number[i]);
//             }
//         }
//     }
//     console.log(newNum);
// }
// commonElement(); 


// find the odd and even number from the given array and print any of one in another array and print both array :- 
// let number = [1, 2, 3, 4, 5, 6, 7, 8];
// const oddEven = () =>{
//     let number = [1, 2, 3, 4, 5, 6, 7, 8];
//     let even = [];

//     for(let i=0; i<number.length; i++){
//         if(number[i] % 2 === 0){
//             even.push(number[i]);
//         }
//     }
//     console.log(even)
// }
// oddEven(); 


// Find the Dublicate elements form the given array and print in new array.
// let number = [1, 2, 3, 2, 4, 5, 1, 6, 3];

/* const dublicateElement = () =>{

    let number = [1, 2, 3, 2, 4, 5, 1, 6, 3];
    let duplicate = [];

    for(let i = 0; i < number.length; i++){
        let count = 0;
        for(let j=0; j<number.length; j++){
            if(number[i] === number[j]){
                count++;
            }
        }
    let alreadyExists = false;
    for(let k=0; k < duplicate  .length; k++){
        if(duplicate[k] === number[i]){
        alreadyExists = true;
        break;
        }
    }
    if(count > 1 && !alreadyExists){
        duplicate.push(number[i]);
    }
}
console.log(duplicate);

}
dublicateElement(); */

// Another Method for above Question :- 
// const duplicateElement = () =>{

//     let number = [1, 2, 3, 2, 4, 5, 1, 6, 3];
//     let duplicate = [];

//     for(let i = 0; i < number.length; i++){
//         let count = 0;
//         let checkDuplicate = true;
//         for(let j = 0; j < number.length; j++){
//             if(number[i] === number[j]){
//                 count++;
//             }
//         }
//         for(let k = 0; k < duplicate.length; k++){
//             if(duplicate[k] === number[i]){
//                  checkDuplicate = false;
//       
//             }
//         }
//         if(count > 1 && checkDuplicate){
//             duplicate.push(i);
//         }
//     }
//     console.log(duplicate);
// }
// duplicateElement();


// find missing number and print that number only :- 
// let number = [1,2, 3, 4, 6, 7, 8];


// find the second smallest number from the given array :-
// let nummber = [12, 45, 67, 23, 89, 34, 90, 11];


// Find Similar Numbers from given array and palce same numbers in assending order :- 
// comst number = [1,2,1,5 8,10,8]



//************** Looping In Array **************
//************** For Each Function for Array **************

// Question 16:- Write a For Each function for Array :-
// const numbers = [12, 5, 18, 7, 25, 10, 3, 20];
/** 
 * find the total sum of all number
 * find the largest number
 * find the smallest number
 * count how many number are even
 * count how many number are odd
 * create a new array containing only numbers greater than 10
 * find the average of all number
 * check if the number 25 present in the array
 * find the first number greater than 15
*/


// Find the total sum of all number:-
// const numbers = [12, 5, 18, 7, 25, 10, 3, 20];
// let sum = 0;
// numbers.forEach((value, index, array) => {
//     sum += value;
// });
// console.log(sum);


// Find the odd number :-
// const numbers = [12, 5, 18, 7, 25, 10, 3, 20];
// let oddNum = [];
// numbers.forEach((value, index, array) =>{
//     if(value % 2 !== 0){
//         oddNum.push(value);
//     }
// })
//     console.log(oddNum);


// Find the even number :-
// const numbers = [12, 5, 18, 7, 25, 10, 3, 20];
// let evenNum = [];
// numbers.forEach((value, index, array) => {
//     if(value % 2 === 0){
//         evenNum.push(value);
//     }
// });
// console.log(evenNum);


// Question 17:- find the number of each value from array. For Exaple how many apple, banana and orange in the array.
// let value = ["apple", "banana", "apple", "orange", "banana", "apple"];
// let apple = 0
// let banana = 0
// let orange = 0

// value.forEach((value, index, array) => {
//     if(value === "apple"){
//         apple++;
//     }
//     else if(value === "banana"){
//         banana++;
//     }
//     else{
//         orange++;
//     }
// });
// console.log(apple)
// console.log(banana)
// console.log(orange)



// Question 18:- find biggest number :- 
// let values = [12, 45, 67, 23, 89, 34, 90, 56];
// let big = 0;
// values.forEach((value,index,array)=>{
//     // let currentNum = value; not required because currentNum = value means same as next step, it's only increasing one step
//     if(value > big){
//         big = value;
//         // value = 0; not required
//     }
// })
// console.log(big);



// Question 19:- Make a group of same age with name
// const people = [
//     {name: "Yash", age: 20},
//     {name: "Rahul", age: 21},
//     {name: "Amit", age: 20},
//     {name: "Rohan", age: 22},
//     {name: "Priya", age: 21}
// ];
// let sameAge = {};
// people.forEach(value =>{
//     if(! sameAge[value.age]){
//         sameAge[value.age] = [];
//     }
//     sameAge[value.age].push(value);
// })
// console.log(sameAge);



// Question 20:- Make the total of age.
// const people = [
//     {name: "Yash", age: 20},
//     {name: "Rahul", age: 21},
//     {name: "Amit", age: 22}
// ];
// let sum = 0;
// people.forEach(Value => {
//    sum += Value.age
// })
// console.log(sum);



// Question 21:- Check through prompt if any name entered then print it's name with age.
// const people = [
//     {name: "Yash", age: 20},
//     {name: "Rahul", age: 21},
//     {name: "Amit", age: 22}
// ];
// let input = prompt("Enter Name : ");
// let found = false;
// people.forEach(value =>{
//     if(value.name === input){
//         console.log(value);
//         found = true;
//     }
// })
// if(!found){
//     console.log(`Student not Found`);
// }


//************** Map Function for Array **************
// Example :- let a = [1,2,3,4,5,6,7];
// let b = a.map((value, index, array) => {
//     return value*value;
// })
// console.log(b)


// Question 22:- make a new array with current array's double value.
// const doubleNumFunction = () => {
// let num = [2,4, 6, 8];
//     const doubleArray = num.map((value, index, array) =>{
//         return value * 2;
//     })
//     console.log(doubleArray);
// }
// doubleNumFunction();


// Question 23:- Convert current array into upper case.
// const upperCaseFunction = () => {

//     let name = ["yash", "rahul", "amit"];

//     const upperName = name.map((value, index, array) => {
//         return value.toUpperCase();
//     });
//     console.log(upperName);
// };
// upperCaseFunction();


//Question 24:- Take out the Only Names from given array
// const takeNameFunction = () => {

// let people = [
//     {name: "Yash", age: 20},
//     {name: "Rahul", age: 21},
//     {name: "Amit", age: 22}
// ];

// let name = people.map((value, index, array) => {
//     return value.name;
// })
// console.log(name);
// }
// takeNameFunction();

// Question 25:- Make a new array with same details but with 10% discount in price

// const discountFunction = () =>{
// const product = [
//     {name: "Laptop", price: 50000},
//     {name: "Phone", price: 30000},
//     {name: "Watch", price: 10000}
// ]
// let discountedPrice = product.map((value, index, array) => {
//     return {name : value.name, price : value.price*0.90};
// })
// console.log(discountedPrice);
// }
// discountFunction();
// Incomplete answer it's giving. Only updated price are printing


// ************** Filter Function for Array **************
// Example :- let a = [1,2,3,4,5,6,7];

// let b = a.filter((value, index, array) => {
//     return value*value;
// })
// console.log(b)


// Queston 26:- Find even number and odd number 

// const OddEven = () =>{
//     const num = [1, 2, 3, 4, 5 , 6, 7, 8];

//     // let even = num.filter((value, index, array) =>{
//     //     return value % 2 === 0;
//     // });
//     // let odd = num.filter((value, index, array) => {
//     //     return value % 2 !== 0;
//     // });
//     // console.log()

// // Another way With Ternary Method :-
//     let odd = num.filter((value, index, array) =>{
//         return value % 2 !== 0? true : false;
//     })
//     let even = num.filter((value, index, array) => {
//         return value % 2 === 0? true : false; 
//     })
//     console.log(`The Odd Numbers are: ${odd} \nThe Even Numbers are: ${even}`);
// }
// OddEven();


// Question 27:- print the character which length is more then 5 words.
// const charLength = () => {
// const word = ["apple", "banana", "kiwi", "watermelon","mango"];

// let wordLength_5 = word.filter((value, index, array) => {
//     return value.length >= 5;
// })
// console.log(wordLength_5);
// }
// charLength();

// Question 28:- Filter the products more then 5K price.
// const priceFilter = () => {
// const products = [
//   { name: "Phone", price: 20000 },
//   { name: "Mouse", price: 500 },
//   { name: "Laptop", price: 70000 },
//   { name: "Keyboard", price: 1500 }
// ];
// let price5K = products.filter((value, index, array) => {
//     return value.price >= 5000;
// })
// console.log(price5K);
// }
// priceFilter();
// In this all values are printing but above in discount Question it's not showing.

// Question 29:- Passing marks are 50, find the students who got pass
// const passStudent = () => {
// const students = [
//   { name: "A", marks: 90 },
//   { name: "B", marks: 30 },
//   { name: "C", marks: 75 },
//   { name: "D", marks: 45 }
// ];
// let pass = students.filter((value, index, array) => {
//     return value.marks >= 50;
// })
// console.log(`Students who are Passed :`, pass);
// }
// passStudent();

// Question 30:- Find the Users whoes email ends with ".com"
// const users = [
//   { email: "abc@gmail.com" },
//   { email: "test@yahoo.in" },
//   { email: "hello@hotmail.com" },
//   { email: "demo@company.org" }
// ];

// endswith method

//************** Reduce Function for Array **************
// Note:- Reduce always return single result. For Example:- if we do sum of any 2 variable it will return result. It doesn't give full array.

//Example :- find bigger number
// let a = [1,2,3,4,5,6,7,8,9,10];
// let b = a.reduce((x,y)=>{
//         if(y>x){
//             return y
//         }
//         else{
//             return x
//         }
// })
// console.log(b)

// Another method :- Using Ternary Method.
// let b = a.reduce((x,y) => {
//     return y>x ? y : x 
// })
// console.log(b);

// Question 31:- Check character, how many times it reapet. Give Number.
// const repeat = () => {
// const fruits = [ "apple", "banana", "apple", "orange", "banana", "apple" ];

// let apple = 0 , banana = 0, orange = 0; /* let initialCount = {apple : 0, banana : 0, orange : 0} We can write it in this way also, Assigning Variable and assign Multipul values in a object*/
// let repeatFruitNum = fruits.reduce((acc, nextNum) => {
//     nextNum === "apple"? acc.apple++:
//     nextNum === "banana" ? acc.banana++: acc.orange++;
//     return acc;
// });
// console.log(`Toal Apple are : ${repeatFruitNum.apple} \n Total Banana are : 4{repeatFruitNum.banana} \n Total Orange : ${repeatFruitNum.orange}`);
// }
// repeat();

// const repeatWithTernary = () => {
//     const fruits = [ "apple", "banana", "apple", "orange", "banana", "apple" ];

//     // Initialize our accumulator object with starting counts of 0
//     let initialCounts = { apple: 0, banana: 0, orange: 0 };

//     let finalCounts = fruits.reduce((acc, currentFruit) => {
//         // Nested Ternary Logic:
//         currentFruit === 'apple' ? acc.apple++ 
//         : currentFruit === 'banana' ? acc.banana++ 
//         : acc.orange++;

//         return acc; // Always return the updated accumulator object
//     }, initialCounts);

//     console.log(`Total apples are : ${finalCounts.apple}\nTotal Bananas are : ${finalCounts.banana}\nTotal Oranges are : ${finalCounts.orange}`);
// };

// repeatWithTernary();

// Question 32:- Print the Average of marks.
// const average = () => {
// const marks = [80, 75, 90, 95, 70];
// let total = marks.reduce((acc, current) => {
//     return acc + current;
// });
// let averageNum = total/marks.length;
// console.log(averageNum);
// }
// average();

// Question 33:- Seprate the Odd and even numbers in this object
// const oddEven = () => {
// const numbers = [1,2,3,4,5,6,7,8,9,10];
// let even = [], odd = [];
// let seprateNum = numbers.reduce((acc, currentNum) => {
//     currentNum % 2 === 0 ? even.push(currentNum) : odd.push(currentNum);
//     return acc;
// });
// // console.log(`even : ${even} \n odd : ${odd}`);
// console.log("even:" , even)
// console.log("odd:" , odd)
// }
// oddEven();

//************** Math Methods In JS **************
// Examples:- 

// let a = 2.19;

// let b = Math.ceil(a); /* it round off forward*/
// console.log(b)

// let c = Math.floor(a) /* it round off backward */
// console.log(c)

// let d = Math.round(a) /* it round off towards near number*/
// console.log(d)

// let e = Math.trunc(a) /* it removes number after .(dot) and returns integer number only */
// console.log(e)

// let f = Math.random()*10 /* it gives any random number */
// console.log(f)

// let g = Math.round(Math.random()*10) /* if we multiply it with any number example *10 then it will give number between that digit */
// console.log(g)

// let h = Math.floor(Math.random() * 10) + 2; /* if we multiply it with any number example *10 then it will give number between that digit but in the last if we add and number then it will start the counting from that number and can go upto the number which was *(Multiply) before */
// console.log(h)

// Question 34:- Genrate a random number btw 50 to 100
// const randomNum =() =>{
//     const x = Math.round(Math.random() * 50) + 50; /* this will not print 100 because of floor, should i use round? or there is no problem */
//     console.log(x);
// }
// randomNum();


// Question 35:- Create a array of 10 fruites and print a random every single time.
// const randomReapeat = () => {
// const fruit = ["apple", "banana", "kiwi", "drangonfruit", "litchi", "orange", "gauava", "watermelon", "pumpkin", "mango"];
//  let reapeatFruit = Math.round(Math.random(fruit.value) *fruit.length);
//  console.log(fruit[reapeatFruit]);
// }
// randomReapeat();


// Question 36:- Tossing a coin, if 0 it's head  if 1 it's tail
// const tossCoin = () =>{
//     const toss = Math.round(Math.random()*1);
//     toss === 0 ? console.log ("head"): console.log("tail");
// }
// tossCoin();

// Question 37:- Genarate a random OTP of 6 digits.
// const genrateOTP = () => {
//     const otp = Math.floor(Math.random() * 999999) + 100000;
//     console.log(otp);
// }
// genrateOTP();



// Question 37:- You have two arrays:

// const classA = [
//   { name: "Yash", marks: 85 },
//   { name: "Rahul", marks: 42 },
//   { name: "Amit", marks: 67 }
// ];

// const classB = [
//   { name: "Priya", marks: 91 },
//   { name: "Rohan", marks: 38 },
//   { name: "Neha", marks: 76 }
// ];

// Your task is to do the following in one program:

// 1. Add { name: "Karan", marks: 59 } to classA using push().
// 2. Remove the last student from classB using pop().
// 3. Combine both arrays into one using concat().
// 4. Use a for loop and if...else to add a new property called status.
//    - If marks are 50 or more, status should be "Pass".
//    - Otherwise, status should be "Fail".
// 5. Use forEach() to print each student's name and status.
// 6. Use filter() to create a new array that contains only the students who passed.
// 7. Use map() to create an array of only the names of the passed students.
// 8. Use join(" | ") to print all passed students' names in one line.
// 9. Use reduce() to calculate the total marks of the passed students.
// 10. Print the final list of passed students and their total marks.



// Question 38:- You have an array of 15 students:

// const students = [
//   "Yash", "Rahul", "Amit", "Priya", "Rohan",
//   "Neha", "Karan", "Simran", "Aryan", "Anjali",
//   "Mohit", "Riya", "Sohan", "Pooja", "Kabir"
// ];

// Create one JavaScript program that uses Math.random(), Math.floor(), Math.ceil(), Math.round(), Math.trunc(), Math.abs(), a for loop, and if...else.

// Your task:

// 1. Generate a random decimal number between -100 and 100 for each student and store it as their score.
// 2. Use Math.trunc() to get the integer part of the score.
// 3. Use Math.abs() to convert the score into a positive number.
// 4. Use Math.round() to create a rounded score.
// 5. Use Math.floor() and Math.ceil() to create floorScore and ceilScore.
// 6. Use if...else:
//    - If the rounded score is 60 or more, print "Pass".
//    - Otherwise, print "Fail".
// 7. Print all the details of every student like this:

// Name: Yash
// Original Score:
// Truncated Score:
// Absolute Score:
// Rounded Score:
// Floor Score:
// Ceil Score:
// Result:

// 8. After printing all students, count how many students passed and how many failed, then print the final result.

// Rules:
// - You must use Math.random(), Math.floor(), Math.ceil(), Math.round(), Math.trunc(), Math.abs(), a for loop, and if...else.
// - Do not use map(), filter(), reduce(), or forEach().






//***************DOM AND BOM (DOCUMENT OBJECT MODEL AND BROWSER OBJECT MODEL) ***************   
document.body.children[0].style.backgroundColor = "red";
document.body.children[0].style.color = "white";
document.title="Document object model"
    