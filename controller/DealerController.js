const Dealer = require('../models/Dealer');

const { StatusCodes } = require('http-status-codes');
const CustomError = require('../errors/index');
const { dynamoDBClient } = require('../db/AWSConnect');


const TABLE_NAME = 'Dealer';


const createDealer = async (req, res) => {
    const { name, email, cars } = req.body;

    if (!name || !email) {
        throw new CustomError.BadRequestError('Provide all required parameters');
    }
    console.log(cars)
    const dealer = new Dealer(name, email, cars);

    const params = {
        TableName: TABLE_NAME,
        Item: dealer
    };

    await dynamoDBClient.put(params).promise();
    res.status(StatusCodes.CREATED).json(dealer);
}


const updateDealer = async (req, res) => {
    const { id } = req.params;

    const params = {
        TableName: TABLE_NAME,
        Key: {
            id
        },
    };

    const dealer = await dynamoDBClient.get(params).promise();

    if (dealer === {}) {
        throw new CustomError.NotFoundError('No such dealer found with id' + dealerId);
    } else {

        const { cars, email } = req.body;

        if (cars !== {} && cars !== undefined) {
            dealer.Item.cars = cars;
        }
        if (email !== {} && email !== undefined) {
            dealer.Item.email = email;
        }

        const updateParams = {
            TableName: TABLE_NAME,
            Key: { id },
            Item: { cars },
        }

        await dynamoDBClient.update(updateParams).promise();
        res.status(StatusCodes.OK).json(dealer);
    }

}

const deleteDealer = async (req, res) => {
    const { id } = req.params;

    const params = {
        TableName: TABLE_NAME,
        Key: {
            id
        },
    };

    const dealer = await dynamoDBClient.get(params).promise();

    if (dealer === {}) {
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

    if (dealers === {}) {
        throw new CustomError.NotFoundError('No such dealers found');
    } else {
        res.status(StatusCodes.OK).json({ dealers, count: dealers.length });
    }
}

const getSingleDealer = async (req, res) => {
    const { id } = req.params;
    const params = {
        TableName: TABLE_NAME,
        Key: {
            id
        },
    };

    const dealer = await dynamoDBClient.get(params).promise();
    if (dealer === {}) {
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