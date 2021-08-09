"use strict";
exports.__esModule = true;
var express_1 = require("express");
var CouponsRepository_1 = require("../repositories/CouponsRepository");
var router = express_1.Router();
exports["default"] = router;
router.get('/coupons', CouponsRepository_1.getCoupons);
// solicita 'email' y 'code' en el query string
router.get('/coupons', CouponsRepository_1.getCoupon);
router.post('/coupons/:code', CouponsRepository_1.createCoupon);
/*
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
