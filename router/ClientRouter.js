const express = require('express');
const router = express.Router();
const {
     authenticateUser,
     authorizePermissions } = require('../middleware/authentication');

const {
     updateClient,
     deleteClient,
     getAllClient,
     getSingleClient
} = require('../controller/ClientController');

router
     .route('/')
     .get(authenticateUser, getAllClient);

router
     .route('/getClient')
     .get([authenticateUser, authorizePermissions("admin", "user")], getSingleClient);


router
     .route('/updateClient')
     .patch([authenticateUser, authorizePermissions("admin", "user")], updateClient);


router
     .route('/deleteClient')
     .delete([authenticateUser, authorizePermissions("admin", "user")], deleteClient);


module.exports = router;