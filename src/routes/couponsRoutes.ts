import { Router } from "express";
import { getCoupons,getCoupon } from '../repositories/CouponsRepository';
const router = Router();

export default router;

router.get('/coupons',getCoupons);


router.get('/coupons/:customer_email',getCoupon);

/*
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
