// Defino la clase persona

class Person {
    constructor(name, amount, arrivalTime) {
        this.name = name;
        this.amount = amount;
        this.arrivalTime = arrivalTime;
    }

    toString() {
        return `Name: ${this.name}, Amount: ${this.amount}, Arribal: ${this.arrivalTime}`;
    }
}

//En este caso escogi trabajar con colas debido que es el comportamiento real que se tiene al usar este tipo de cajeros

let atmCola = [];

atmCola.push(new Person("Francisco", 5000, "00:05"));
atmCola.push(new Person("Edward", 10000, "00:35"));
atmCola.push(new Person("Jonathan", 25000, "01:00"));

while (atmCola.length > 0) {
    let currentPerson = atmCola.shift();
    console.log(`Assisting ${currentPerson.toString()}`)
}

/* 
Otra solucion seria en pila
let atmPila = [];

atmPila.push(new Person("Francisco", 5000, "00:05"));
atmPila.push(new Person("Edward", 10000, "00:35"));
atmPila.push(new Person("Jonathan", 25000, "01:00"));

while (atmPila.length > 0) {
    let currentPerson = atmPila.pop();
    console.log(`Assisting ${currentPerson}`);
}
*/