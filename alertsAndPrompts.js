//saludar("Victoria")
//despedida("Victoria") //--> No puedo llamarla antes

function saludar(nombre){
    alert(`Bienvenido ${nombre}!!`)
}

const despedida = function(nombre){
    alert(`Adios ${nombre}!!`)
}

const nosVemos = (nombre)=>{
    alert("Nos vemos pronto "+ nombre)
}

const nosVemosDos = nombre => alert("Nos vemos pronto "+ nombre)

//despedida("Victoria")
//nosVemos("Victoria")

function suma(a,b){
    return a + b
}

const resultadoSuma = suma(2,5)
const resultadoSumaDos = suma(8,10)


// function createObject(nombre,edad){
//     const persona = {
//         name: nombre,
//         age: edad
//     }
//     return persona
// }

function loggearUsuario(nombre){
    console.log(nombre)
}

function procesarUsuario(callback){
    const name = prompt("Cual es tu nombre?")

    callback(name)
}

procesarUsuario(saludar)
// procesarUsuario(saludar)
// procesarUsuario(despedida)
