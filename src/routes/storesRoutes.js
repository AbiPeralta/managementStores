"use strict";
exports.__esModule = true;
var express_1 = require("express");
var StoresRepository_1 = require("../repositories/StoresRepository");
var router = express_1.Router();
exports["default"] = router;
router.get('/stores', StoresRepository_1.getStore);
/*app.get('/stores/:id', (req, res) => {
    


    res.json();
})


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
