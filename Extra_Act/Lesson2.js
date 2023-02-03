console.log("L2_Act1")
/*
Solicite to the user (1) name.
If this one is equal to other name stored in a variable,
make an output via alert with the message "I did it"
Opposite case, the output will be "I didn't do it"
*/

const name_act1 = "Bart"
let input = prompt("Enter a name")

if (name_act1 == input) {
    alert("I did it")
} else{
    alert("I didn't do it")
}

console.log("L2_Act2")
/*
Solicite to the user (1) key.
If it is pressed "y" (lower), or "Y" (upper), make 
an output via alert with the message "Correct". 
Otherwise, the output will be "Error".
*/

let key = prompt("Press a key")

if (key == "y" || key =="Y"){
    alert("Correct")
}else{
    alert("Error")
}

console.log("L2_Act3")
/*
Solicite to the user (1) number.
If the value is between 1 and 4, make one of
the following outputs as correspond:
"You choose Homer" if it is 1.
"You choose Marge" if it is 2.
"You choose Bart" if it is 3.
"You choose Lisa" if it is 4.

*/

let number = parseInt(prompt("Enter a number"))

switch (number){
    case 1:
        alert("You choose Homer");
        break;
    case 2:
        alert("You choose Marge");
        break;
    case 3:
        alert("You choose Bart");
        break;
    case 4:
        alert("You choose Lisa");
        break;
    default:
        alert("Not found");
        break;
}

console.log("L2_Act4")
/*
Solicite to the user (1) number.
If the value is between tw numbers, 
make one of the following outputs:
“Low budget” if it is between 0 and 1000.
“Avergae budget" if it is between 1001 y 3000.
“High budget" if it is greater than 3000
*/

let budget = prompt("Enter a number")

if (budget < 0) {
    alert("Not valid")
} else{
    if (budget < 1001){
        alert("Low budget")
    }else{
        if (budget < 3001){
            alert("Average budget")
        }else{
            alert("High budget")
        }
    }
}

console.log("L2_Act5")
/*
Solicite to the user (4) grocery products. If all the
elements have been entered, make an unique output 
composed by the products list. Otherwise,, the output
will be "Error: All products mut be entered"
*/

let product1 = prompt("Enter the product 1")
let product2 = prompt("Enter the product 2")
let product3 = prompt("Enter the product 3")
let product4 = prompt("Enter the product 4")

if( product1 != null && product1 != "" &&
    product2 != null && product2 != "" &&
    product3 != null && product3 != "" &&
    product4 != null && product4 != ""
){
    alert(
        "1) " + product1 +"\n" +
        "2) " + product2 +"\n" +
        "3) " + product3 +"\n" +
        "4) " + product4
    )
}
else{
    alert("Error: All products mut be entered")
}