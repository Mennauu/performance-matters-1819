const data = require('./getData.js')
const utils = require('./utils.js')

exports.homePage = async (req, res) => {
  try {
    const objects = await data.objects()
    const genres = await utils.uniqueSubjects(objects)
    const images = await utils.filterImages(objects)
    const imageAndGenre = await utils.filterObjects(genres, images)

    // res.set('Cache-Control', 'no-cache')
    res.render('home', {
      data: imageAndGenre,
      layout: 'default',
      template: 'home-template',
    })
  } catch (err) {
    throw err
  }
}

exports.subjectPage = async (req, res) => {
  try {
    const path = unescape(req.originalUrl.substring(1))
    const objects = await data.objects()
    const results = await utils.subjectData(objects, path)

    res.render('subject', {
      title: path,
      data: results,
      layout: 'default',
      template: 'subject-template',
    })
  } catch (err) {
    throw err
  }
}

exports.detailPage = async (req, res) => {
  try {
    const path = req.originalUrl.substring(1)
    const isbn = unescape(path.substring(path.indexOf("/") + 1))
    const objects = await data.objects()
    const result = await utils.bookData(objects, isbn)

    res.render('detail', {
      title: result.title,
      data: result,
      layout: 'default',
      template: 'detail-template',
    })
  } catch (err) {
    throw err
  }
}