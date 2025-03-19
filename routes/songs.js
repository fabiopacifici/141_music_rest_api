const express = require('express')
const router = express.Router()

// define all routes for the songs entity

// [INDEX] Get all songs 
router.get('/', (req, res) => {
  res.send('return all songs')
})

// [SHOW] Get a song by id 
// http://localhost:3000/api/v1/songs/1
// Route with a dynamic parameter
router.get('/:id', (req, res) => {

  const id = req.params.id;
  res.send(`return song with id: ${id}`);
})

// [STORE] Create a new song
// http://localhost:3000/api/v1/songs
// Send a POST request with a JSON body
router.post('/', (req, res) => {
  console.log(req.body);
  res.send('create a new song')
})

// [UPDATE] Update a song
// http://localhost:3000/api/v1/songs/1
router.put('/:id', (req, res) => {
  const id = req.params.id;
  console.log(req.body);
  res.send(`uppdate song with id: ${id}`);
})


// [DSTROY] Delete a song
// http://localhost:3000/api/v1/songs/1
router.delete('/:id', (req, res) => {
  const id = req.params.id;

  res.send(`deleted song with id: ${id}`);
})



module.exports = router;