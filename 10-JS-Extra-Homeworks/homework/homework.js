// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto) {
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  var matriz = [];
  for (clave in objeto) {
    matriz.push([clave, objeto[clave]]);
  }
  return matriz;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  const letras = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'ñ', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var objeto = {};
  for (i = 0; i < letras.length; i++) {
    var counter = 0;
    for (j = 0; j < string.length; j++) {
      if (letras[i] === string.charAt(j)) {
        counter++;
      }
    }
    if (counter !== 0) {
      objeto[letras[i]] = counter;
    }
  }
  return objeto;
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  var minusculas = '';
  var mayusculas = '';
  for (i = 0; i < s.length; i++) {
    if (s.charAt(i) === s.charAt(i).toLowerCase()) {
      minusculas = minusculas + s.charAt(i);
    }
    else {
      mayusculas = mayusculas + s.charAt(i);
    }
  }
  return mayusculas + minusculas;
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  const palabras = str.split(' ');
  var palabrasInvertidas = [];
  palabras.forEach(element => {
    var invertida = '';
    for (i = element.length - 1; i >= 0; i--) {
      invertida = invertida + element.charAt(i);
    }
    palabrasInvertidas.push(invertida);
  });
  return palabrasInvertidas.join(' ');
}


function capicua(numero) {
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  var string = numero.toString();
  var answer = 'Es capicua';
  for (i = 0; i < string.length / 2; i++) {
    if (string.charAt(i) !== string.charAt(string.length - 1 - i)) {
      answer = 'No es capicua';
    }
  }
  return answer;
}


function deleteAbc(cadena) {
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí

  return cadena.split('').filter(letter => letter !== 'a' && letter !== 'b' && letter !== 'c').join('');

  /*ANTES:
  var nuevaCadena = '';
  for (i = 0; i < cadena.length; i++) {
    if (cadena.charAt(i) !== 'a' && cadena.charAt(i) !== 'b' && cadena.charAt(i) !== 'c') {
      nuevaCadena = nuevaCadena + cadena.charAt(i)
    }
  }
  return nuevaCadena;*/

}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  Callback = (a, b) => a.length - b.length;
  /*ANTES:
  function Callback(a, b) {
    return a.length - b.length;
  }*/
  return arr.sort(Callback);
}


function buscoInterseccion(arreglo1, arreglo2) {
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí
  var array = [];
  for (i = 0; i < arreglo1.length; i++) {
    if (arreglo2.includes(arreglo1[i])) {
      array.push(arreglo1[i]);
    }
  }
  return array;
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  deObjetoAmatriz,
  numberOfCharacters,
  capToFront,
  asAmirror,
  capicua,
  deleteAbc,
  sortArray,
  buscoInterseccion,
};

