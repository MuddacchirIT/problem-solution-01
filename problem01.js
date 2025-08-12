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

// -----------------------------------------------------------
// problem solution 03
// The Cheapest Price is 

// const prices = [21000, 32000, 15000, 43000, 56000, 17000, 29000];

// function getMin(numbers){
//         let min = numbers[0];
//         for(const num of numbers){
//             if(num < min){
//                 min = num;
//         }    
//      }
//      return min;
// }


// const cheap = getMin(prices);
// console.log(`Cheapest one is ${cheap}`);

// -----------------------------------------------------------
// problem solution 04
// The Cheapest Phone Price from objects

// const phones = [
//     {name: 'Samsung', price: 20000, camera: '12mpx', color: 'black'},
//     {name: 'i-Phone', price: 22000, camera: '12mpx', color: 'black'},
//     {name: 'IQ-Z10X', price: 10000, camera: '12mpx', color: 'pink'},
//     {name: 'SYMPHONE', price: 50000, camera: '12mpx', color: 'orange'},
//     {name: 'OPPO', price: 17000, camera: '12mpx', color: 'black'},
//     {name: 'SONY ERICTION', price: 20000, camera: '12mpx', color: 'sky blue'},
//     {name: 'RealMe', price: 19000, camera: '12mpx', color: 'black'},
//     {name: 'Nokia', price: 61000, camera: '12mpx', color: 'blue'},
//     {name: 'Walton', price: 9000, camera: '12mpx', color: 'gray'},
//     {name: 'ZTC', price: 26000, camera: '12mpx', color: 'greem'},
//     {name: 'HAWAI', price: 32000, camera: '12mpx', color: 'black'},
//     {name: 'XIOME', price: 35000, camera: '12mpx', color: 'White'},
// ]

// function getCheapestMobile(phones){
//         let min = phones[0];
//         for(const phone of phones){
//             if(phone.price < min.price){
//                 min = phone;
//         }    
//      }
//      return min.price;
// }


// const cheap = getCheapestMobile(phones);
// console.log(`Cheapest one is ${cheap}`);

// -----------------------------------------------------------
// problem solution 04
// The Biggest Phone Price from objects

// const phones = [
//     {quantity: 5, name: 'Samsung', price: 20000, camera: '12mpx', color: 'black'},
//     {quantity: 9, name: 'i-Phone', price: 180000, camera: '12mpx', color: 'black'},
//     {quantity: 1, name: 'IQ-Z10X', price: 10000, camera: '12mpx', color: 'pink'},
//     {quantity: 6, name: 'SYMPHONE', price: 50000, camera: '12mpx', color: 'orange'},
//     {quantity: 3, name: 'OPPO', price: 17000, camera: '12mpx', color: 'black'},
//     {quantity: 2, name: 'SONY ERICTION', price: 20000, camera: '12mpx', color: 'sky blue'},
//     {quantity: 8, name: 'RealMe', price: 19000, camera: '12mpx', color: 'black'},
//     {quantity: 7, name: 'Nokia', price: 61000, camera: '12mpx', color: 'blue'},
//     {quantity: 2, name: 'Walton', price: 9000, camera: '12mpx', color: 'gray'},
//     {quantity: 3, name: 'ZTC', price: 26000, camera: '12mpx', color: 'greem'},
//     {quantity: 5, name: 'HAWAI', price: 32000, camera: '12mpx', color: 'black'},
//     {quantity: 4, name: 'XIOME', price: 35000, camera: '12mpx', color: 'White'},
// ]










// -----------------------------------------------------------
// problem solution 05
// Total price of all phones by shopping Cart

// function getShoppingTotals (phones){
//     let total = 0;
//     for(const product of phones){
//         total = total + product.price;
//     }
//     return total;
// }

// const total = getShoppingTotals(phones);
// console.log(`Total price is ${total}`)


// -----------------------------------------------------------
// problem solution 06
// Shopping Card


// function priceTotal (phones){
//     let total = 0;
//     for(const product of phones){
//         const thisProductCost = product.price * product.quantity
//         total = total + thisProductCost;
//     }
//     return total;
// }

// const shoppingCost = priceTotal(phones);
// console.log(`Card cost is ${shoppingCost}`);

// -----------------------------------------------------------
// Find the lowest number of Array
// const height = [167, 190, 120, 165, 137]

// function lowestNumber(numbers){
//     let min = numbers[0];
//     for(const number of numbers){
//         if(number < min){
//             min = number;
//         }
//     }
//     return min;
// }

// const cheapest = lowestNumber(height);
// console.log(`The Lowest number is ${cheapest}`);


// -----------------------------------------------------------

// Find the smallest name of Array

// const persons = ['rahim', 'robin', 'rafi', 'ron', 'rashed']

// function lowestNumber(numbers){
//     let min = numbers[0];
//     for(const number of numbers){
//         if(number.length < min.length){
//             min = number;
//         }
//     }
//     return min;
// }

// const nameShort = lowestNumber(persons);
// console.log(`The short name is ${nameShort}`);


// -----------------------------------------------------------

// Find the cash out charge calculate

// function cashOut(money){

