function mostrar()
{

	var contador=0;
	var suma=0;
  var respuesta='si';
  respuesta = confirm ()
  while (respuesta != false) {
    contador++;
    numero = prompt ("ingrese un numero");
    numero = parseInt (numero);
    respuesta = confirm()
    while (isNaN(numero)){
      numero = prompt ("Error, ingrese un numero");
      numero = parseInt (numero);
      break;
    }
    suma += numero; //+= es igual a suma = suma + numero

    promedio = suma / contador;

    document.getElementById('suma').value=suma;
    document.getElementById('promedio').value=suma/contador;
  }
}//FIN DE LA FUNCIÓN
