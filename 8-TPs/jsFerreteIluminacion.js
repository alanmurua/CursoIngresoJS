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
     var lamparitas
     var cantidadLamparas
     var marca
     var precioDescuento
     var lamparasMasCantidad
     var impuestos
     lamparitas = 35
     cantidadLamparas  = document.getElementById("Cantidad").value 
     marca = document.getElementById("Marca").value
     lamparasMasCantidad = parseInt (lamparitas) * parseInt (cantidadLamparas)
     if (cantidadLamparas >= 6)
    precioDescuento = 50 * lamparasMasCantidad / 100
     else
     if (cantidadLamparas == 5 && marca === "ArgentinaLuz")
     precioDescuento = (40 * lamparasMasCantidad) / 100
     if (cantidadLamparas ==5 && marca !== "ArgentinaLuz" )
     precioDescuento = (30 * lamparasMasCantidad) / 100
     else
     if(cantidadLamparas ==4 && marca ==="ArgentinaLuz" || marca === "FelipeLamparas")
     precioDescuento = (25 * lamparasMasCantidad) / 100
     if (cantidadLamparas ==4 && marca !=="ArgentinaLuz" || marca !== "FelipeLamparas")
     precioDescuento = (20 * lamparasMasCantidad) / 100
     else
     if(cantidadLamparas == 3 && marca === "ArgentinaLuz")
     precioDescuento = (15 * lamparasMasCantidad) / 100
     if (cantidadLamparas == 3 && marca === "FelipeLamparas")
     precioDescuento = (10 * lamparasMasCantidad) / 100
     if (cantidadLamparas ==3 && marca !=="ArgentinaLuz" || marca !== "FelipeLamparas")
     precioDescuento = (5 * lamparasMasCantidad) / 100
     else
     document.getElementById("precioDescuento").value = precioDescuento
     if (preciodescuento > 120)
     impuestos = 10* preciodescuento / 100
     alert("IIBB usted pago " +impuesto+" en impuesto")

    
 
     


    

     
    
    




}
