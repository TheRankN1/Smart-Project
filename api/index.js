const express = require('express');
const app = express();
const URL = 'mongodb://localhost:27017/Invoices-App';
const PORT = 3222;

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

app.use(express.json());
app.use(express.urlencoded());

const servicesRoutes = require('../api/services/services.routes');
app.use('/api', servicesRoutes);

const authRoutes = require('../api/modules/auth/auth.routes');
app.use('/api', authRoutes);

const connect = require('connect');
const serveStatic = require('serve-static');

mongoose.connect(URL, function (err) {
    if (err) {
        console.log("Mongo error!", err);
    }
    console.log("Data base is ready!");
    app.listen(PORT, function () {
        console.log(
            ("Server started: "),
            (`Listening to port ${PORT}`)
        );
    });
});