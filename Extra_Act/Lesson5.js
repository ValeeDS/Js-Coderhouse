console.log("L5_Act1")
/*
Declare a class Tienda which allows to register:
- Name
- Address
- Owner
- Market
Then call at least 3 objects using this class
*/

class Tienda{
    constructor(Name, Address, Owner, Market){
        this.name = Name
        this.address = Address
        this.owner = Owner
        this.market = Market
    }
}

let tienda1 = new Tienda("Starbucks", "Av. Corrientes 837, CABA", "Unknown", "Gastronomic")
let tienda2 = new Tienda("McDonalds", "Av. Corrientes 992, CABA", "Unknown", "Gastronomic")
let tienda3 = new Tienda("Montagne", "Av. Corrientes 2582, CABA", "Unknown", "Clothing")

console.log(tienda1)
console.log(tienda2)
console.log(tienda3)

console.log("L5_Act2")
/*
Ask to the user the register of 5 shops. Use 
class Tienda from Activity 1, to make an 
instance of the objects based on the captured 
entries. Generate an unique output composed by 
the information of the generated objects
*/

output = ""
for (let i = 0; i < 5; i++){
    let newShop = new Tienda(
        prompt("Enter the name"),
        prompt("Enter the address"),
        prompt("Enter the owner"),
        prompt("Enter the market")
    )

    let text = `NAME ${newShop.name.toUpperCase()}\n - Address: ${newShop.address}\n - Owner: ${newShop.owner}\n - Market: ${newShop.market}\n\n`

    output += text
}
alert(output)

console.log("L5_Act3")
/*
Declare a method for the class Tienda with 
the following header estaAbierto(hora). This
one returns true if the entered hour is 
between 8 and 12 or 15 and 19. Other wise 
returns false. Then initialize at least 1 
object using this class, and solicite to the 
user 3 hours. Inform to the user if the shop
is open, based on the entered hour.
*/

class Act3 extends Tienda{
    constructor(Name, Address, Owner, Market){
        super(Name, Address, Owner, Market)
    }
    estaAbierta(hora){
        hora = parseInt(hora)
        return ((8 <= hora && hora <= 12) || (15 <= hora && hora <= 19))
    }
}

tienda1 = new Act3(tienda1.name,tienda1.address,tienda1.owner,tienda1.market)
for (let i = 0; i < 3; i++){
    let hour = prompt("Enter a number\nIt must be un 24 h format, and must be an integer value")
    if (tienda1.estaAbierta(hour)){
        alert(`Is open at ${hour}`)
    } else{
        alert(`Is closed at ${hour}`)
    }
}

console.log("L5_Act4")
/*
Declar a method for the class Tienda with the 
following header esPropietario(nombre). It 
returns true if the name sent corresponds to 
the owner of the shop. Otherwise returns false.
Then, call at least 3 objects using this class 
and ask to the user 4 names. Inform via alert 
if the names belong to any owner of a shop.
*/

class Act4 extends Act3{
    constructor(Name, Address, Owner, Market){
        super(Name, Address, Owner, Market)
    }
    esPropietario(nombre){
        return nombre == this.owner
    }
}

tienda1 = new Act4(tienda1.name,tienda1.address,"John",tienda1.market)
tienda2 = new Act4(tienda2.name,tienda2.address,"Rose",tienda2.market)
tienda3 = new Act4(tienda3.name,tienda3.address,"Peter",tienda3.market)

let owners = ''
for (let i = 0 ; i < 5 ; i++){
    let input_owner = prompt("Enter a name to check")
    let ownership = ''
    if (tienda1.esPropietario(input_owner)){
        ownership += `\n- ${tienda1.name}`
    }
    if (tienda2.esPropietario(input_owner)){
        ownership += `\n- ${tienda2.name}`
    }
    if (tienda3.esPropietario(input_owner)){
        ownership += `\n- ${tienda3.name}`
    }

    if (ownership != ''){
        ownership = `${input_owner} is owner of:` + ownership
        owners += ownership + '\n'
    }
}

alert(owners)

console.log("L5_Act5")
/*
Declare a class Cliente which allows register:
- Name, budget, if he/she has a discount card, 
and client phone number.
- A method transferirDinero(valor), which allows 
to obtain certain rest a quantity from the budget 
when this parameter is less than the value sent, 
and higher than zero.
Then initialize at least 3 objects using this class, 
and ask to the user 5 numbers. Inform via alert if 
each of the clients have the enough budget to make 
a transfer equal to the entered value.
*/

class Cliente {
    constructor(name, budget, discountCard, phone){
        this.name = name
        this.budget = budget
        this.discountCard = discountCard
        this.phone = phone
    }
    transferirDinero(valor){
        valor = parseFloat(valor)
        if ((valor < this.budget) && (this.budget > 0)){
            this.budget -= valor
            return true
        } else{
            return false
        }
    }
}

let client1 = new Cliente("John", 100000, true, 1234567890)
let client2 = new Cliente("Rose", 150000, false, 1236547890)
let client3 = new Cliente("Mary", 200000, true, 1234545670)

for (let i = 0; i < 5; i++){
    let transfer = prompt("Enter a value to transfer")
    if (client1.transferirDinero(transfer)){
        alert(`Client ${client1.name} is able to transfer ${transfer}`)
    }
    if (client2.transferirDinero(transfer)){
        alert(`Client ${client2.name} is able to transfer ${transfer}`)
    }
    if (client3.transferirDinero(transfer)){
        alert(`Client ${client3.name} is able to transfer ${transfer}`)
    }
}