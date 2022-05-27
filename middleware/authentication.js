const {UnauthenticatedError,UnauthorizedError} = require('../errors');
const { isTokenValid } = require('../utils/index');
const jwt_decode = require('jwt-decode');

const authenticateUser = async (err, req, res, next) => {
    const token = req.signedCookies.token;

    if (!token) {
        throw new UnauthenticatedError('Authentication Invalid - no token provided');
    }

    try {
        const { name, clientId, role } = isTokenValid({ token });
        req.user = { name, clientId, role };
        next()
    } catch (error) {
        throw new UnauthenticatedError('Authentication Invalid - token is invalid');
    }

    next()
};

const authorizePermissions = (...roles) => {
    return (req, res, next) => {
        var decoded = jwt_decode(req.signedCookies.token);
        if (!roles.includes(decoded.role)) {
            throw new UnauthorizedError(
                'Unauthorized access to this route'
            );
        }
        next()
    }
};

module.exports = { authenticateUser, authorizePermissions, };