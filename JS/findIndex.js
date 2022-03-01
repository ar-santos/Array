const numeros = [4, 17, 8, 12]

function isPrime(element) {
    var numero = 2;
    while (numero <= Math.sqrt(element)) {
      if (element % numero++ < 1) {
        return false;
      }
    }
    return element > 1;
  }


  export default numeros.findIndex(isPrime)