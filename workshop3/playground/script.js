// var
console.log(a)
var a = 2
var a = 3
console.log(a)

// console.log(b)
let b = 2
console.log(b)

a = 10
b = 12

let c = 2
c = 22
console.log(a,b,c)

// mutable variable

let d = 10
console.log(d)
// d = 12
// console.log(d)

c = 2.2 // float
c = `value ${d} d`
console.log(c)

d += 1 //d = d + 1
console.log(d)
d = 2**2
c = 6
console.log(d)

if (d > c) {
    console.log('True')
} else {
    console.log('false')
}
// c = 1
// switch (c) {
//     case 1:
//         console.log(c `= 1`);
//         break;
// }

for (let i =0; i < 10; i++) {
    console.log(i)
}

let count = 15
while (count > 10) {
    console.log(count)
    count -= 1
}

let arr = [1,2,3,'str',12,12]


for (let i in arr) {
    console.log(arr)
}
console.log(arr[2])


function funA(sum1, sum2) {
    return sum1 + sum2
}

let f = 2
let g = 3

const j = funA(f,g)

console.log('function ', j)

const div1 = document.getElementById('div1')

console.log(div1)

const btn1 = document.getElementById('btn1')

btn1.addEventListener('click', (e) => {
    div1.innerHTML = '<h1> Hello Word </h1>'
})

const o = {
    'key1' : 10,
    'key2' : 12
}

console.log(o['key1'])

div1.innerHTML = `${o['key1']}`
