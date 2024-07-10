/* two Dataypes mainly Primitive and non primitive */

// Primitive datatypes 

// 7 ytpes : string , Number , Boolean (yes/no true/false) , null , undefined , symbol , BigInt


const score = 100
const scoreValue = 100.8
const isLoggedIn = false
const outsideTemp = null
let  userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id);
console.log(id === anotherId);
//------------------------ ---------- 


// Reference type (Non- Primitive datatypes)
// Arrays , objects , Functions 

const heros = ["thor", "captain", "marvel"]
let myObj = {
name : "himanshu",
age : 17 ,
}

const myFunction = function(){
    console.log("hello world");

}

console.log(typeof myFunction);
console.log(typeof heros);
console.log(typeof myObj);
  

// read about typeof returns of various datatypes on ecmascript