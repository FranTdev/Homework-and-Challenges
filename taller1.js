/*
Los arrays - arreglos son estructuras de datos que permiten almacenar multiples valores en una sola variable.
*/
let miArray = [1, 2, 3];

/*
push() Permite agrear elementos al final del array
*/
miArray.push(4);

/*
pop() Elimina el ultimo elemento del array y lo devuelve
*/

let ultimoElemento = miArray.pop();
console.log("El ultimo elemento es: " + ultimoElemento);

/*
shift() Elimina el primer elemento del array y lo devuelve
*/

let primerElemento = miArray.shift();
console.log("El primer elemento es: " + primerElemento);

/*
unshift() Agrega uno o mas elementos al principio de la array
*/
miArray.unshift(1);

/*
splice() Añade, elimino o remplaza dentro de un array
*/

miArray.splice(1, 1, 3);
//En este caso estoy remplazando el 2 (en el indixe 1) por un 3

/*
slice()
*/
let nuevoArray = miArray.slice(0, 2); 
// Crea un nuevo array con los elementos desde el índice 0 hasta antes del índice 2

console.log("El nuevo array es: " + nuevoArray);

/*
indexOf() Devuelve el primer índice en el que aparece un elemento en el array, o -1 si no se encuentra
*/

let indice = miArray.indexOf(3);
console.log("El índice del número 3 es: " + indice);

/*
includes() Comprueba si un array incluye un determinado elemento y devuelve true o false
*/

let existe = miArray.includes(3);
console.log("¿El array incluye el número 3? " + existe);

/*
concat() Se utiliza para unir dos o más arrays. Este método no cambia los arrays existentes, sino que devuelve un nuevo array.
*/

let otroArray = [4, 5, 6];
let arrayConcatenado = miArray.concat(otroArray);
console.log("Array concatenado: " + arrayConcatenado);

/*
reverse() Invierte el orden de los elementos del array
*/

miArray.reverse();
console.log("Array invertido: " + miArray);

/*
join() Une todos los elementos de un array en una cadena
*/

let cadena = miArray.join('-');
console.log("Array unido en cadena: " + cadena);
