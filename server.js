const express = require('express')
const app = express()
const port = 3000

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

// [INDEX] Get all songs 
app.get('/api/v1/songs', (req, res) => {
  res.send('return all songs')
})

// [SHOW] Get all songs 
// http://localhost:3000/api/v1/songs/1
// Route with a dynamic parameter
app.get('/api/v1/songs/:id', (req, res) => {

  const id = req.params.id;
  res.send(`return song with id: ${id}`);
})


// [STORE] Create a new song
// http://localhost:3000/api/v1/songs
// Send a POST request with a JSON body
app.post('/api/v1/songs', (req, res) => {
  console.log(req.body);
  res.send('create a new song')
})

// [UPDATE] Update a song
// http://localhost:3000/api/v1/songs/1
app.put('/api/v1/songs/:id', (req, res) => {
  const id = req.params.id;
  console.log(req.body);
  res.send(`uppdate song with id: ${id}`);
})


// [DSTROY] Update a song
// http://localhost:3000/api/v1/songs/1
app.delete('/api/v1/songs/:id', (req, res) => {
  const id = req.params.id;

  res.send(`deleted song with id: ${id}`);
})