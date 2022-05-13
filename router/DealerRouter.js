const express = require('express');
const router = express.Router();

const { 
createDealer,
updateDealer,
deleteDealer,
getAllDealers,
getSingleDealer
} = require('../controller/DealerController');

router
     .route('/')
     .get(getAllDealers)
     .post(createDealer);


router
     .route('/:id')
     .get(getSingleDealer)
     .patch(updateDealer)
     .delete(deleteDealer);


module.exports = router;