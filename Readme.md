# Music Rest API (RECAP)

```js
// Song Schema
{
  id: Number,
  title: String,
  artist: String,
  album: String,
  genre: Array,
  duration: Number,
  coverArt: String
}
```

## Project Steps

- [ ] Create a new `server.js` file
- [ ] Create a new Node.js project `npm init -y`
- [ ] Install a new Express.js project `npm install express`
- [ ] Create a new `.gitignore` file
- [ ] Add the `node_modules` folder to the `.gitignore` file
- [ ] Add a new `start` script in the `package.json` file
- [ ] Add the initial server logic in the `server.js` file  
- [ ] Create the first routes in `server.js` and test with Postman

- [ ] Create a new `routes` folder
- [ ] Create a new `songs.js` file in the `routes` folder
- [ ] Create the CRUD Routes in the `songs.js` file
- [ ] Create a new `data` folder
- [ ] Create a new `songs.js` file in the `data` folder
- [ ] Create a new `controllers` folder
- [ ] Create a new `songs.js` file in the `controllers` folder
- [ ] Move the logic from the `routes/songs.js` file to the `controllers/songs.js` file
