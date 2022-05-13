const Dealer = require('../models/Dealer');

const { StatusCodes } = require('http-status-codes');
const CustomError = require('../errors/index');

const  dynamoDBClient  = require('../db/AwsDynamoDBConnection')
const TABLE_NAME ='Dealer';


const createDealer = (req, res) => {
    const {name, carList:cars} = req.body;

    if(!name) {
        throw new CustomError.BadRequestError('Enter the dealer name');
    }

    const dealer = new Dealer(name, carList);

    const params = {
        TableName: TABLE_NAME,
        Item:dealer
    };

    await dynamoDBClient.put(params).promise();
    res.status(StatusCodes.CREATED).json(dealer);
}


const updateDealer = (req, res) => {
    const {id:dealerId} = req.params;

    const params = {
        TableName: TABLE_NAME,
        Key: {
            id
        },
    };

    const dealer = await dynamoDBClient.get(params).promise();

    if(!dealer) {
        throw new CustomError.NotFoundError('No such dealer found with id' + dealerId);
    }

    const {carList:cars} = req.body;

    if(carList.length < 0) {
        throw new CustomError.BadRequestError('No such update');
    }

    dealer.cars = cars;

    const updateParams = {
        TableName: TABLE_NAME,
        Item:cars
    }

    await dynamoDBClient.put(params).promise();
    res.status(StatusCodes.OK).json(dealer);    
}


const deleteDealer = (req, res) => {
    const {id:dealerId} = req.params;

    const params = {
        TableName: TABLE_NAME,
        Key: {
            id
        },
    };

    const dealer = await dynamoDBClient.get(params).promise();

    if(!dealer) {
        throw new CustomError.NotFoundError('No such dealer found with id' + dealerId);
    }

    await dynamoDBClient.delete(params).promise();
    res.status(StatusCodes.OK).json(dealer);
}


const getAllDealers = (req, res) => {
    const params = {
        TableName: TABLE_NAME,
    }

    const dealers = await dynamoDBClient.get(params).promise();
    
    if(!dealers) {
        throw new CustomError.NotFoundError('No such dealers found');
    }

    res.status(StatusCodes.OK).json({dealers, count:dealers.length});
}

const getSingleDealer = (req, res) => {
    const {id:dealerId} = req.params;
    const params = {
        TableName: TABLE_NAME,
        Key: {
            id
        },
    };

    const dealer = await dynamoDBClient.get(params).promise();
    if(!dealer) {
        throw new CustomError.NotFoundError('No such dealer found with id ' + dealerId);
    }
    res.status(StatusCodes.OK).json(dealer);
}


module.exports = {
    createDealer,
    updateDealer,
    deleteDealer,
    getAllDealers,
    getSingleDealer
}