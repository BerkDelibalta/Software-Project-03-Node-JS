const   CustomAPIError  = require('./custom-api');
const   BadRequestError  = require('./BadRequestError');
const   NotFoundError  = require('./NotFoundError');
const UnauthorizedError = require('./unauthorized');
const UnauthenticatedError = require('./unauthenticated');

module.exports = {
    CustomAPIError,
    BadRequestError,
    NotFoundError,
    UnauthorizedError,
    UnauthenticatedError
}