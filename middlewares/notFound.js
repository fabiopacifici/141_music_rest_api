const notFound = (req, res, next) => {
  res.status(404).json({
    status: 404,
    message: 'Resource not found',
  })
}
module.exports = notFound;