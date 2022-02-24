//ARRAY METHODS 

//FOR EACH

const numbers = [2,4,7,13]

numbers.forEach(function(number){
    console.log(number)
})

const numbersDouble = []
numbers.forEach(function(number){
    numbersDouble.push(number*2)
})

console.log(numbersDouble)

//MAP --> retorna un nuevo arreglo

const tripleNumbers = numbers.map(function(number){
    return number*3
})
//const tripleNumbersSimple = numbers.map(number => number*3)

const names = ["Victoria", "Ariana", "Juan", "Maria", "Adrian"]

const namesLength = names.map(function(name){
    return name.length
})

//FILTER


function checkSiEsPar(number){
    return number % 2 === 0
}

const numerosPares = numbers.filter(function(number){
    return number % 2 === 0
})
// filter esta creando un arreglo [2, 4]

const numerosImpares = numbers.filter(function(number){
    return number % 2 !== 0
})

const nombresEmpiezanConA = names.filter(function(name){
    return name[0] === "A"
})

const nombresQueTerminanConA = names.filter(function(name){
    return name[name.length-1] === "a"
})

//REDUCE 

const numeros = [2,5,8,9]
console.log(numeros)
const sumaTotal = numeros.reduce(function(acumulador, elementoActual){
    console.log("El acumulador vale: "+ acumulador+ " y El elemento actual: "+ elementoActual)
    return acumulador + elementoActual
})

//24
