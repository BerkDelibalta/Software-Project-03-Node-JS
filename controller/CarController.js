const Car = require('../models/Car');

const { StatusCodes } = require('http-status-codes');
const CustomError = require('../errors/index');

const  dynamoDBClient  = require('../db/AwsDynamoDBConnection')
const TABLE_NAME ='Car';

const getAllCars = async (req, res) => {
    const params = {
        TableName: TABLE_NAME,
    };
    const cars = await dynamoDBClient.scan(params).promise();
    if(cars.length < 0) {
        throw new CustomError.NotFoundError('No cars found');
    }
    res.status(StatusCodes.OK).json({cars,count:cars.length});
}

const getSingleCar = async (req, res) => {
    const { id: carId } = req.params;
    const params = {
        TableName: TABLE_NAME,
        Key: {
            id,
        },
    };

    const car = await dynamoDBClient.get(params).promise();

    if(!car){
        throw new CustomError.NotFoundError('No car found with id ' + carId);
    }

    res.status(StatusCodes.OK).json(car);
}

const createCar = async (req, res) => {
    const { model , year, engineType, price } = req.body;

    if(!model || !year || !engineType || !price){
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
    const {id: carId} = req.params;
    const { price } = req.body;

    const params = {
        TableName: TABLE_NAME,
        Key:{
            id,
        }
    }

    const car = await dynamoDBClient.get(params).promise();

    if(!car) {
        throw new CustomError.NotFoundError('No such car found with id' + carId);
    }

    car.price = price;

    const updateParams = {
        TableName: TABLE_NAME,
        Item: car,
    }

    await dynamoDBClient.put(updateParams).promise();

    res.status(StatusCodes.OK).json(car);

}

const deleteCar = async (req, res) => {
    const {id: carId} = req.params;

    const car = await dynamoDBClient.get(params).promise();

    if(!car) {
        throw new CustomError.NotFoundError('No such car found with id' + carId);
    }

    const params = {
        TableName: TABLE_NAME,
        Key: {
            id,
        },
    };
    await dynamoClient.delete(params).promise();

    res.status(StatusCodes.OK).json(car);
}


module.exports = {
    getAllCars,
    getSingleCar,
    createCar,
    updateCar,
    deleteCar,
}
