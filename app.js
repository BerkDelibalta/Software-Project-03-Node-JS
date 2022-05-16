require('dotenv').config();
require('express-async-errors');

//express
const express = require('express');
const app = express();

// rest of the packages
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

//Connection port
const port = process.env.PORT || 5000;


// Routers
const authRouter = require('./router/authRouter');
const CarRouter = require('./router/CarRouter');
const ClientRouter = require('./router/ClientRouter');
const DealerRouter = require('./router/DealerRouter');



//Middleware
const notFoundMiddleware = require('./middleware/not-found');
const errorMiddleware = require('./middleware/error-handler');

app.use(morgan('tiny'));
app.use(bodyParser.urlencoded());
app.use(express.json());
app.use(cookieParser(process.env.JWT_SECRET));

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/cars', CarRouter);
app.use('/api/v1/clients', ClientRouter);
app.use('/api/v1/dealers', DealerRouter);

app.use(notFoundMiddleware);
app.use(errorMiddleware);
app.use(morgan);


const start = async () => {
    try {
        app.listen(port, console.log(`Server is listening on port ${port}...`));
    } catch (error) {
        console.log(error)
    }

}

start();