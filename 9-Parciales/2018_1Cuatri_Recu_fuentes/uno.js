
function mostrar()
{
    var mascota1
    var mascota2    
    var mascota1Kilos
    var mascota2Kilos
    mascota1 = prompt ("ingrese nombre de su primer mascota")
    mascota2 = prompt ("ingrese nombre de su segunda mascota")
    mascota1Kilos = prompt("ingrese los kilos de su primer mascota")
    mascota2Kilos = prompt("ingrese los kilos de su segunda mascota")
    kilosTotales =parseInt (mascota1Kilos) + parseInt (mascota2Kilos)
    alert ("tenes dos mascotas "+mascota1+ " y "+mascota2+" que pesan "+mascota1Kilos+ " y "+mascota2Kilos+" kilos. La suma de los kilos es de "+kilosTotales)

}
