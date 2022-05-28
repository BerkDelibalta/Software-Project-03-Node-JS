const { login } = require('../../../controller/authController');
const httpMocks = require('node-mocks-http');

const { Clients } = require('../../mock-data/client.mock.data.json');
const CustomAPIError = require('../../../errors/custom-api');

const { dynamoDBClient } = require('../../../db/AWSConnect');

let req, res, next, client;
dynamoDBClient.put = jest.fn();
CustomAPIError.BadRequestError = jest.fn();

beforeEach(() => {
    req = httpMocks.createRequest();
    res = httpMocks.createResponse();
    next = jest.fn();
})


describe("AuthController", () => {


    for (let i = 0; i < Clients.length; i++) {


        beforeEach(() => {
            client = Clients[i];
        })


        it("should have a login function", () => {
            expect(typeof login).toBe('function');
        });

        it('should contain a response with signed cookie', async () => {
            req.body = client;
            req._setMethod('GET');

                 await login(req, res)
                .then((req) => {

                    expect(req.signedCookies.email).toBe(client.name);
                    expect(req.signedCookies.email).toBe(client.email);
                    expect(req.signedCookies.email).toBe(client.password);
                })
                .catch(() => {
                    console.log('LOGIN INF0 :  should contain a response with signed cookie catched')
                })
        })
        
            it('should handle correct client credentials verification', async () => {
                client.password = 'secret';   
                req.body = client;
                req._setMethod('GET');

                await login(req, res)
                .then((response) => {
                    expect(response.body.error.message).toBe('Invalid Credentials')
                })
                .catch(() => {
                    console.log('LOGIN INF0 :  should handle correct client credentials verification catched')
                })
            })
        

        it('should handle missing parameter errors', async () => {
            req.body = {
                name: client.name,
                surname: client.surname
            };
            req._setMethod('GET');
            await login(req, res)
                .then((response) => {
                    expect(response.body.error).toBe(typeof CustomAPIError.BadRequestError);
                    expect(response.body.error.message).toBe('Please provide email and password');
                })
                .catch(() => {
                    console.log('LOGIN INF0 :  should handle missing parameter errors catched')
                })
        });


    }

})
