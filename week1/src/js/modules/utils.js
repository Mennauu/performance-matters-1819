exports.filterObjects = (genres, images) => {
  const data = []
  for (const genre of genres) {
    const object = {
      cover_image: images[Math.floor(Math.random() * images.length)],
      genre: genre
    }
    data.push(object)
  }
  return data
}

exports.uniqueSubjects = (objects) => {
  let values = []
  let subjects

  objects.data.map(result => {
    if (result.genre !== null)
      values.push(result.genre)
    subjects = [...new Set(values)]
  })

  return subjects
}

exports.filterImages = (data) => {
  let values = []
  let images

  data.data.map(result => {
    if (result.cover_image !== null && result.cover_image.toString('hex', 0, 4) !== '47494638') {
      console.log(result.cover_image.type)
      values.push(result.cover_image)
      images = [...new Set(values)]
    }
  })

  return images
}

/* Array with unique subjects */
exports.subjectData = (data, name) => {
  let objects = []

  for (const object of data) {
    if (object.subject === name) {
      objects.push(object)
    }
  }

  return objects
}

exports.removeLoadingAnimation = () => {
  const loader = document.querySelector('.loader')
  const loaderTitle = document.querySelector('.loader-title')

  if (document.body.contains(loader)) {
    loader.remove()
    loaderTitle.remove()
  }
}

exports.bookData = (data, name) => {
  for (const object of data) {
    if (object.title === name) {
      return object
    }
  }
}