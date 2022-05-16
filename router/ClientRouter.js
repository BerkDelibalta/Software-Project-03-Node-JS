const express = require('express');
const router = express.Router();


const {
    updateClient,
    deleteClient,
    getAllClient,
    getSingleClient
} = require('../controller/ClientController');

router
     .route('/')
     .get(getAllClient);

router.route('/getClient').get(getSingleClient);
router.route('/updateClient').patch(updateClient);
router.route('/deleteClient') .delete(deleteClient);
    
module.exports = router;