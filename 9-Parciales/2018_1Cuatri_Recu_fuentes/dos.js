function mostrar()
{
   var compra
   var descuento
   var iva
   compra = document.getElementById("elNombre")
   descuento = document.getElementById("laLocalidad")
   parseInt (compra)
   parseInt (descuento)
   iva = compra *0,25
   alert ("tu compra es de $ " +compra+" y tenes un descuento del 10%, queda en "+descuento+" mas el iva es"+iva)  

}
