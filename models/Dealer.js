const { v1: uuidv1 } = require('uuid');

class Dealer {
    constructor(name,cars = []) {
        this.id = uuidv1();
        this.name = name;
        this.cars = cars;
    }

    getName() { return this.name; }

    getCars() { return this.cars; }

}

module.exports = Dealer;