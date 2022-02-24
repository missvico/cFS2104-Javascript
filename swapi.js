const getCharacter = function(id){
    fetch(`https://swapi.dev/api/people/${id}`)
    .then(function(response){
        return response.json()
    }).then(function(character){
        console.log(`El nombre del personaje seleccionado es ${character.name}`)
        return character
    }).then(function(character){
        return fetch(character.homeworld)
    }).then(function(planetResponse){
        return planetResponse.json()
    }).then(function(planet){
        console.log(`Nacio en el planeta ${planet.name}`)
    })
    .catch(function(error){
        console.log(error)
    })
}

const getCharacterAsync = async function(id){
    try{
        const characteResponse = await fetch(`https://swapi.dev/api/people/${id}`)
        const character = await characterResponse.json()
        console.log(`El nombre del personaje seleccionado es ${character.name}`)
        const planetResponse = await fetch(character.homeworld)
        const planet = await planetResponse.json()
        console.log(`Nacio en el planeta ${planet.name}`)
    }catch(error){
        console.log(error)
    }
}

