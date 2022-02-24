//OBJETOS

const persona = {
    name: "Maria",
    age: 25,
    sabeProgramar: true,
    colors: ["blue", "green", "black"]
}

const frase = "Mi nombre es "+persona.name+" y tengo "+persona.age+ " años."
console.log("Mi nombre es "+persona.name+" y tengo "+persona.age+ " años.")
console.log(`Mi nombre es ${persona.name} y tengo ${persona.age} años.`) //BACKTICKS

//DOT NOTATION

persona.name
persona.age
persona.colors
persona.sabeProgramar

//BRACKET NOTATION

persona["name"]
persona["age"]
persona["sabeProgramar"]
persona["colors"]

//PUEDO ACCEDER A LOS ELEMENTOS DEL ARREGLO
persona.colors[0]
persona.colors[1]

persona["colors"]

for(let i=0; i<persona.colors.length; i++){
    console.log("A "+ persona.name +" le gusta el color "+persona.colors[i])
}

//PUEDO MODIFICAR LOS VALORES O AGREGAR NUEVOS

persona["name"] = "Victoria"
persona["nationality"] = "argentina"
persona.age = 24 //Puedo usar bracket o dot


