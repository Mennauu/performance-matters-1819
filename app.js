const shrinkRay = require('shrink-ray-current')
const express = require('express')
const hbs = require('express-handlebars')
const routeHandler = require('./server/js/routeHandler.js')
const app = express()
const port = 3011

// Disable x-powered-by header
app.disable('x-powered-by')

// Middleware to serve compressed files
app.get(['*.js', '*.css'], (req, res, next) => {
  const encoding = req.headers['accept-encoding']
  const extensionIndex = req.originalUrl.lastIndexOf('.')
  const extension = req.originalUrl.slice(extensionIndex)

  if (encoding && encoding.includes('br')) {
    req.url = `${req.url}.br`
    res.set('Content-Encoding', 'br')
  } else if (encoding && encoding.includes('gzip')) {
    req.url = `${req.url}.gz`
    res.set('Content-Encoding', 'gzip')
  }

  res.set('Content-Type', extension === '.js' ? 'text/javascript' : 'text/css')
  next()
})

// Brotli HTML file compression, add etag
app.use(shrinkRay({
  filter: (req) => req.headers['accept'].includes(['text/html'])
}))

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