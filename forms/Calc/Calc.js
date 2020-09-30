//5. 
function Calculate(num1, num2) {
let sum = num1 + num2 
return sum
}


let x = parseInt(prompt("Pick a number"))

let y = parseInt(prompt("Pick a number"))


let summedNumbers = Calculate(x, y) 

alert(`The sum of ${x} and ${y} is ${summedNumbers}`)
