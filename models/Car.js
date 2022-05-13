const { v1: uuidv1 } = require('uuid');

class Car {
    constructor(model,year,engineType,price){
        this.id = uuidv1();
        this.model = model;
        this.year = year;
        this.engineType = engineType;
        this.price = price;
    }

    getModel(){
        return this.model;
    }

    getYear(){
        return this.year;
    }

    getEngineType(){
        return this.engineType;
    }

    getPrice(){
        return this.price;
    }
}

module.exports = Car;
