// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  var newArray =[];
  var propiedades = Object.getOwnPropertyNames(objeto);
  for(var i = 0; i< propiedades.length; i++){
      newArray.push([propiedades[i], objeto[propiedades[i]]]);
      console.log(newArray);
  }
  return newArray;
}

function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  // var string ='aracataca';
  var nuevaMatriz = {};
  var sumaLetras ='';
  
  for(var i =0; i<string.length;i++) {
      if(sumaLetras.includes(string[i])) {
          nuevaMatriz[string[i]] = nuevaMatriz[string[i]] + 1;
      } else {
          sumaLetras = `${sumaLetras}${string[i]}`;
          nuevaMatriz[string[i]] = 1; 
      } 
  }
  return nuevaMatriz;
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la string.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  var mayusculas = '';
  var minusculas = '';
  var resultado = '';

  for(var i = 0;i<s.length;i++){
      if(s[i] === s[i].toUpperCase()){
          // console.log(s[i] + ' es mayuscula');
          mayusculas = mayusculas + s[i];
      } else{
          // console.log(s[i] + ' es minuscula');
          minusculas = minusculas +s[i];       
      }
      resultado = mayusculas+minusculas;
      
  } 
  return resultado;
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus strings invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí

  var palabraReves = ''
  var matrizStr ='';

  matrizStr = str.split(' ');
  for(var i = 0; i<matrizStr.length; i++){
      palabraReves = matrizStr[i].split('').reverse().join('');
      matrizStr[i]= palabraReves;
  }
  return matrizStr = matrizStr.join(' ');
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  var numeroReves= '';
  numero = numero.toString();
  numeroReves = numero.split('').reverse().join('');
  if(numero === numeroReves){
      console.log('Es');
      return "Es capicua"
  } else{
      console.log('No es');
      return "No es capicua"; 
  }
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  var newcadena = [];
  newcadena = cadena.split('');
  for (var i = 0; i<cadena.length;i++){
      if(newcadena[i] === 'a'){
          newcadena.splice(i, 1);
          i=i-1;
      } else if(newcadena[i] === 'b'){
          newcadena.splice(i, 1);
          i=i-1;
      } else if(newcadena[i] === 'c'){
          newcadena.splice(i, 1);
          i=i-1;
      }
  }
  return newcadena.join('');
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  function compare(a,b) {
    for(var i =0;i<arr.length;i++){
        if(a.length > b.length){
            return 1;
        }
        if(a.length < b.length){
            return -1;
        }
        return 0;
    }
  }
  return arr.sort(compare);
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
  var newarreglo =[];

  for(var i=0;i<arreglo1.length;i++){
      for(var j=0;j<arreglo2.length;j++){
          if(arreglo1[i] === arreglo2[j]){
              newarreglo.push(arreglo1[i]);
          }
      }
  }
  return newarreglo;
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

