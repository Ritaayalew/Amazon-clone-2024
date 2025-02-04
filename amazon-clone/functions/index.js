const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");

const express=require('express');
const cors=require('cors');
const stripe=require('stripe')(
    'sk_test_51QnamsJuNjojY7aUdL5qQFv3vJ4S3r934QbWdORxDaMkN58BCnXvXlGSP32Hqvwf9CkSdYDvQ8vJjjIVa75rYusq00BhpY8gMz'
);

const app=express();
app.use(cors({ origin: true}));
app.use(express.json());


app.get('/', (request,response) => response.status(200).send('hello there'));


app.post('/payments/create', async (request, response) => {
    try {
      const total = request.query.total;

      console.log('payment request received for this amount ==', total);

      const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: 'usd',
      });
  
      response.status(201).send({
        clientSecret: paymentIntent.client_secret,
      });
    } catch (error) {
      console.error('Error creating payment intent:', error);
      response.status(500).json({ error: 'Error creating payment intent' });
    }
  });


exports.api= onRequest(app);




// http://127.0.0.1:5001/novemb-f2496/us-central1/api