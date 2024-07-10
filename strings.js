const name = "himanshu"
const repoCount = 50

// console.log(name + repoCount + " Value");  dont use this type of syntax this too old 

// use this for more readable

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); // using backticks 

const gameName = new String('himanshu-hc -com')

console.log(gameName);
// string prototypes investigation


// console.log(gameName[3]);
// console.log(gameName.__proto__);

// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(7));
// console.log(gameName.indexOf("u"));

const newString = gameName.substring(1, 4) // doesnot include the last ie 4th letter 
console.log(newString);

const anotherString = gameName.slice(-8,4) // this includes negative values 
console.log(anotherString);

const newStringone = "  himanshu  "
console.log(newStringone);
console.log(newStringone.trim()); // trim() removes any spaces in the variables 



const url = "https://himanshu.com/hima%20ranjan" 

console.log(url.replace("%20" , "-")) // replaces anything in string 



console.log(url.includes("jawan")) // checks if the value is available in the original variable defined



console.log(gameName.split("-" ,1));





// learn about string methods by writing an article using mdn 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/raw


