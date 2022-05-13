const { v1: uuidv1 } = require('uuid');

class Client {
    constructor(name,surname,age,budget){
        this.id = uuidv1();
        this.name = name;
        this.surname = surname;
        this.age = age;
        this.budget = budget;
    }

    getId(){return this.id;}

    getName(){return this.name;}

    getSurname(){return this.surname;}

    getAge(){return this.age;}

    getBudget(){return this.budget;}
}

module.exports = Client;