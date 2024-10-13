class Person {
    constructor(name) {
        this.name = name;
        this.children = [];
    }

    addChild(child) {
        this.children.push(child)
    }

    /* Me lo dio chatgpt, se me iba a explotar las neuronas si hacia este que me gusto yo mismo*/
    display(prefix = "", isLast = true) {
        console.log(prefix + (isLast ? "└── " : "├── ") + this.name);

        const newPrefix = prefix + (isLast ? "    " : "│   ");
        
        this.children.forEach((child, index) => {
            const isLastChild = index === this.children.length - 1;
            child.display(newPrefix, isLastChild);
        });
    }
    /*
    display(indent = 0) {
        console.log(`${'_'.repeat(indent)}${this.name}`);
        this.children.forEach(child => child.display(indent + 2));
    }
    */
}

let root = new Person('Francisco');
let child1 = new Person('Francia');
let child2 = new Person('Junior');
let granChild1 = new Person('Isabel');
let grandChild2 = new Person('Tomas');

root.addChild(child1);
root.addChild(child2);

child1.addChild(granChild1);
child2.addChild(grandChild2);

root.display();