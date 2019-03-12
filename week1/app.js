const express = require('express')
const hbs = require('express-handlebars')
const routeHandler = require('./src/js/modules/routeHandler.js')
const app = express()
const port = 3000

// Public folder (for stylesheets)
app.use(express.static(__dirname + '/public'))

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

app.listen(port, () => console.log(`Example app listening on port ${port}!`))