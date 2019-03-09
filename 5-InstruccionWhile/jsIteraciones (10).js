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
  document.write ("promedio de negativos: " + (sumaNegativo / contadorNegativos));



  
}//FIN DE LA FUNCIÓN
