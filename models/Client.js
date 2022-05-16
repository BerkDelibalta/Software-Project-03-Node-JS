const { v1: uuidv1 } = require('uuid');
const bcrypt = require('bcryptjs');

class Client {
    constructor(name,surname,email,password,budget,role){
        this.id = uuidv1();
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.password = password;
        this.role = role;
        this.budget = budget;
    }

    getId(){return this.id;}

    getName(){return this.name;}

    getSurname(){return this.surname;}

    getEmail(){return this.email;}

    getPassword(){return this.password;}

    getBudget(){return this.budget;}

    getRole(){return this.role;}

}

module.exports = Client;