//ARREGLOS

const persona = ["victoria", 23, true]
console.log(persona)
// console.log(persona[0])
// console.log(persona[1])
// console.log(persona[2])

//REASIGNO VALOR A LOS ELEMENTOS
persona[0] = "Maria Victoria"
persona[1] = 24
persona.length //LARGO ARREGLO

persona.push("agrega elemento") //AGREGA AL FINAL UN ELEMENTO
persona.pop() //SACA ULTIMO ELEMENTO

//ARREGLOS Y FOR

const numeros = [12,432,543,65,2,432,654,1,654,42432,654,53243,5434,32432,"fjsfdsk"]

for(let i=0; i<numeros.length; i++){
    console.log("El elemento en la posicion "+i+ " es: "+numeros[i])
}

const numeroBin = [0,1,1,0]


