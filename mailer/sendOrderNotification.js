require('dotenv').config();

const sendGridMail = require('@sendgrid/mail');
const {BadRequestError} = require('../errors/BadRequestError');

sendGridMail.setApiKey(process.env.SENDGRID_API_KEY);


const sendNotification = async (order) => {

    const customerMail = order.customerMail;
    const dealerMail = order.dealerMail;
    const orderId = order.orderId;
    const dealer = order.dealer;
    const carModel = order.carModel;
    const date = order.date;

const message = {
to : customerMail,
from : dealerMail,
subject: "ORDER NO:"+ orderId + " : " + "FROM" + dealer,
text: "Hello! Thank you for your order!" 
      + "your request now has been received and will carefully proccess by our team!"
      + "your" + carModel + " starting from "+ date +" will be soon prepared and at the delivery time you will be"
      + "further notified"
}

await sendGridMail.send(message).catch(() => { throw new BadRequestError("ERROR: Notification couldn't be sent!"); });

}


module.exports = {sendNotification};