const songs = require('../data/songs')



const index = (req, res) => {

  res.json(songs);
}

const show = (req, res) => {

  const id = req.params.id;
  res.send(`return song with id: ${id}`);
}

const store = (req, res) => {
  console.log(req.body);
  res.send('create a new song')
}

const update = (req, res) => {
  const id = req.params.id;
  console.log(req.body);
  res.send(`update song with id: ${id}`);
}


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