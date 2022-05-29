const express = require('express');
const router = express.Router();
const {
      authenticateUser,
      authorizePermissions } = require('../middleware/authentication');

const {
      getAllCars,
      getSingleCar,
      createCar,
      updateCar,
      deleteCar,
} = require('../controller/CarController');

router
      .route('/')
      .get(authenticateUser, getAllCars)
      .post([authenticateUser, authorizePermissions("admin")], createCar);


router
      .route('/:id')
      .get(getSingleCar)
      .patch([authenticateUser, authorizePermissions("admin")], updateCar)
      .delete([authenticateUser, authorizePermissions("admin")], deleteCar)




module.exports = router;