require('dotenv').config()
const express = require('express')
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args))

const app = express()
const port = process.env.PORT
const apiKey = process.env.APIKEY
const apiURL = `https://www.rijksmuseum.nl/api/nl/collection?key=${apiKey}`

// Stel ejs in als template engine
app.set('view engine', 'ejs')
app.set('views', './views')

// Stel een static map in
app.use(express.static('public'))


// Maak een route voor de index
app.get('/', function (req, res) {
  res.render('index', {
    pageTitle: 'Search the museum'
  })

})


// Maak een route voor quotes
app.get('/search', function (req, res) {
  const key = `${apiURL}&q=${req.query.q}`

  console.log(key);
  fetch(key)
    .then(async response => {
      const data = await response.json()
      const artworks = data.artObjects
      if (artworks.length > 0) {
        res.render('search', {
          pageTitle: req.query.q,
          artworks,
          searchValue: req.query.q
        })
      } else {
        res.render('error', {
          pageTitle: 'Niks gevonden...',
          searchValue: req.query.q
        })
      }
    })
 
})


app.get('/detail/:id', function (req, res) {
  const ID = req.params.id;
  const baseURL = `https://www.rijksmuseum.nl/api/nl/collection/`
  const getURL = baseURL + `${ID}?key=${apiKey}`

  fetch(getURL)
    .then(async response => {
      const data = await response.json()
      const artwork = data.artObject;

      res.render('detail', {
        pageTitle: artwork.title,
        artwork
      })
    })
})

app.get('/offline', function (req, res) {
  res.render('offline', {
    pageTitle: 'Offline'
  })
})

app.set('port', port || 8000)

const server = app.listen(app.get('port'), function () {
  console.log(`Application started on port: ${app.get('port')}`)
})

/**
 * Wraps the fetch api and returns the response body parsed through json
 * @param {*} url the api endpoint to address
 * @returns the json response from the api endpoint
 */
// async function fetchJson(url) {
//   return await fetch(url)
//     .then((response) => response.json())
//     .then((body) => body.data)
//     .catch((error) => error)
// }