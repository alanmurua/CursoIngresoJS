function mostrar()
{

	var contador=0;
	var suma=0;
  var respuesta='si';
  var usuario
  usuario = prompt ("ingrese la cantidad de numeros")
  usuario = parseInt (usuario)
  while (contador < usuario){
    contador++;
    numero = prompt ("ingrese un numero");
    numero = parseInt (numero);
    while (isNaN(numero)){
    numero = prompt ("Error, ingrese un numero");
    numero = parseInt (numero);
  }
  suma += numero; //+= es igual a suma = suma + numero

promedio = suma / contador;

document.getElementById('suma').value=suma;
document.getElementById('promedio').value=suma/contador;
}
}//FIN DE LA FUNCIÓN
