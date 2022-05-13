const Client = require('../models/Client');

const { StatusCodes } = require('http-status-codes');
const CustomError = require('../errors/index');

const  dynamoDBClient  = require('../db/AwsDynamoDBConnection');
const TABLE_NAME ='Client';


const createClient = async (req, res) => {
    const {name, surname, age, budget} = req.body;

    if(!name || !surname || !age || !budget) {
        throw new CustomError.BadRequestError('Provide all parameters');
    }

    const client = new Client(name, surname, age, budget);

    const params = {
        TableName: TABLE_NAME,
        Item : client
    }

    await dynamoDBClient.put(params).promise();
    res.status(StatusCodes.CREATED).json(client);
}


const updateClient = async (req, res) => {
    const { id: clientId} = req.params;
    const params = {
        TableName: TABLE_NAME,
        Key: {
            id,
        }
    }
    const client = await dynamoDBClient.get(params).promise();

    if(!client) {
        throw new CustomError.NotFoundError('No such a client with id ' + clientId);
    }

    const {budget} = req.body;

    if(!budget) {
        throw new CustomError.BadRequestError('No such budget update');
    }

    client.budget = budget;

    const updateParams = {
        TableName: TABLE_NAME,
        Item:client
    }

    await dynamoDBClient.put(updateParams).promise();
    res.status(StatusCodes.OK).json(client);
}


const deleteClient = async (req, res) => {
    const { id: clientId} = req.params;
    const params = {
        TableName: TABLE_NAME,
        Key: {
            id,
        }
    }
    const client = await dynamoDBClient.get(params).promise();

    if(!client) {
        throw new CustomError.NotFoundError('No such a client with id ' + clientId);
    }

    await dynamoDBClient.delete(params).promise();
    res.status(StatusCodes.OK).json(client);
}

const getAllClient = async (req, res) => {
    const params = {
        TableName: TABLE_NAME,
    }
    const clients = await dynamoDBClient.get(params).promise();

    if(!clients) {
        throw new CustomError.NotFoundError('No clients');
    }

    res.status(StatusCodes.OK).json({clients,count:clients.length});
}

const getSingleClient = async (req, res) => {
    const { id: clientId} = req.params;
     const params = {
        TableName: TABLE_NAME,
        Key: {
            id
        }
    }
    const client = await dynamoDBClient.get(params).promise();

    if(!client) {
        throw new CustomError.NotFoundError('No such client with id' + clientId);
    }

    res.status(StatusCodes.OK).json(client);
}


module.exports = {
    createClient,
    updateClient,
    deleteClient,
    getAllClient,
    getSingleClient
}