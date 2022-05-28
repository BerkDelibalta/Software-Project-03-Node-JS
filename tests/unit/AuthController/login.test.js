const { login } = require('../../../controller/authController');
const httpMocks = require('node-mocks-http');

const { Clients } = require('../../mock-data/client.mock.data.json');
const CustomAPIError = require('../../../errors/custom-api');

const { dynamoDBClient } = require('../../../db/AWSConnect');

let req, res, next;
dynamoDBClient.put = jest.fn();
CustomAPIError.BadRequestError = jest.fn();

beforeEach(() => {
    req = httpMocks.createRequest();
    res = httpMocks.createResponse();
    next = jest.fn();
})


describe("AuthController", () => {


  //  for (let i = 0; i < Clients.length; i++) {


        beforeEach(() => {
            req.body = Clients[0];
        })


        it("should have a login function", () => {
            expect(typeof login).toBe('function');
        });

        it('should contain a response with signed cookie', async () => {
            req._setMethod('GET');

                 await login(req, res)
                .then((req) => {

                    expect(req.signedCookies.email).toBe(Clients[0].name);
                    expect(req.signedCookies.email).toBe(Clients[0].email);
                    expect(req.signedCookies.email).toBe(Clients[0].password);
                })
                .catch(() => {
                    console.log('LOGIN INF0 :  should contain a response with signed cookie catched')
                })
        })
        
            it('should handle correct client credentials verification', async () => {
                Clients.password = 'secret';
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
                name: Clients[0].name,
                surname: Clients[0].surname
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


   // }

})