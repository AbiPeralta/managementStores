"use strict";
exports.__esModule = true;
var express_1 = require("express");
var CouponsRepository_1 = require("../repositories/CouponsRepository");
var router = express_1.Router();
exports["default"] = router;
router.get('/coupons', CouponsRepository_1.getCoupons);
/*
app.get('/coupons/:customer_email', (req, res) => {
    console.log(req.params.customer_email)


    res.json();
})


app.get('/coupons', (req, res) => {
    console.log(req.query.code);

    res.json();
})

app.post('/', (req, res) => {
    console.log(req.body)


})

app.post('/', (req, res) => {
    res.json();

})

app.patch('/', (req, res) => {
    res.json();

})


app.delete('/', (req, res) => {
    res.json();
})*/
