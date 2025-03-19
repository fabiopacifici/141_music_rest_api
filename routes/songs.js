const express = require('express')
const router = express.Router()
const songController = require('../controllers/songController')

// Define all routes for the songs entity
// [INDEX] Get all songs 
router.get('/', songController.index)

// [SHOW] Get a song by id 
// http://localhost:3000/api/v1/songs/1
// Route with a dynamic parameter
router.get('/:id', songController.show)

// [STORE] Create a new song
// http://localhost:3000/api/v1/songs
// Send a POST request with a JSON body
router.post('/', songController.store)

// [UPDATE] Update a song
// http://localhost:3000/api/v1/songs/1
router.put('/:id', songController.update)


// [DSTROY] Delete a song
// http://localhost:3000/api/v1/songs/1
router.delete('/:id', songController.destroy)



module.exports = router;