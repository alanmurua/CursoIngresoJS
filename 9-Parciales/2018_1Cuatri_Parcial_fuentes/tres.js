function mostrar()
{
var precio
var descuento
var descuentoResultado
var elPrecioFinal
precio = parseInt (prompt ("cual es el precio?"))
descuento = parseInt  (prompt ("porcentaje de descuento?"))
descuentoResultado =descuento *10 /100
precioFinal = precio - descuentoResultado
document.getElementById("elPrecioFinal").value = precioFinal



}
