console.log("L3_Act1")
/*
Solicite to the user (1) number and (1) string. Make
an output via alert with the entered message on each
iteration, until reach the value indicated by the user.
*/

let numberIterations = parseInt(prompt("Enter a number"))
let textToIterate = prompt("Enter the text to iterate")

for (let i = 0; i < numberIterations ; i++){
    alert(textToIterate)
}

console.log("L3_Act2")
/*
Solicite to the user (1) number. Use this value to 
determine the amount of iterations and make an 
output via alert with the message "side" on each
iteration. But, if the number of iterations is 
greater than 4, cancel the cicle.
*/

let numberIterationsSides = parseInt(prompt("Enter a number"))

for (let i = 0; i < numberIterations ; i++){
    if ( i > 3){
        break
    }
    alert("Side")
}


console.log("L3_Act3")
/*
Solicite to the user the input of (10) students
consecutively. Then make an unique output via alert,
with the lis of the registered students.
*/

let students = ""

for (let i = 0 ; i < 10 ; i++){
    let student = prompt("Enter the name of the student")
    students += (i+1) + ") " + student + "\n" 
}

alert(students)

console.log("L3_Act4")
/*
Solicite to the user the input of names
consecutively, until "Voldemort" is
entered. Then make an unique output via
alert, with all the names entered
*/

names= ""

let name = prompt("Enter a name")

while (name != "Voldemort"){
    names += "- " + name + "\n"
    name = prompt("Enter a name")
}

alert(names)

console.log("L3_Act5")
/*
Solicite to the user (1) number consecutively,
until "Esc" is entered. Generate an unique output
composed by the following products, acording to
the value entered on each iteration:
"Tomato" if it is 1.
“Potato” if it is 2.
“Meat” if it is 3.
“Chicken” if it is 4.
*/

products= ""

let product = prompt("Enter a product")

while (product != "Esc" && product != null){
    product = parseInt(product)
    switch (product){
        case 1:
            products += "Tomato" + '\n'
            break
        case 2:
            products += "Potato" + '\n'
            break
        case 3:
            products += "Meat" + '\n'
            break
        case 4:
            products += "Chicken" + '\n'
            break
        default:
            break
    }
    product = prompt("Enter a product")
}

alert(products)