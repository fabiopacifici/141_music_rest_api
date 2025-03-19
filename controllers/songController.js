const songs = require('../data/songs')



/**
 * Handles the request to retrieve and respond with a list of songs.
 *
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {void} Sends a JSON response containing the list of songs.
 */
const index = (req, res) => {

  res.json(songs);
}

/**
 * Handles the request to show a specific song by its ID.
 *
 * @param {Object} req - The request object.
 * @param {Object} req.params - The parameters from the request URL.
 * @param {string} req.params.id - The ID of the song to retrieve.
 * @param {Object} res - The response object.
 * @returns {void} Sends a response with the song ID.
 */
const show = (req, res) => {

  const id = req.params.id;
  res.send(`return song with id: ${id}`);
}


/**
 * Handles the creation of a new song.
 *
 * @param {Object} req - The request object, containing data sent by the client.
 * @param {Object} req.body - The body of the request, expected to contain song details.
 * @param {Object} res - The response object, used to send a response back to the client.
 */
const store = (req, res) => {
  console.log(req.body);
  res.send('create a new song')
}


/**
 * Updates a song with the specified ID.
 *
 * @param {Object} req - The request object.
 * @param {Object} req.params - The route parameters.
 * @param {string} req.params.id - The ID of the song to update.
 * @param {Object} req.body - The request body containing the updated song data.
 * @param {Object} res - The response object.
 * @returns {void} Sends a response indicating the song update operation.
 */
const update = (req, res) => {
  const id = req.params.id;
  console.log(req.body);
  res.send(`update song with id: ${id}`);
}



/**
 * Deletes a song based on the provided ID in the request parameters.
 *
 * @param {Object} req - The request object.
 * @param {Object} req.params - The parameters from the request URL.
 * @param {string} req.params.id - The ID of the song to be deleted.
 * @param {Object} res - The response object.
 * @returns {void} Sends a response indicating the song has been deleted.
 */
const destroy = (req, res) => {
  const id = req.params.id;

  res.send(`deleted song with id: ${id}`);
}


module.exports = {
  index,
  show,
  store,
  update,
  destroy
};