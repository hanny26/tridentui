const express = require('express');

const router = express.Router();

const Product = require('../models/productModel');

router.get('/product', async (req, res) => {
    try {
        
        const products = await Product.find();
        res.status(200).send({data: products})

    } catch (err) {
        res.status(500).send({error:err});
        
    }
});

router.get('/product-by-categories' , async (req, res) => {
    try {
         
        const product = await Product.aggregate([
            { $match: {}},
            { $group: {
                _id: '$category',
                products: { $push: '$$ROOT'}
            }},
            { $project: { name: '$_id', products: 1, _id: 0}}
        ]);
        res.status(200).send({ data: products});

    } catch (error) {
        res.status(500).send({error: error});
    }
})
 

module.exports = router;