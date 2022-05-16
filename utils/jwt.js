const jwt = require('jsonwebtoken');
require('dotenv').config();


const createJWT = ({ payload }) => {
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_LIFETIME,
    });
    return token;
}

const isTokenValid = ({ token }) => jwt.verify(token, process.env.JWT_SECRET);


const attachCookiesToResponse = ({ res, client }) => {
    const token = createJWT({ payload: client });

    const oneDay = 1000 * 24 * 60 * 60;

    res.cookie('token', token, {
        httpOnly: true,
        expiresIn: new Date(Date.now() + oneDay).toDateString(),
        secure: process.env.NODE_ENV === 'production',
        signed: true,
    });
}

module.exports = {
    createJWT,
    isTokenValid,
    attachCookiesToResponse,
};