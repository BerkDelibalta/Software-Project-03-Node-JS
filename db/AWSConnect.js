const AWS = require('aws-sdk');
require('dotenv').config();

    AWS.config.update({
        region:process.env.region,
        accessKeyId:process.env.aws_access_key_id,
        secretAccessKey:process.env.aws_secret_access_key
    });


const dynamoDBClient = new AWS.DynamoDB.DocumentClient();

module.exports = {dynamoDBClient};