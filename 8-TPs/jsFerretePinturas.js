/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{   
    var farenheit
    var celsius
    farenheit = document.getElementById("Temperatura").value
    farenheit = parseInt (farenheit)
    celsius = (farenheit - 32) / 1.8
    alert (farenheit+ " grados farenheit son "+celsius+ " grados celsius")
}

function CentigradosFahrenheit () 
{
    
    var farenheit
    var celsius
    celsius = document.getElementById("Temperatura").value
    celsius = parseInt (celsius)    
    farenheit = (celsius * 1.8) + 32
    alert (celsius+ " grados celsius son "+farenheit+ " grados farenheit")
}
