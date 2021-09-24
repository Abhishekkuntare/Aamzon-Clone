const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const { request, response } = require("express");
const stripe = require("stripe")
    ('sk_test_51JSPSCSDTvZGRJpkJgbSJnrpKaEshbagBVtkPD9VXEirQMyoLz6ZwD1EVbMp2qQciwHDZOJYXrDren0MXJ0n1ynx00h43k3Jmy')

// api

// - api config
const app = express();

//- middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get('/', (request, response) => response.status(200).send('hello world this is a hello world what you want'))

app.post('/payments/create', async (request, response) => {
    const total = request.query.total;
    console.log('Payment request recived boom !!!, for this amount ==>>', total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "usd",
    });

    // ok created
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })

})

exports.api = functions.https.onRequest(app)
// - Listen command

// (http://localhost:5001/clone-6a5ca/us-central1/api).
