const AWS = require('aws-sdk');
require('dotenv');

    AWS.config({
        region:process.env.AWS_DEFAULT_REGION,
        accessKeyId:process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey:process.env.AWS_SECRET_ACCESS_KEY
        
    });


const dynamoDBClient = AWS.DynamoDB.DocumentClient();

module.exports = { dynamoDBClient };