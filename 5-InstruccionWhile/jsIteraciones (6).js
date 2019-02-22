function mostrar()
{

	var contador=0;
  var suma=0;
  var numero
  var promedio
  while (contador <5){
    contador++;
    numero = prompt ("ingrese un numero");
    numero = parseInt (numero);
    while (isNaN(numero)){
    numero = prompt ("Error, ingrese un numero");
    numero = parseInt (numero);
  }
  suma += numero; //+= es igual a suma = suma + numero

promedio = suma / contador;

}



document.getElementById('suma').value=suma;
document.getElementById('promedio').value=promedio;



}//FIN DE LA FUNCIÓN
