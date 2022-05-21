const { v1: uuidv1 } = require('uuid');

class Order {
    constructor(carId, clientId, date){
        this.orderId = uuidv1();
        this.carId = carId;
        this.clientId = clientId;
        this.date = date;
    }

    getOrderId(){return this.id}

    getCarId(){return this.carId}

    getclientId(){return this.clientId}

    getDate(){return this.date}

}

module.exports = Order;