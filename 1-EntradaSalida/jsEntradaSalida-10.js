/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var num1
    var descuento
    var porcentaje
    num1 = parseInt (document.getElementById("importe").value)
    porcentaje = num1 * (25 / 100)
    descuento = num1 - parseInt(porcentaje)
    document.getElementById("resultado").value = descuento
}
