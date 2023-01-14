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