let a = 2
const b = 3
const c = 5

//SUMA
console.log("2 + 3 =", a+b)

//RESTA
console.log("5 - 2 =",c-a)

//MULTIPLICACION
console.log("2*3 =",a*b)

//DIVISION
console.log("3/2 =",b/a)

//RESTO o REMAINDER
console.log("5 % 2 = ", c%a)

//POTENCIA
console.log("5**2 = ", c**2)

//CONVERSION DE TIPO
const conversion = "2" + 2
console.log(conversion) //"22" - ME LO PASA A STRING PORQUE INTERPRETA QUE ESTOY CONCATENANDO

const conversion2 = "2" - 1
console.log(conversion2) //1 - pasa el string a un numero, interpreta que estoy restando numeros

//CONVERSIONES
Number("23")
parseInt("23")
String(2)

//INCREMENTADORES 

++a

//DECREMENTO

--a

//OPERADORES COMPARATIVOS

//MAYOR
console.log(b>a) //TRUE

//MENOR 
console.log(b<a) //FALSE

//MAYOR O IGUAL
console.log(b>=a) //TRUE

//MENOR O IGUAL 
console.log(b<=a) //FALSE
console.log(a<=2) //TRUE

//IGUALDAD ESTRICTA
console.log(b===a)//FALSE
console.log(a===2)//TRUE
console.log(a==="2") //FALSE

//IGUALDAD NO ESTRICTA
console.log(b==a)//FALSE
console.log(a==2)//TRUE
console.log(a=="2") //TRUE porque convierte tipo

//DESIGUALDAD ESTRICTA
console.log(b!==a)//TRUE
console.log(a!==2)//FALSE
console.log(a!=="2") //TRUE porque NO convierte tipo

//DESIGUALDAD NO ESTRICTA
console.log(b!=a)//TRUE
console.log(a!=2)//FALSE
console.log(a!="2") //FALSE porque convierte tipo


// OR
console.log(0>1 || 2!==2 || 5<1)
console.log(3>1 || 2!==2 || 5<1)

//AND

0>1 || 2!==2 || ""
//''
3211 && "" && 0
//''
Boolean(3211)
//true
Boolean("")
//false
3211  && "hola" && "nombre"
//"nombre"

3>1 && 2!==2 && 5<1
//false
3>1 && 2!==1 && 5<10
//true

//NOT

!2
false
Boolean(2)
true
!0
true
!true
false
!false
true
! (2!==2)
true
Boolean(2)
true
!!2
true
