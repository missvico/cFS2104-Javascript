const fetchTodo = function (){
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(function(result){
        return result.json()
    }).then(function(result){
        console.log(result)
    }).catch(function(error){
        console.log(error)
    })
}

const asyncTodo = async function(){
    try{
        const fetchResult = await fetch('https://jsonplaceholder.typicode.com/todos/1')
        const jsonResult = await fetchResult.json()
        console.log(jsonResult)
    }catch(error){
        console.log(error)
    }
}





