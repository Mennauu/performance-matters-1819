const express = require('express')
const hbs = require('express-handlebars')
const terser = require('terser')
const compression = require('compression')
const routeHandler = require('./server/js/routeHandler.js')
const app = express()
const port = 3000

// gzip files
app.use(compression())

// serve static files
app.use(express.static(__dirname + '/public', {
  maxAge: "365d",
  lastModified: "",
  etag: ""
}))

// Handlebars
app.set('view engine', 'hbs')
app.engine('hbs', hbs({
  extname: 'hbs',
  defaultView: 'default',
  layoutsDir: __dirname + '/views/layouts/',
  partialsDir: __dirname + '/views/partials/'
}))

// Homepage
app.get('/', routeHandler.homePage)
// Subject page
app.get('/:genre', routeHandler.subjectPage)
// Detail page
app.get('/:genre/:isbn', routeHandler.detailPage)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))