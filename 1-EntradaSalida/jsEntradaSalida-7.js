/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
    var num1
    var num2
    var sumar
    num1 = document.getElementById("numeroUno").value
    num2 = document.getElementById("numeroDos").value
    sumar = parseInt (num1) + parseInt (num2)
    alert (" la suma es " + sumar)
}

function restar()
{
	var num1
    var num2
    var restar
    num1 = document.getElementById("numeroUno").value
    num2 = document.getElementById("numeroDos").value
    restar = parseInt (num1) - parseInt (num2)
    alert (" la resta es " + restar)
}

function multiplicar()
{ 
	var num1
    var num2
    var multiplicar
    num1 = document.getElementById("numeroUno").value
    num2 = document.getElementById("numeroDos").value
    multiplicar = parseInt (num1) * parseInt (num2)
    alert (" la multiplicacion es " + multiplicar)
}

function dividir()
{
	var num1
    var num2
    var dividir
    num1 = document.getElementById("numeroUno").value
    num2 = document.getElementById("numeroDos").value
    dividir = parseInt (num1) / parseInt (num2)
    alert (" la division es " + dividir)
}

