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
     .get(authenticateUser,getAllClient);

router.route([authenticateUser,authorizePermissions("admin","user")],'/getClient').get(getSingleClient);
router.route([authenticateUser,authorizePermissions("admin","user")],'/updateClient').patch(updateClient);
router.route([authenticateUser,authorizePermissions("admin","user")],'/deleteClient') .delete(deleteClient);
    
module.exports = router;