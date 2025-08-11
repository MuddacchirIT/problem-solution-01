// problem solution 01

// leaf Year

// function isLeapYear(year){ 
//     if(((year % 400 === 0) && (year % 100 === 0)) || ((year % 4 === 0) && (year % 100 !== 0))){
// console.log(`${year} is leap year!`);
//     }
//     else {console.log (`${year} is not a leap year!`);
//         }
// }

// isLeapYear(2018);

// -----------------------------------------------------------

// problem solution 02

// vowel hunting

// const vowels = ["a", "e","i","o", "u", "A", "E", "I", "O", "U"]

// function countVowels(sentence){
//     let count = 0;
//     const letters = Array.from(sentence);
//     letters.forEach(function(value, index, array){
//         if(vowels.includes(value)){
//             count++;
//         }
//     });
//     return count;
// }

// console.log(countVowels("I love Bangladesh and we are going to Cox's Bazar."))

// -----------------------------------------------------------

// problem solution 03

// unique hunting

// const numbers = [1, 6, 8, 7, 9, 12, 12, 11, 8, 1, 7, 9, 6, 7];

// const duplicates = numbers.filter(function(value, index, array){
//     return array.indexOf(value) === index
// });

// console.log(duplicates);

// -----------------------------------------------------------

// problem solution 04

// converting...

// function inchToFeet(inch){
//     const feet = inch / 12;
//     const feetNo = parseInt(feet);
//     const inchRemaining = inch % 12;
//     return result = feetNo+' ft'+inchRemaining+' inch';
// }
// const shuvoHeight = inchToFeet(65);
// console.log(shuvoHeight);

// -----------------------------------------------------------

// problem solution 05

// Arry from odd hunting & average 

// function oddAverage(numbers){
//     const odds = [];
//     for(const number of numbers){
//         if(number % 2 === 1){
//             odds.push(number)
//             }
//         }
//         // console.log(odds);
//         let sum = 0;
//         for(const number of odds){
//             sum = sum + number
//         }
//         const count = odds.length;
//         console.log(sum, count);
//         const avg = sum / count;
//         console.log(Math.ceil(avg));
//         return avg;
//         }
   

// const numbers = [1,2, 6, 4, 5, 49]
// const avg = oddAverage(numbers);
// console.log(`Average of the odd numbers is ${avg}`)


// Same to Same 

// function oddAverage(numbers){
//    console.log(numbers);
// }

// const numbers = [42, 13, 58, 65, 81];
// const avg = oddAverage(numbers);
// console.log(`Average of the odd numbers is ${avg}`)


      //  ----problem solution part 2----

// -----------------------------------------------------------
// problem solution 01  
// const abul = 56;
// const babul = 96;
// const kabul = 48;

// if(abul > babul && abul > kabul){
//    console.log(`Abul is the best and`)
//    }
//    else if(babul > abul && babul > kabul){
//      console.log(`Babul is better `)
//    }
// else{
//     console.log(`Kabul is good `)
// }


// -----------------------------------------------------------

// problem solution 02

// Highest Value of the array


// const height = [65, 52, 85, 96, 41, 53, 66]

// function getMax(numbers){
//     let max = numbers[0];
//     for(const num of numbers){
//         if(num > max){
//             max = num;
//         } 
//     }
//     return max;
// }

// const max = getMax(height);
// console.log(`Max value is ${max}`);

// -----------------------------------------------------------

// problem solution 02

// lowest Value of the array

// const height = [65, 52, 85, 96, 41, 53, 66]


// function getMax(numbers){
//     let min = numbers[0];
//     for(const num of numbers){
//         if(num < min){
//             min = num;
//         } 
//     }
//     return min;
// }

// const min = getMax(height);
// console.log(`Min value is ${min}`);


