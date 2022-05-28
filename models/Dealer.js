const { v1: uuidv1 } = require('uuid');

class Dealer {
    constructor(name,email,cars) {
        this.id = uuidv1();
        this.name = name;
        this.email = email;
        this.cars = cars;
    }

    getId() { return this.id; }

    getName() { return this.name; }

    getEmail(){return this.email}

    getCars() { return this.cars; }

}

module.exports = Dealer;