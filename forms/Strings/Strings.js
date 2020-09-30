//Question 8
let quoteString = "Failure is simply the opportunity to begin again this time more intelligently."
 quoteString = quoteString.toUpperCase()
alert(`Upper case string is: ${quoteString}`)

let authorString = "- Henry Ford"
alert(authorString)

let completeString = quoteString + authorString
alert(completeString)

let found  = completeString.includes(authorString)
switch (found) {
case (true):
  alert("Henry Ford is in the quoteString")
  break
case(false):
  alert("Henry Ford is not in the quoteString")
  }

let secondQuote = "Talent is cheaper than table salt. What separates the talented individual from the successful one is a lot of hard work. - Stephen King"

secondQuote = secondQuote.toLowerCase()
alert(`Lower case string is: ${secondQuote}`)

let numberInput = parseInt(prompt("Enter one number"))
let newNumber = 10 + numberInput
alert(newNumber)

alert(`The number ${numberInput} + 10 is ${newNumber}.`)