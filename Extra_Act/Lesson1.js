console.log("L1_Act1")
/*
Create threee (3) variable to assign the first name,
last name and age of a person, respective. It is 
indistinct the use of var or let in the declaration
*/

let first_name = "John"
let last_name = "Doe"
let age = 40

console.log("L1_Act2")
/*
Create five (5) constant variables, assigning to each
of them different city names. Generally, those variables
are declarated with const
*/

const city1 = "Buenos Aires"
const city2 = "New York"
const city3 = "Milan"
const city4 = "Barcelona"
const city5 = "Moscu"

console.log("L1_Act3")
/*
Declare variebles to represent the information of a 
driver license. Then, concatenate them and assign the
result of the operation into a variable named license.
*/

let name_license = "Bart Simpsons"
let address_license = "742 Evergreen Terr."
let city_license = "Springfield"
let country_license = "USA"
let birthday_license = "02-11-70"
const code_license = "B47U98RE243"

license = "Code: " + code_license + '\n' +
          "Person: " + name_license + '\n' +
          "Address: " + address_license + '\n' +
          city_license + ", " + country_license + '\n' + 
          "Birthday: " + birthday_license

console.log(license)

console.log("L1_Act4")
/*
Solicite to the user five (5) names belonging to family
members. Then, concatenate those entries and make and
output via alert.
*/

alert("Please insert the name of 5 family members")

let member1 = prompt("Insert the name of the first member")
let member2 = prompt("Insert the name of the second member")
let member3 = prompt("Insert the name of the third member")
let member4 = prompt("Insert the name of the fourth member")
let member5 = prompt("Insert the name of the fifth member")

let family = "The family members are: " +
             member1 + ", " +
             member2 + ", " +
             member3 + ", " +
             member4 + " and " +
             member5 + "."

alert(family)

console.log("L1_Act5")
/*
Solicite to the user one or more prices. Then, make a
discount in percentages (20%, 30%, etcetera) to the 
entered values and make an output.
*/

let price1 = parseInt(prompt("Please enter a price"))
console.log("Entered price: $"+price1)
let discount1 = parseInt(prompt("Please enter a discount in percentage"))
console.log("Entered discount: "+discount1+"%")

let final_price1 = price1 * (100 - discount1)/100

alert("The final price is $"+final_price1)

let price2 = parseInt(prompt("Please enter a price"))
console.log("Entered price: $"+price2)
let discount2 = parseInt(prompt("Please enter a discount in percentage"))
console.log("Entered discount: "+discount2+"%")

let final_price2 = price2 * (100 - discount2)/100

alert("The final price is $"+final_price2)