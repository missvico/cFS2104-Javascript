let nota = prompt("Que nota se saco?")
let confirmUser = confirm("Queres ver el resultado del examen?")

console.log(confirmUser)

if(nota < 4){
    console.log("Desaprobo")
    alert("Desaprobo")
}else if(nota < 7) {
    console.log("Aprobo")
    alert("Aprobo")
}else{
    console.log("Promociono")
    alert("Promociono")
}

if(nota > 7){
    console.log("Promociono")
    alert("Promociono")
}else if(nota > 4) {
    console.log("Aprobo")
    alert("Aprobo")
}else{
    console.log("Desaprobo")
    alert("Desaprobo")
}
