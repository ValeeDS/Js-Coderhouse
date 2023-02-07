console.log("L4_Act1")
/*
Code three functions:
- A functions entrada(), which solicites a 
value to the user and returns it.
- A function procesamiento(valor), where 
the input is transformed.
- A function salida(valor), which shows 
the result via alert
Then, call the three functions.
*/

function entrada(){
    return prompt("Enter a value")
}

function procesamiento(valor){
    return valor.toUpperCase()
}

function salida(valor){
    alert(valor)
}

input = entrada()
input = procesamiento(input)
salida(input)

console.log("L4_Act2")
/*
Code a function which receives a float number
as a parameter, and returns it rounded to the
closest integer. For this, it can be used
Math.round.
Then call the function five times, asking each
time a number to the user
*/

function round_float(float){
    return Math.round(parseFloat(float))
}

for(let i = 0 ; i < 5 ; i++){
    let num = round_float(prompt("Enter a float"))
    alert(num)
}

console.log("L4_Act3")
/*
Code a function with the followin header: 
tax(price, percentage). In it, a numeric value 
is returned composed by the received price, 
plus the sum of the entered percentage. Then 
call the function 5 times, asking on each 
iteration a price and a percentage to the user.
*/

function tax(price, percentage){
    price = parseFloat(price)
    percentage = parseFloat(percentage)
    let value = price * (percentage/100)
    return price + value
}

for(let i = 0 ; i < 5 ; i++){
    let price = tax(prompt("Enter a price"),prompt("Enter a percentage"))
    alert(price)
}

console.log("L4_Act4")
/*
Code two functions:
A function cotizarDolar(pesos), which receives
a financial value in Argentine peso, and returns
its equivalent in dollars.
A function cotizarPesos(dolar), which receives
a financial value in dollar, and returns its 
equivalent in Argentine peso.
Then call the functions asking to the user the
value and the currency
*/

function cotizarDolar(pesos){
    return parseFloat(pesos) / 373
}

function cotizarPesos(dolar){
    return parseFloat(dolar) * 373
}

let currency = parseInt(prompt("What currency will you enter?\n1 - Dollar\n2 - Peso"))
let value = prompt("Enter the amount")
if (currency == 1 ){
    alert("USD " + value + "are equal to ARS " + cotizarPesos(value))
} else{
    alert("ARS " + value + "are equal to USD " + cotizarDolar(value))
}

console.log("L4_Act5")
/*
Code a function with the following header:
validacion(cadena). In it, is returned a boolean
value, which is True if the parameter is not an
empty string. Otherwise, false is returned. Then
call the function iteratively, until the user 
types "ESC", asking on each iteration a string
to validate.
*/

function validacion(cadena){
    return cadena != ''
}

let input_string = prompt("Enter a string").toUpperCase()

while (input_string != "ESC"){
    alert(validacion(input_string))
    input_string = prompt("Enter a string").toUpperCase()
}