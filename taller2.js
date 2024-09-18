/*
	Vamos a diferenciar estos dos tipos de funciones
	1. funciones regulares
	2. funciones arrow

	La principal diferencia entre estas dos funciones (dentro lo que investigue) es que las regular function interprentan .this
	desde un contexto local y las arrow function lo detectan desde un contexto global
*/

// Estructura Funcion Regular

function myRegularFunction(num) {
	if (num % 2 === 0) {
		console.log(`${num} es un numero par.`);
	} else {
		console.log(`${num} es un numero impar.`);
	}
}

// Estructura Funcion Arrow

const myArrowFunction = (num) => {
	if (num % 2 === 0) {
		console.log(`${num} es un numero par.`);
	} else {
		console.log(`${num} es un numero impar.`);
	}
}

//test
const conjuntoNumeros = [2, 5, 10, 11, 15, 17]; // par, impar, par, impar, impar, impar
conjuntoNumeros.forEach(x => {
	myRegularFunction(x)
	myArrowFunction(x)
});


//Contexto Global y Local
const objeto = {
	f1: function (){
		console.log('F1: ', this);
	},
	f2: () => {
		console.log('F2: ', this);
	}

}
console.log(objeto.f1())
console.log(objeto.f2())

