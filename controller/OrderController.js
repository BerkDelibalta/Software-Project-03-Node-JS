const Order = require('../models/Order');

const { StatusCodes } = require('http-status-codes');
const { BadRequestError } = require('../errors/BadRequestError');
const { dynamoDBClient } = require('../db/AWSConnect');
const { sendNotification } = require('../mailer/sendOrderNotification');


const TABLE_NAME = 'Order';

const createOrder = async (req, res) => {
    const { clientId } = req.signedCookies;
    let { carId: id, email, dealerId } = req.body;

    if (!id && !clientId) {
        throw new BadRequestError("Prodive both car and client id's");
    }


    const params = {
        TableName: 'Car',
        Key: {
            id
        }
    };

    const car = await dynamoDBClient.get(params).promise();


    if (!car) {
        throw new CustomError.BadRequestError("No such car existing!");
    }

    const clientParams = {
        TableName: 'Client',
        Key: { email },
    }

    const client = await dynamoDBClient.get(clientParams).promise();

    const carPrice = parseInt(car.Item.price);
    const clientBudget = parseInt(client.Item.budget);

    if (carPrice > clientBudget) {
        throw new BadRequestError("Client budget isn't sufficient to order");
    }

    //change the id variable's value
    id = dealerId;
    const dealerParams = {
        TableName: 'Dealer',
        Key: { id },
    }

    const dealer = await dynamoDBClient.get(dealerParams).promise();

    if (!dealer) {
        throw new BadRequestError("No such dealer found");
    }

    if (!dealer.Item.cars.map(carObj => carObj.id).includes(car.Item.id)) {
        throw new BadRequestError("The dealer doesnt have the requested car!");
    }

    let dateObject = new Date();
    const order = new Order(id, clientId, email, dateObject.toUTCString());
    const createParams = {
        TableName: TABLE_NAME,
        Item: order,
    }

    await dynamoDBClient.put(createParams).promise();

    const orderNotification = {
        orderId: order.carId,
        dealer: dealer.Item.name,
        dealerMail: dealer.Item.email,
        customerMail: client.Item.email,
        carModel: car.Item.model,
        date: dateObject.toUTCString()
    }


    const updatedBudget = carPrice - clientBudget;
    client.Item.budget = updatedBudget.toString();

    const clientUpdateParams = {
        TableName: 'Client',
        Key: { email },
        Item: client,
    }

    await dynamoDBClient.update(clientUpdateParams).promise();
    await sendNotification(orderNotification);

    res.status(StatusCodes.OK).json(order);

}

const updateOrder = async (req, res) => {
    const { id: orderId } = req.params;
    const { updatePrice } = req.body;

    if (!orderId && !updatePrice) {
        throw new BadRequestError("Order id or update price doesnt exist");
    }

    const params = {
        TableName: 'Order',
        Key: {
            orderId,
        },
    }

    const order = await dynamoDBClient.get(params).promise();

    if (!order) {
        throw new CustomError.BadRequestError("No such order not found");
    }


    const id = order.Item.carId;

    const carParams = {
        TableName: 'Car',
        Key: { id },
    };
    const car = await dynamoDBClient.get(carParams).promise();
    if (!car) {
        throw new CustomError.BadRequestError('No such car found');
    }

    const model = car.Item.model;
    const oldPrice = car.Item.oldPrice;

    car.Item.price = updatePrice;
    const carUpdateParams = {
        TableName: 'Car',
        Key: { id },
        Item: car,
    }

    const orderUpdateParams = {
        TableName: TABLE_NAME,
        Key: { orderId },
        Item: { order },
    }

    await dynamoDBClient.update(carUpdateParams).promise();
    await dynamoDBClient.update(orderUpdateParams).promise();


    res.status(StatusCodes.OK).json({
        Order: {
            message: 'Order no:' + orderId + ' updated successfully'
        }
        ,
        Car: {
            updatedCar: model,
            oldPrice: oldPrice,
            newPrice: updatePrice,
        }
    });

}

const deleteOrder = async (req, res) => {
    const { id: orderId } = req.params;

    if (!orderId) {
        throw new BadRequestError("No such orderId");
    }

    const params = {
        TableName: TABLE_NAME,
        Key: { orderId }
    }

    const order = await dynamoDBClient.get(params).promise();

    if (!order) {
        throw new BadRequestError("No such order");
    }

    await dynamoDBClient.delete(params).promise();

    res.status(StatusCodes.OK).send("Order successfully deleted");
}

const getSingleOrder = async (req, res) => {
    const { id: orderId } = req.params;

    if (!orderId) {
        throw new BadRequestError("No such orderId");
    }

    const params = {
        TableName: TABLE_NAME,
        Key: { orderId }
    }

    const order = await dynamoDBClient.get(params).promise();

    if (!order) {
        throw new BadRequestError("No such order");
    }

    res.status(StatusCodes.OK).json(order);
}


const getOrders = async (req, res) => {
    const params = {
        TableName: TABLE_NAME,
    }

    const orders = await dynamoDBClient.scan(params).promise();

    res.status(StatusCodes.OK).json({ Orders: orders, count: orders.length });
}


module.exports = {
    createOrder,
    updateOrder,
    deleteOrder,
    getSingleOrder,
    getOrders
}
