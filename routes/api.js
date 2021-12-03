const express = require('express');
const router = express.Router();

const products = require('../data/products.json');
const { paginateResults } = require('../middlewares/pagination');

router.get('/products', paginateResults(products), (_, res) => {
  res.json(res.paginatedResults);
});

module.exports = router;
