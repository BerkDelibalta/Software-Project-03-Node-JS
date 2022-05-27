const { register } = require('../../../controller/AuthController');
const { dynamoDBClient } = require('../../../db/AWSConnect');

const httpMocks = require('node-mocks-http');
const { StatusCodes } = require('http-status-codes');

const { Clients } = require('../../mock-data/client.mock.data.json');
var {BadRequestError} = require('../../../errors/index');


dynamoDBClient.put = jest.fn();
BadRequestError = jest.fn();
let req, res, next;

beforeEach(() => {
  req = httpMocks.createRequest();
  res = httpMocks.createResponse();
  next = jest.fn();
})

describe("AuthController", () => {


  for (let i = 0; i < Clients.length; i++) {


    beforeEach(() => {
      req.body = Clients[i];
    })


    it("should have a register function", () => {
      expect(typeof register).toBe('function');
    });


    it("should call register function", () => {
      register(req, res)
        .then((response) => {
          expect(dynamoDBClient.put).toBeCalledWith(response.body);
        })
        .catch(err => { throw err });
      var email = req.body.email;
      dynamoDBClient.delete({ TableName: 'Client', Key: { email } });
    });


    it('should return 201 response code', () => {
      register(req, res).then((res) => {
        expect(res.body.statusCode).toBe(StatusCodes.CREATED);
        expect(res._isEndCalled()).toBeTruthy();
      })
        .catch(err => { throw err });
      var email = req.body.email;
      dynamoDBClient.delete({ TableName: 'Client', Key: { email } });
    });


    it('should return json body in response', async () => {
      await dynamoDBClient.put.mockReturnValue(req.body);
      register(req, res).then((response) => {
        expect(response._getJSONData).toBe(req.body);
      });
      var email = req.body.email;
      dynamoDBClient.delete({ TableName: 'Client', Key: { email } });
    });


    it('should handle missing parameter errors', () => {
      req._setMethod('POST');
      req.body = { name: req.body.name };
      register(req, res)
        .then((response) => {
          expect(response.body.message).toBe('Please provide email and password')
        }).catch(() => {
          console.log('REGISTER INFO : should handle missing parameter errors catched');
        })
    });



    it('should handle already existing client errors', () => {
      const errorMessage = 'Client already exists';
      const email = req.body.email;
      const client = req.body;
      dynamoDBClient.put({ TableName: 'Client', Item: client });
      register(req, res).then((response) => {
        expect(response).toBe(typeof BadRequestError);
        expect(response).toBe(errorMessage);
      })
      dynamoDBClient.delete({ TableName: 'Client', Key: { email } });
    });



    it('should contain a response with signed cookie', async () => {
      const response = register(req, res)
        .then(() => {
          expect(response.signedCookies.name).toBe(client.name);
          expect(response.signedCookies.email).toBe(client.email);
          expect(response.signedCookies.password).toBe(client.password);
        })
      const email = req.body.email;
      dynamoDBClient.delete({ TableName: 'Client', Key: { email } });
    })


  }

});