console.log("L3_Act1")
/*
Taking as starting point the examples of the structures for and 
while, create a algorithm which repeat a group of instructions. 
On each iteration it is necessary to make an operation or 
comparison to obtain an output via alert or console.
*/

let input = parseInt(prompt("Enter a number"))
while (input != "Esc" && input != null) {
    console.log("You entered: ", parseInt(input))
    console.log("The square is:", input * input)
    input = prompt("Enter a number")
}