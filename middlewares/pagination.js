const paginateResults = (model) => (req, res, next) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 15;

  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;

  res.paginatedResults = {
    products: model.slice(startIndex, endIndex),
    previous: startIndex > 0 ? page - 1 : null,
    current: page,
    next: endIndex < model.length ? page + 1 : null,
    limit,
  };

  next();
};

module.exports = { paginateResults };
