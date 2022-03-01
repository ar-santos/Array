const numeros = [0,1,2,3,4,5]
var total = 0;

let somar = (item => {
    total += item
})

numeros.forEach(somar)

export default total