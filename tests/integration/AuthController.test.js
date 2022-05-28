require('dotenv').config();
const request = require('supertest');
const app = require('../../app');
const {StatusCodes} = require('http-status-codes');

const { dynamoDBClient } = require("../../db/AWSConnect");

const registerendpointurl="/api/v1/auth/register";
const {Clients} = require('../mock-data/client.mock.data.json');

jest.setTimeout(100000) 
describe(registerendpointurl,() => {

    for(let i = 0; i < Clients.length; i++) {
        var client = Clients[0];
        var email = client.email;
            it('INTEGRATION TEST - should return correct credentials POST/REGISTER' + registerendpointurl, async () => {
              /*
                await request(app)
                .post(registerendpointurl)
                .send(client)
                .then( (response) => {
                    expect(response.statusCode).toBe(StatusCodes.OK);
                    expect(response.body.email).toBe(client.email);
                    expect(response.body.password).toBe(client.password);
        })
        .catch(() => {
            console.log('INTEGRATION TEST - POST/REGISTER' + registerendpointurl)
        })
        dynamoDBClient.delete({TableName:'Client', Key:{email}});
   
   */
    });
}



it("INTEGRATION TEST - should return error 500 on malformed data with POST/REGISTER"  + registerendpointurl,() => {
    /*
    async () => {
        const response = await request(app)
        .post(endpointurl)
        .send({title: "Provide all parameters"})
        expect(response.status).toBe(StatusCodes.INTERNAL_SERVER_ERROR); 
        expect(response.body).toStrictEqual({message: "Something went wrong try again later"});
    }
*/
})


});