//       let charge = money * (1.85 / 100);
//       let fixedCharge = charge.toFixed(2);
//       let finalCharge = parseFloat(fixedCharge)
//       return finalCharge;
// }
// let taka = cashOut(1000);
// console.log(`Charge is ${taka}`);



// -----------------------------------------------------------

// Find out the repeated number of the Array

// const numbers = [14, 12, 19, 14, 13, 25, 14, 12, 15, 19, 18, 12, 11, 13, 15, 13];

// for(let i = 1; i < numbers.length; i++){
//     console.log(`${i} is for ${numbers[i]}`);
// }




// -----------------------------------------------------------

// Do sorted the array assending/ desending

// const numbers = [14, 92, 119, 214, 130, 25, 144, 122, 15, 19, 108, 192, 101, 33, 45, 23];

// numbers.sort(function (a, b){return b - a});
// console.log(numbers);



// -----------------------------------------------------------
// The Biggest Phone Price from objects

    // const phones = [
    //     {quantity: 5, name: 'Samsung', price: 20000, camera: '12mpx', color: 'black'},
    //     {quantity: 9, name: 'i-Phone', price: 180000, camera: '12mpx', color: 'black'},
    //     {quantity: 1, name: 'IQ-Z10X', price: 10000, camera: '12mpx', color: 'pink'},
    //     {quantity: 6, name: 'SYMPHONE', price: 50000, camera: '12mpx', color: 'orange'},
    //     {quantity: 3, name: 'OPPO', price: 17000, camera: '12mpx', color: 'black'},
    //     {quantity: 2, name: 'SONY ERICTION', price: 20000, camera: '12mpx', color: 'sky blue'},
    //     {quantity: 8, name: 'RealMe', price: 19000, camera: '12mpx', color: 'black'},
    //     {quantity: 7, name: 'Nokia', price: 61000, camera: '12mpx', color: 'blue'},
    //     {quantity: 2, name: 'Walton', price: 9000, camera: '12mpx', color: 'gray'},
    //     {quantity: 3, name: 'ZTC', price: 26000, camera: '12mpx', color: 'greem'},
    //     {quantity: 5, name: 'HAWAI', price: 32000, camera: '12mpx', color: 'black'},
    //     {quantity: 4, name: 'XIOME', price: 35000, camera: '12mpx', color: 'White'},
    // ];



// -----------------------------------------------------------

// Find out the repeated number of the Array

// const numbers = [14, 12, 19, 14, 13, 25, 14, 12, 15, 19, 18, 12, 11, 13, 15, 13];

// for(let i = 1; i < numbers.length; i++){
//     if(numbers[i] % 2 === 0){

//         // sum = sum + numbers[i];
//         console.log(numbers[i]);
//     }

//     }


// -----------------------------------------------------------
// Task no 01
// function sum(input1, input2){
//     let result = input1 + input2;
//     return result;
// }

// function multiply(input1, input2){
//     let result = input1 * input2;
//     return result;
// }

// let a = 4;
// let b = 5;
// let result = sum(a, b) + multiply(a, b)

// console.log(result);


// -----------------------------------------------------------
// Task no 02

// const points = [1, 2, 3, 4, 5, 6]

// function sumOfArray(numbers){
//      sum = 0;
//     for(const num of numbers){
       
//         if(num % 2== 1){
//             sum = sum + num;
//         }
//     }
//     return sum;
// }

// const result = sumOfArray(points);
// console.log(`Sum is ${result}`);

// const points = [3, 7, 8];

// function sumOfArray(numbers){
//          sum = 0;
//      if (Array.isArray(numbers) !== true){
//         return "Invlid"
//      }
       
//     for(let num of numbers){
//         if(typeof num !== "number"){
//             return "Invlid";
//         }
       
//             sum = sum + num;
        
//         }
//     return sum;
//      }
// const result = sumOfArray(points);
// console.log(`Sum is ${result}`);



// -----------------------------------------------------------
// Task no 03

// const vowels = ["a", "e","i","o", "u", "A", "E", "I", "O", "U"];


// function countVowels(sentence){
//     if(typeof sentence !== "string" || typeof sentence == Number){
//         return "Invalid"
//     }

//     let count = 0;
//     const letters = Array.from(sentence);
//     letters.forEach(function(value, index, array){
//         if(vowels.includes(value)){
//             count++;
//         }
//     });
//     return count;
// }

// console.log(countVowels("diojflkdjfslkdfj"));


                     // Conceptual Session 11-08-2025
// -----------------------------------------------------------
// Problem no 01

// function cashOutCharge(money){
//     if(money < 0 || typeof money != "number"){
//         return "Invalid"
//     }
    
//     let charge = money * 0.0185;
//     let chargeFinal = charge.toFixed(2);
//     let fixedCharge = parseFloat(chargeFinal);
//     return chargeFinal;
// }

// const Final = cashOutCharge(1500);
// console.log(`Cash Out Charge is ${Final}`);



// -----------------------------------------------------------
// Problem no 02

function validContact(contact){
    if(contact.length != 11){
        return "Invalid";
    }
    if(contact.startsWith("01") == false){
        return "Invalid";
    }
    if(contact.includes(" ") == true){
        return "Invalid"
    }
    return "Corrected"
    }

const result = validContact("01712764458");
console.log(`The number is ${result}`)













// // -----------------------------------------------------------
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

