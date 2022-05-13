const CustomAPIError = require('./CustomAPIError');
const StatusCode = require('http-status-codes');

class BadRequestError extends CustomAPIError{
    constructor(message){
        super(message);
        this.status = StatusCode.StatusCodes.BAD_REQUEST;
    }
}

module.exports = BadRequestError;