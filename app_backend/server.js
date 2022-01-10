const express = require('express');
const app = express();
const axios = require("axios")
const cors = require('cors')

app.use(cors())
app.use(express.json())

// GET ALL GAMES

app.get('/api/games', (req, res) => {
  axios('https://api.rawg.io/api/games?key=391adff7676142c2b6d7314dcfda9a19')
  .then((response) => {
    res.json(response.data)
  })
})

app.get('/api/games/:id', (req, res) => {
  const id = Number(req.params.id)
  axios(`https://api.rawg.io/api/games/${id}?key=391adff7676142c2b6d7314dcfda9a19`)
  .then((response) => {
    res.json(response.data)
  })
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}`)
})