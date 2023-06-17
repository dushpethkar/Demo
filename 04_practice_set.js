//Q1: Create a variable of type string and try to add a number to it.
let a = "Dushyant"
let b = 6
console.log(a + b)

//Q2:Use typeof operator to find the datatype of the string in last que.
console.log(typeof (a+b))

//Q3:Create a const object in js. can you change it to hold a number?
const a1 = {
    name: "Dushyant",
    section: 1,
    isPrincipal: false
}
//a1 = 45
//a1 = {}

//Q4:Try to add a new key to the const object in problem 3 were you write to do it?
a1['friend'] = "Shardul"
a1['name'] = "Dush"
console.log(a1)

//Q5:Write a Js program to create a word-meaning dictionary of 3 words.
const dict = {
    appreciate: "recognize the full worth of",
    ataraxia: "a state of freedom from emotional disturbance and anxiety",
    yakka: "work, especially hard work"
}
console.log(dict['yakka'])