const { StatusCodes } = require('http-status-codes');
const CustomError = require('../errors/index');
const {dynamoDBClient} = require('../db/AWSConnect');


const TABLE_NAME ='Client';


const updateClient = async (req, res) => {
    const {email,password, budget} = req.body;
    const params = {
        TableName: TABLE_NAME,
        Key: {
            email,
          },
};
    
    const client = await dynamoDBClient.get(params).promise();

    if(!client) {
        throw new CustomError.NotFoundError('No such client with id' + clientId);
    }

    const isPasswordMatching = client.Item.password === password;
    
    if(!isPasswordMatching) {
        throw new Error("Invalid credentials");
    }
    
    if(!budget) {
        throw new CustomError.BadRequestError('No such budget update');
    }

    client.Item.budget = budget;
   
    const updateParams = {
        TableName: TABLE_NAME,
        Key: { email},
        Item: client,
    }

    await dynamoDBClient.update(updateParams).promise();
    res.status(StatusCodes.OK).json(client);
}


const deleteClient = async (req, res) => {
    const { email , password} = req.body;
    const params = {
        TableName: TABLE_NAME,
        Key: {
            email
          },
         
};
    
    const client = await dynamoDBClient.get(params).promise();
    
    if(!client) {
        throw new CustomError.NotFoundError('No such client with id' + client.Item.id);
    }
    
   
    const isPasswordMatching = client.Item.password === password;
    
    if(!isPasswordMatching) {
        throw new Error("Invalid credentials");
    }

   await dynamoDBClient.delete(params).promise();
   res.status(StatusCodes.OK).send("Client with email " + email + " has been successfully deleted");
 
}

const getAllClient = async (req, res) => {
    const params = {
        TableName: TABLE_NAME,
    }
    const clients = await dynamoDBClient.scan(params).promise();

    if(!clients) {
       throw new CustomError.NotFoundError('No clients');
    }

    res.status(StatusCodes.OK).json({clients,count:clients.length});
   
}

const getSingleClient = async (req, res) => {
    const {email} = req.body;
    const params = {
        TableName: TABLE_NAME,
        Key: {
            email
          },
    }
    
    const client = await dynamoDBClient.get(params).promise();

    if(!client) {
        throw new CustomError.NotFoundError('No such client with id' + clientId);
    }

    res.status(StatusCodes.OK).json(client);
}


module.exports = {
    updateClient,
    deleteClient,
    getAllClient,
    getSingleClient
}