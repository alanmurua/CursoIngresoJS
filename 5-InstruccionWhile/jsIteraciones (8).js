function mostrar()
{
  var positivo=0;
  var negativo=1;
  var numero 
  var respuesta
  respuesta = confirm ();
  while (respuesta != false) {
    numero = prompt("ingrese un numero")
    numero = parseInt (numero)
    respuesta = confirm ();
    if (numero <0)
      negativo = numero * negativo
    else
      positivo = numero + positivo





    document.getElementById('suma').value=positivo;
    document.getElementById('producto').value=negativo;
  }
}//FIN DE LA FUNCIÓN
