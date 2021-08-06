import { Router } from "express";
import { getCoupons } from '../repositories/CouponsRepository';
const router = Router();

export default router;

router.get('/coupons',getCoupons);

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
