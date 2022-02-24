const names =  ["Diego", "Mariana", "Gonzalo", "Carla", "Alan"]
console.log(names)

//FOREACH
names.forEach(function(name){
    console.log(name)
})

//SLICE
const slicedNames = names.slice(1,4)
console.log(slicedNames)

//MAP
const namesLegths = names.map(function(name){
    return name.length
})
console.log(namesLegths)

//JOIN

const stringNames = names.join(" ")
console.log(stringNames)

//FILTER 

function checkNameEnding(name){
    return name[name.length-1] === "a"
}

const filteredNames = names.filter(checkNameEnding)
console.log(filteredNames)



