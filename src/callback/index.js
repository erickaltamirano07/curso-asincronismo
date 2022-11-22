//Ejemplo1
function suma(num1, num2) {
  return num1 + num2;
}
//No es necesario que se llame callbak la funcion que se
//pasa como parametro
function calc(num1, num2, callback) {
  return callback(num1, num2);
}

console.log(calc(2, 2, suma));

//Ejemplo 2
setTimeout(function () {
  //Se demota 2 segundos en Ejecutar
  console.log("Hola JavaScript");
}, 2000);
//Ejmplo 3
function gretting(name) {
  console.log(`Hola ${name}`);
}
setTimeout(gretting, 2000, "Erick");
