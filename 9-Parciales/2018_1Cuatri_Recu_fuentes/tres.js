function mostrar()
{
var amigos
var total
var propina
var iva
var precioPorPersona
total = prompt ("total a pagar")
amigos = prompt ("cantidad de amigos")
parseInt (amigos)
parseInt (total)
propina = total /100 * 10
parseInt (propina)
iva = parseInt ((total + propina) * 0,21) 
precioTotal = parseInt  (total) + parseInt (propina)
precioPorPersona = precioTotal / parseInt  (amigos)
alert("La suma de $ " + total + " entre " + amigos + " personas, mas $ " +propina+ " (propina) es de " +precioPorPersona+ " cada persona" +iva )
}
