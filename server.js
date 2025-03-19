const express = require('express')
const app = express()
const port = 3000
const songsRouter = require('./routes/songs')


// Start the server
app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})

// Middleware
app.use(express.json())

// Routes
app.get('/', (req, res) => {
  res.send('Hello World!')
})

/* Music Routes */
app.use('/api/v1/songs', songsRouter)

