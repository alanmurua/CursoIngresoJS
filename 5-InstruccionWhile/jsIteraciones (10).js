function mostrar() {

  var numero
  var sumaNegativo = 0;
  var sumaPositivos = 0;
  var contadorPositivos =0;
  var contadorNegativos =0;
  var contadorCeros =0;
  var cantidadPares =0;
  //declarar contadores y variables

  var respuesta = true;
  do{
    do{
      numero = prompt ("ingrese un numero")
      numero = parseInt (numero)
    } while (isNaN(numero));
    if(numero < 0) {
      sumaNegativo += numero;
      contadorNegativos++;
    }else{
      if(numero > 0) {
        sumaPositivos += numero;
        contadorPositivos++;
      } else {
        contadorCeros++;
        if(numero % 2 == 0){
          cantidadPares++;
        }
      }
    }
    respuesta = confirm ();
  }while (respuesta == true);
  document.write ("suma de negativos: " + sumaNegativo);
  document.write (" suma de positivos: " + sumaPositivos);
  document.write (" cantidad de positivos: " + contadorPositivos);
  document.write (" cantidad de negativos: " +contadorNegativos);
  document.write (" cantidad de ceros: " + contadorCeros);
  document.write (" cantidad de pares: " + cantidadPares);
  document.write (" promedio de positivos: "+ (sumaPositivos / contadorPositivos));
  document.write (" promedio de negativos: " + (sumaNegativo / contadorNegativos));
  document.write (" la diferencia de entre positivos y negativos es: " + (sumaPositivos -sumaNegativo));



  
}//FIN DE LA FUNCIÓN
