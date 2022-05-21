const Client = require('../models/Client');

const HttpStatus = require('http-status-codes');
const CustomAPIError = require('../errors/custom-api');
const { attachCookiesToResponse, createTokenUser } = require('../utils');
const {dynamoDBClient} = require('../db/AWSConnect');


const TABLE_NAME ='Client';


const register = async (req, res) => {
    const {name, surname, email, password, budget} = req.body;

    if(!name || !surname || !email || !password || !budget) {
        throw new CustomAPIError.BadRequestError('Provide all parameters');
    }

    // first registered user is an admin and others are users
    const params = {
        TableName: TABLE_NAME,
        Key: {
            email,
        }
    }

    const client = await dynamoDBClient.get(params).promise();

    if(client.Item === undefined) {
        const clients = await dynamoDBClient.scan(params).promise();
        const isFirstAccount = clients.Items.length === 0;
        const role = isFirstAccount ? 'admin' : 'user';
    
        
        const clientObject = new Client(name, surname, email, password, budget, role);
        const registerParams = {
            TableName: TABLE_NAME,
            Item: clientObject,
        };
    
        await dynamoDBClient.put(registerParams).promise();
        const tokenClient = createTokenUser(req.body);
        attachCookiesToResponse({ res, client: tokenClient });
        res.status(HttpStatus.StatusCodes.CREATED).json({ client:clientObject }); 
    } else {
        throw new Error('Client already exists')
    }
};

const login = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) throw new CustomAPIError.BadRequestError('Please provide email and password');

    const params = {
        TableName: TABLE_NAME,
        Key: {
            email
        },
    };

    const client = await dynamoDBClient.get(params).promise();
    if (!client) throw new CustomAPIError.UnauthenticatedError('Invalid Credentials');

    const isMatch = client.Item.password == password.toString();

    if (!isMatch) {
        throw new Error('Invalid Credentials ');
    }

    const clientObject = {
        name : client.Item.name,
        clientId : client.Item.id,
        role : client.Item.role
    }

    const tokenClient = createTokenUser(clientObject);
    attachCookiesToResponse({ res, client: tokenClient });
    res.status(HttpStatus.StatusCodes.OK).json({ client });
};


const logout = async (req, res) => {
    res.cookie('token', 'logout', {
        httpOnly: true,
        expires: new Date(Date.now()),
    });
    res.status(HttpStatus.StatusCodes.OK).send({ message: `client logged out` });
};


module.exports = {
    register,
    login,
    logout,
};