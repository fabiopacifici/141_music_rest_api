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

- [x] Create a new `server.js` file
- [x] Create a new Node.js project `npm init -y`
- [x] Install a new Express.js project `npm install express`
- [x] Create a new `.gitignore` file
- [x] Add the `node_modules` folder to the `.gitignore` file
- [x] Add a new `start` and dev (or watch) script in the `package.json` file
- [x] Add the initial server logic in the `server.js` file  
- [x] Create the first routes in `server.js` and test with Postman

- [ ] Create a new `routes` folder
- [ ] Create a new `songs.js` file in the `routes` folder
- [ ] Create the CRUD Routes in the `songs.js` file
- [ ] Create a new `data` folder
- [ ] Create a new `songs.js` file in the `data` folder
- [ ] Create a new `controllers` folder
- [ ] Create a new `songs.js` file in the `controllers` folder
- [ ] Move the logic from the `routes/songs.js` file to the `controllers/songs.js` file
