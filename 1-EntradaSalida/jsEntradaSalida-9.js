/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
    var num1
    var aumento
    var porcentaje
    num1 =parseInt (document.getElementById("sueldo").value)
    porcentaje = num1 * 0.1
    aumento =(num1) + parseInt(porcentaje)
   document.getElementById("resultado").value = aumento
      
    
    

    }

