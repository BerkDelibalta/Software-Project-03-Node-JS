const express = require('express');
const router = express.Router();


const {
    createClient,
    updateClient,
    deleteClient,
    getAllClient,
    getSingleClient
} = require('../controller/ClientController');

router
     .route('/')
     .get(getAllClient)
     .post(createClient);

router
     .route('/:id')
     .get(getSingleClient)
     .patch(updateClient)
     .delete(deleteClient);

    
module.exports = {
    createClient,
    updateClient,
    deleteClient,
    getAllClient,
    getSingleClient

}