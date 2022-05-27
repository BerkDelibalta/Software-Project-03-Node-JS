require('dotenv').config();
require('express-async-errors');


//express
const express = require('express');
const app = express();

// rest of the packages
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const rateLimiter = require('express-rate-limit');
const helmet = require('helmet');
const xss = require('xss-clean');
const cors = require('cors');


// Routers
const authRouter = require('./router/authRouter');
const CarRouter = require('./router/CarRouter');
const ClientRouter = require('./router/ClientRouter');
const DealerRouter = require('./router/DealerRouter');
const OrderRouter = require('./router/OrderRouter');



//Middleware
const notFoundMiddleware = require('./middleware/not-found');
const errorMiddleware = require('./middleware/error-handler');

app.set('trust proxy', 1);
app.use(rateLimiter({
    windowMs: 15 * 60 * 1000,
    max: 60,
}));

app.use(helmet());
app.use(cors());
app.use(xss());

app.use(morgan('tiny'));
app.use(bodyParser.urlencoded());
app.use(express.json());
app.use(cookieParser(process.env.JWT_SECRET));


app.use('/api/v1/auth', authRouter);
app.use('/api/v1/cars', CarRouter);
app.use('/api/v1/clients', ClientRouter);
app.use('/api/v1/dealers', DealerRouter);
app.use('/api/v1/order',OrderRouter);

app.use(notFoundMiddleware);
app.use(errorMiddleware);
app.use(morgan);


module.exports = app;