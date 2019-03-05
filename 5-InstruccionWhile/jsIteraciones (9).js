function mostrar()
{

  var contador=0;
  var numero
  var numeroMaximo
  var numeroMinimo
  var primeraVez = true
  var respuesta
  // declarar variables

  

  do{
    do{
      numero = prompt ("ingrese un numero")
      numero = parseInt (numero)
    } while (isNaN(numero));
    if (primeraVez){
      primeraVez = false;
      numeroMaximo = numero;
      numeroMinimo = numero;
    }else{
      if (numero > numeroMaximo){
        numeroMaximo = numero
      }
      if (numero < numeroMinimo){
        numeroMinimo = numero
      }
      respuesta = confirm ("desea continuar?");
    }
  } while (respuesta != false);
  document.getElementById("maximo").value = numeroMaximo
  document.getElementById("minimo").value = numeroMinimo
}//FIN DE LA FUNCIÓN
