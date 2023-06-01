// Pedir numero
const pedirn = () => {
  let numero = prompt("¿Qué número desea elegir?");
  while (isNaN(numero) || numero == 0 || numero == '' || numero == undefined) {
    numero = prompt("No has ingresado un número o has ingresado 0, por favor, escribe un numero valido");
  }
  return parseInt(numero);
};

// Obtener numeros impares entre numero elegido + 50
const nsimpar = (numero) => {
  const limit = numero + 50;
  listImpar = [];
  for (let num = numero; num <= limit; num++) {
    if (num % 2 != 0) {
      listImpar.push(num);
    }
  }
  return listImpar;
};

// Imprimir por pantalla array
const imprimirArray = (lista) => {
  const body = document.getElementsByTagName("body");
  const p = document.createElement("p");
  p.innerText = lista;
  document.body.append(p);
};

// Ejecucion
let numero = pedirn();
let numerosimpares = nsimpar(numero);
imprimirArray(numerosimpares);

