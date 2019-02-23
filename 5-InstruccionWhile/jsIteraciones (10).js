function mostrar()
{

  var contador=0;
  var numero
  var sumaNegativo
  var sumaPositivos
  var contadorPositivos=0
  var contadorNegativos=0
  var contadorCeros=0
  var cantidadPares=0
	//declarar contadores y variables

  var respuesta ="si";
   do{
   do{
    numero = prompt ("ingrese un numero")
    numero = parseInt (numero)
  }while (isNaN(numero));
   if   (num <0) {
      sumaNegativo += numero;
      contadorNegativos++;
  }else{
   if   (numero > 0){
          sumaPositivos += numero;
          contadorPositivos++;
  }else{
          contadorCeros++;
   if   (numero % 2==0){
          cantidadPares++;
          }
          respuesta = prompt ();
  }while (respuesta == "si");


          }

  }





}//FIN DE LA FUNCIÓN
