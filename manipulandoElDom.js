const title = document.querySelector("h1")
//<h1>​ Aprendiendo a usar document​</h1>​

const allParag = document.querySelectorAll("p")
allParag.forEach(p => console.log(p))

const firstPara = document.getElementById("primer-parrafo")
//<p id=​"primer-parrafo" class=​"special">​…​</p>​"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat hic repellendus, voluptatem laborum similique dignissimos, vitae accusamus doloremque natus facilis dicta quia! Ut dolorum repudiandae praesentium omnis at maxime laboriosam?"</p>​

const listElements = document.getElementsByClassName("list-element")

const button = document.getElementById("main-button")

button.addEventListener("click", function(event){
    console.log(event)
    alert("Me cliqueaste")
})

const input = document.getElementById("main-input")

input.addEventListener("change",function(event){
    console.log(event.target.value)
})