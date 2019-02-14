function mostrar()
{
var num1
var num2
var resta
var suma
num1 =parseInt (prompt ("ingrese numero 1").value)
num2 =parseInt (prompt ("ingrese numero 2").value)
resta = num1 - num2
suma = num1 + num2
if (num1 == num2)
alert ("los numeros " +num1+" y " +num2+" son iguales")
else
if (num1 > num2)
alert ("la resta de " +num1+ " y " +num2+ " da como resultado "+ resta) 
else
alert("la suma de " +num1+ " y " +num2+ " da como resultado "+ suma)
if (suma > parseInt (10))
alert (suma+  " supero el 10")







}
