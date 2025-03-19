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

// example object
{
  "id": 1,
  "title": "Bohemian Rhapsody",
  "artist": "Queen",
  "album": "A Night at the Opera",
  "genre": ["Rock", "Progressive Rock"],
  "duration": 354,
  "coverArt": "https://example.com/images/bohemian-rhapsody.jpg"
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
- [x] Create the initial routes (witout router) in server.js
- [x] Add the body parser middleware to the server
  
- [x] Create a new `routes` folder
- [x] Create a new `songs.js` file in the `routes` folder
- [x] Create the CRUD Routes in the `songs.js` file
- [x] Create a new `data` folder
- [x] Create a new `songs.js` file in the `data` folder
- [x] Create a new `controllers` folder
- [x] Create a new `songs.js` file in the `controllers` folder
- [x] Move the logic from the `routes/songs.js` file to the `controllers/songs.js` file
- [x] add static assets middleware to the server
- [x] create a new middleware folder
- [x] add server error handling middleware
- [x] add a 404 middleware to the server
