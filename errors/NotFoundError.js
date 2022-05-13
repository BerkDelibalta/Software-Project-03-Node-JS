const CustomAPIError = require('./CustomAPIError');
const StatusCode = require('http-status-codes');

class NotFoundError extends CustomAPIError{
    constructor(message){
        super(message);
        this.status = StatusCode.StatusCodes.NOT_FOUND;
    }
}

module.exports = NotFoundError;