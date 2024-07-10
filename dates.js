// // dates  (an object in js)

// let myDate = new Date()

// console.log(myDate); // returns 2024-07-01T08:11:09.976Z
// console.log(myDate.toString()); // returns Mon Jul 01 2024 13:41:57 GMT+0530 (India Standard Time)


// console.log(myDate.toLocaleString()); //7/1/2024, 1:42:43 PM


// console.log(myDate.toDateString()); // Mon Jul 01 2024


// // let anotherDate = new Date(2001, 3, 24)

// // console.log(anotherDate.toDateString()); // Tue Apr 24 2001

// // let anotherDate = new Date('12-013-2023') // printing in mmddyy
 
// // console.log(anotherDate.toDateString()); // Wed Dec 13 2023

let anotherDate = new Date('11-12-2023')

// console.log(anotherDate.toDateString());

const dayjs = require('dayjs')

console.log(dayjs('2024 6 JAN').format('DD/MM/YY')); // dayjs library converts any date into any format you require 

// install npm install dayjs // from day.js.org


let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(anotherDate.getTime());

// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate.toLocaleString()); // adding one so that end user dont get confused by js numbers system of counting 0 as 1 

// creating a custom sentence

console.log(`The Date and Time is ${newDate.toLocaleString()}`)


let x = newDate.toLocaleString( 'default' , {
    weekday: "long",
    month: "long"

})

console.log(`The Day is ${newDate.toLocaleString( 'default' , {
    weekday: "long",
    month: "long"

})
}`)