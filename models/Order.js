const { v1: uuidv1 } = require('uuid');

class Order {
    constructor(carId, clientId, email, date){
        this.orderId = uuidv1();
        this.carId = carId;
        this.clientId = clientId;
        this.email = email;
        this.date = date;
    }

    getOrderId(){return this.id}

    getCarId(){return this.carId}

    getclientId(){return this.clientId}

    getEmail(){return this.email}

    getDate(){return this.date}

}

module.exports = Order;