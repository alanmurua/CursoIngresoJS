/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var num1
    var num2
    var descuento
    var porcentaje
    num1 = document.getElementById("importe").value
    porcentaje = num1 * 0.25
    descuento = parseInt(num1) - parseInt(porcentaje)
    num2 = descuento
    document.getElementById("resultado").value = num2
}
