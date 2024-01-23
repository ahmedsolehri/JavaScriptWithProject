const accountId = 1225
let accountEmail = "ahmed@gmail.com"
var accountPassword = "12548"
accountCity = "Lahore"
let accountState;


//accountId = 2 // not allowed 

accountEmail = "abc@.com"
accountPassword = "55225252"
accountCity = "Islamabad"

console.log(accountId)

/*
prefer not to use var
because of issue in block and functonal scope
*/

console.table([accountId, accountEmail , accountPassword
, accountCity, accountState])