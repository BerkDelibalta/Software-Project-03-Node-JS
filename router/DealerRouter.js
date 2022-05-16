const express = require('express');
const router = express.Router();
const {
     authenticateUser,
     authorizePermissions } = require('../middleware/authentication');

const { 
createDealer,
updateDealer,
deleteDealer,
getAllDealers,
getSingleDealer
} = require('../controller/DealerController');

router
     .route('/')
     .get(authenticateUser,getAllDealers)
     .post([authenticateUser,authorizePermissions("admin")],createDealer);


router
     .route('/:id')
     .get(authenticateUser,getSingleDealer)
     .patch([authenticateUser,authorizePermissions("admin")],updateDealer)
     .delete([authenticateUser,authorizePermissions("admin")],deleteDealer);


module.exports = router;