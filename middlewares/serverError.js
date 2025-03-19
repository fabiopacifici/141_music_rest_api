const serverError = (err, req, res, next) => {
  console.error(err.stack)
  res.status(500).json(
    {
      status: 500,
      message: err.message,
      body: null
    }
  )
}

module.exports = serverError;