const Car = require('../models/Car');

const { StatusCodes } = require('http-status-codes');
const CustomError = require('../errors/index');
const { dynamoDBClient } = require('../db/AWSConnect');

const TABLE_NAME = 'Car';

const getAllCars = async (req, res) => {
    const params = {
        TableName: TABLE_NAME,
    };
    const cars = await dynamoDBClient.scan(params).promise();
    if (cars == {}) {
        throw new CustomError.NotFoundError('No cars found');
    } else {
        res.status(StatusCodes.OK).json({ cars, count: cars.length });
    }
}

const getSingleCar = async (req, res) => {
    const { id } = req.params;
    const params = {
        TableName: TABLE_NAME,
        Key: {
            id,
        },
    };

    const car = await dynamoDBClient.get(params).promise();

    if (car == {}) {
        throw new CustomError.NotFoundError('No car found with id ' + carId);
    } else {
        res.status(StatusCodes.OK).json(car);
    }
}

const createCar = async (req, res) => {
    const { model, year, engineType, price } = req.body;

    if (!model || !year || !engineType || !price) {
        throw new CustomError.BadRequestError('Please provide all the required fields required');
    }

    const car = new Car(model, year, engineType, price);

    const params = {
        TableName: TABLE_NAME,
        Item: car,
    }


    await dynamoDBClient.put(params).promise();

    res.status(StatusCodes.CREATED).send('The car has been created successfully');
}

const updateCar = async (req, res) => {
    const { id } = req.params;
    const  price  = req.body.price;

    const params = {
        TableName: TABLE_NAME,
        Key: {
            id,
        }
    }

    const car = await dynamoDBClient.get(params).promise();

    if (car == {} || car === undefined) {
        throw new CustomError.NotFoundError('No such car found with id' + carId);
    } 


        car.Item.price = price;

        const updateParams = {
            TableName: TABLE_NAME,
            Key: {
                id
            },
            Item: car,
        }

        await dynamoDBClient.update(updateParams).promise();
        res.status(StatusCodes.OK).json(car);
}

const deleteCar = async (req, res) => {
    const { id } = req.params;

    const params = {
        TableName: TABLE_NAME,
        Key: {
            id,
        },
    };

    const car = await dynamoDBClient.get(params).promise();

    if (car == {} || car === undefined) {
        throw new CustomError.NotFoundError('No such car found with id' + id);
    } else {


        await dynamoDBClient.delete(params).promise();
        res.status(StatusCodes.OK).json("The car " + car.Item.name + " has been deleted successfully");
    }

}


module.exports = {
    getAllCars,
    getSingleCar,
    createCar,
    updateCar,
    deleteCar,
}
