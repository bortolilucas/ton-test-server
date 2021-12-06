const express = require('express');
const router = express.Router();

const products = require('../data/products.json');

router.get('/products', (req, res) => {
  let results = products;

  const search = req.query.search;

  if (search) {
    results = results.filter((a) => a.title.includes(search));
  }

  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;

  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;

  res.json({
    products: results.slice(startIndex, endIndex),
    previous: startIndex > 0 ? page - 1 : null,
    current: page,
    next: endIndex < results.length ? page + 1 : null,
    limit,
  });
});

module.exports = router;
