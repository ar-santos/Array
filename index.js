import listaDeArray from './length.js'

console.log(listaDeArray.b)

const a = listaDeArray.a
console.log(a.length)

console.log(
a.every(item => {
 return  item > 1
})
)

console.log(
a.find(item => {
 return  item > 18
})
)