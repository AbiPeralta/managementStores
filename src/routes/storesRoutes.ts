
import { Router } from "express";
import { getStores,getStore } from '../repositories/StoresRepository';
const router = Router();

export default router;



router.get('/stores', getStores);

router.get('/stores/:name', getStore);

/*
app.get('/stores', (req, res) => {
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