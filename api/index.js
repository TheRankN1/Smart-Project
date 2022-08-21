const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();
const URL = 'mongodb://localhost:27017/services';
const PORT = 3222;
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

router.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/index.html'));
});

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