const accountId = 16692
let accountName = "himanshu"
var accountEmail = "gm@gmail.com"
let accountState;

// accountId = 2 // not allowed

/* prefer not to use var 
because of the issue in block scope and functional scope */



console.log(accountId);
console.log(accountName);
console.table([accountEmail,accountId ,accountName , accountState])
