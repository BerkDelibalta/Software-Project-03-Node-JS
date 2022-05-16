const express = require('express');
const router = express.Router();

const { 
    getAllCars,
    getSingleCar,
    createCar,
    updateCar,
    deleteCar,
} = require('../controller/CarController');

router
      .route('/')
      .get(getAllCars)
      .post(createCar);


router
      .route('/:id')
      .get(getSingleCar)
      .patch(updateCar)
      .delete(deleteCar)




module.exports = router;