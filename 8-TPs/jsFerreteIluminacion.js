/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{

    var precio = 35
    var cantidad
    var marca
    var total
    var totalImpuestos
    cantidad = document.getElementById("Cantidad").Value
    cantidad = parseInt (cantidad)
    precio = parseInt (precio)
    total = parseInt (total)
    marca = document.getElementById("Marca").Value
    switch (cantidad){
        case 5:
        if (marca == "ArgentinaLuz")
        total = cantidad * precio * 0.4
        else 
        total = cantidad * precio * 0.3
        break;
        case 4:
        if (marca == "ArgentinaLuz" || "FelipeLamparas")
        total = cantidad * precio * 0.25
        else
        total = cantidad * precio * 0.20
        break;
        case 3:
        if (marca == "ArgentinaLuz")
        total = cantidad * precio * 0.15
        if (marca == "FelipeLamparas")
        total = cantidad * precio * 0.10
        else
        total = cantidad * precio * 0.05
        break;
        default:
        if (cantidad > 5)
        total = cantidad * precio * 0.5
    }
    if (total > 120){
        totalImpuestos = (total * 10) /100
        alert ("Usted pago " +totalImpuestos+ " pesos por un impuesto del 10%")
    }
    document.getElementById("precioDescuento").value = total

        






    
 
     


    

     
    
    




}
