require('dotenv').config();
const app = require('./app');

//Connection port
const port = process.env.PORT;

const start = async () => {
    try {
        app.listen(port, console.log(`Server is listening on port ${port}...`));
    } catch (error) {
        console.log(error)
    }

}

start();
