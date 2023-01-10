// console

console.log('Test')

// -----mutable variables-----

//var function scope, can be redeclared
console.log('"Var" before declaring', numVar)
var numVar = 2
var numVar = 3
console.log('"Var" after declaring', numVar)

//let block scope, cannot be redeclared
// console.log('"Let" before declaring', numLet)
let numLet = 2
console.log('"Let" after declaring', numLet)

// update variables

numVar = 4
numLet = 4
console.log('Updated', numVar, numLet)

// -----immutable variable-----

// const

const numConst = 2

//---datatypes---

//string

//num ( int, float)

//-----operators----

//add 

//subtract

//multi

// division

//----conditions----

if (numConst > numVar) {
    console.log('True')
}else {
    console.log('False')
}

// ---loops--

// for

for (let i=0; i< 10; i++) {
    console.log(i)
}

// while
let count = 15
while (count > 10) {
    console.log(count)
    count -= 1
}

//-----lists / array----
let l = [1,2,3,5,6]

let ll = ['hey', 'there', 2,3,5]

for (let i in l) {
    console.log(l[i])
}
//


const btn = document.getElementById('hamBtn')
const bar1 = document.getElementById('bar1')
const bar2 = document.getElementById('bar2')
const bar3 = document.getElementById('bar3')

btn.addEventListener('click', ()=>{
    if (bar1.classList.contains('ham-bar1-open')) {
        bar1.classList.remove('ham-bar1-open')
        bar2.classList.remove('ham-bar2-open')
        bar3.classList.remove('ham-bar3-open')
    }else {
        bar1.classList.add('ham-bar1-open')
        bar2.classList.add('ham-bar2-open')
        bar3.classList.add('ham-bar3-open')
    }
})












