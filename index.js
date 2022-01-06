const express = require('express');
const axios = require("axios")
const PORT = 3000

const app = express();



app.get('/', (req, res) => {
  res.send('<h1>Hello</h1>')
})

app.get('/games', (req, res) => {
  axios('https://api.rawg.io/api/games?key=391adff7676142c2b6d7314dcfda9a19')
  .then((response) => {
    res.json(response.data)
  })
})

app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}`)
})