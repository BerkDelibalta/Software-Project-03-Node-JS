const { v1: uuidv1 } = require('uuid');

class Client {
    constructor(clientId,name,surname,email,password,budget,role){
        this.id = clientId;
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
