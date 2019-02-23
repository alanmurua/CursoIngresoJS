function mostrar()
{

	var contador=0;
	var positivo=0;
  var negativo=1;
  var usuario
  var numero
  usuario = prompt ("ingrese la cantidad de numeros")
  usuario = parseInt (usuario)
  while (contador < usuario){
  contador++;
  numero = prompt("ingrese un numero")
  numero = parseInt (numero)
  if (numero <0)
  negativo =numero * negativo
  else
  positivo =numero + positivo





document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;
  }
}//FIN DE LA FUNCIÓN
