const data = require('./getData.js')
const utils = require('./utils.js')

exports.homePage = async (req, res) => {
  try {
    // Get all the objects (with all data)
    const objects = await data.objects()
    // Array with only unique genres
    const genres = utils.uniqueSubjects(objects)
    // Array with images
    const images = utils.filterImages(objects)
    // Object with unique genres and linked image
    const imageAndGenre = utils.filterObjects(genres, images)

    res.render('home', {
      data: imageAndGenre,
      layout: 'default',
      template: 'home-template',
    })


    // // Get all unique subjects
    // const subjects = uniqueSubjects(data)
    // // Get list of unique images
    // const images = imageList(data)
    // // Render data to HTML
    // renderHome(subjects, images)
  } catch (err) {
    throw err
  } finally {
    // removeLoadingAnimation()
  }
}


// exports.subjectPage = async (name) => {
//   try {
//     // Get all data
//     const data = await getObaData()
//     // Get only subject data based
//     const object = subjectData(data, name)
//     // Render data to HTML
//     renderSubject(object, name)
//   } catch (err) {
//     throw err
//   } finally {
//     removeLoadingAnimation()
//   }
// }

// exports.bookPage = async (name) => {
//   try {
//     // Get all data
//     const data = await getObaData()
//     const object = bookData(data, name)
//     // Render data to HTML
//     renderBook(object, name)
//   } catch (err) {
//     throw err
//   } finally {
//     removeLoadingAnimation()
//   }
// }