function cargarPersona()
{
  var edad
  var sexo
  var altura
  var peso
  var contador = 0
  var alturaMayor
  var alturaMayorF
  var primeravez = true
  edad = parseInt (edad)
  altura = parseInt (altura)
  peso = parseInt (peso)
  while(contador < 5){
    contador++
    altura = prompt ("ingrese la altura")
    while(altura <0 || altura >250)
    altura = prompt ("Error, ingrese altura valida")
    sexo = prompt ("ingrese el sexo")
    while (sexo != f && sexo != m)
    sexo = prompt ("Error, ingrese un sexo valido")
    peso = prompt ("ingrese el peso")
    while (peso < 40 || peso > 90)
    peso = prompt ("Error, ingrese un peso valido")
    edad = prompt ("ingrese la edad")
    while (edad < 20 || edad > 30)
    edad = prompt ("Error, ingrese una edad valida") 
    if (primeravez){
      primeravez = false
      alturaMayor = altura;
      alturaMayorF = altura;
      
    } else {
      if (altura > alturaMayor)
      alturamayor = altura
      if (sexo == "f" && altura > alturaMayorF)
      alturaMayorF = altura
    }
  }    
}//FIN DE LA FUNCIÓN
  

