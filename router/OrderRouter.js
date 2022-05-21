
const express = require('express');
const router = express.Router();

const {
    authenticateUser,
    authorizePermissions } = require('../middleware/authentication');

const {
    createOrder,
    updateOrder,
    deleteOrder,
    getSingleOrder,
    getOrders } = require('../controller/OrderController');


    router
        .route("/")
        .get([authenticateUser,authorizePermissions("admin")],getOrders)
        .post([authenticateUser,authorizePermissions("admin","user")],createOrder);

    router
        .route("/:id")
        .get([authenticateUser,authorizePermissions("admin","user")],getSingleOrder)
        .patch([authenticateUser,authorizePermissions("admin")],updateOrder)
        .delete([authenticateUser,authorizePermissions("admin")],deleteOrder); 


        module.exports = router;