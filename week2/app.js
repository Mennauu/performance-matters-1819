const shrinkRay = require('shrink-ray-current')
const path = require('path')
const staticify = require('staticify')(path.join(__dirname, 'public'))
const express = require('express')
const hbs = require('express-handlebars')
const routeHandler = require('./server/js/routeHandler.js')
const app = express()
const port = 3000

// Disable x-powered-by header
app.disable('x-powered-by')
// Brotli files compression, add etag and caching
app.use(shrinkRay())
// serve static files
app.use(express.static(__dirname + '/public', {
  maxAge: "365d",
  lastModified: "",
  etag: ""
}))
// Prepend static assets with a version string
app.use(staticify.middleware)
app.locals = { getVersionedPath: staticify.getVersionedPath }
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