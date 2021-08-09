import { Router } from "express";
import { getCoupons,getCoupon,createCoupon } from '../repositories/CouponsRepository';
const router = Router();

export default router;

router.get('/coupons',getCoupons);

// solicita 'email' y 'code' en el query string
router.get('/coupons',getCoupon);


router.post('/coupons/:code',createCoupon);

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
