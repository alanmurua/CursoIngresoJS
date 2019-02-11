function mostrar()
{
var precio
var descuento
var precioFinal
var porcentaje
precio = parseInt (prompt ("cual es el precio?"))
descuento = parseInt  (prompt ("porcentaje de descuento?"))
porcentaje = (precio * descuento) / 100
precioFinal = precio - porcentaje
document.getElementById("elPrecioFinal").value = precioFinal



}
