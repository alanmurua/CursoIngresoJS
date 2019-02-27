function mostrar()
{

  var contador=0;
  var numero
  var numeroMaximo
  var numeroMinimo
  var bandera = true
  var respuesta
	// declarar variables

  respuesta= confirm ();

  while (respuesta != false){
 do{
 numero = prompt ("ingrese un numero")
 numero = parseInt (numero)}
  while (isNaN(numero));
  if (bandera){
  bandera = false;
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
  document.getElementById("maximo").value = numeroMaximo
  document.getElementById("minimo").value = numeroMinimo









}
}
}//FIN DE LA FUNCIÓN
