const Dealer = require('../models/Dealer');

const { StatusCodes } = require('http-status-codes');
const CustomError = require('../errors/index');

const AWS = require('aws-sdk');
require('dotenv').config();

    AWS.config.update({
        region:process.env.AWS_DEFAULT_REGION,
        accessKeyId:process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey:process.env.AWS_SECRET_ACCESS_KEY
    });


const dynamoDBClient = new AWS.DynamoDB.DocumentClient();
const TABLE_NAME ='Dealer';


const createDealer = async (req, res) => {
    const {name, carList} = req.body;

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


const updateDealer = async (req, res) => {
    const {id} = req.params;

    const params = {
        TableName: TABLE_NAME,
        Key: {
            id
        },
    };

    const dealer = await dynamoDBClient.get(params).promise();

    if(dealer === {}) {
        throw new CustomError.NotFoundError('No such dealer found with id' + dealerId);
    } else {

    const {cars} = req.body;

    dealer.Item.cars = cars;

    const updateParams = {
        TableName: TABLE_NAME,
        Key: {id},
        Item:{cars},
    }

    await dynamoDBClient.update(updateParams).promise();
    res.status(StatusCodes.OK).json(dealer);    
}

}

const deleteDealer = async (req, res) => {
    const {id} = req.params;

    const params = {
        TableName: TABLE_NAME,
        Key: {
            id
        },
    };

    const dealer = await dynamoDBClient.get(params).promise();

    if(dealer === {}) {
        throw new CustomError.NotFoundError('No such dealer found with id' + dealerId);
    } else {

    await dynamoDBClient.delete(params).promise();
    res.status(StatusCodes.OK).send("The dealer has been successfully deleted");
}
}


const getAllDealers = async (req, res) => {
    const params = {
        TableName: TABLE_NAME,
    }

    const dealers = await dynamoDBClient.scan(params).promise();
    
    if(dealers === {}) {
        throw new CustomError.NotFoundError('No such dealers found');
    } else {
    res.status(StatusCodes.OK).json({dealers, count:dealers.length});
    }
}

const getSingleDealer = async (req, res) => {
    const {id} = req.params;
    const params = {
        TableName: TABLE_NAME,
        Key: {
            id
        },
    };

    const dealer = await dynamoDBClient.get(params).promise();
    if(dealer === {}) {
        throw new CustomError.NotFoundError('No such dealer found with id ' + dealerId);
    } else {
    res.status(StatusCodes.OK).json(dealer);
}
}


module.exports = {
    createDealer,
    updateDealer,
    deleteDealer,
    getAllDealers,
    getSingleDealer
}