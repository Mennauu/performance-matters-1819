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
      values.push(result.genre.replace(/\//g, ' '))
    subjects = [...new Set(values)]
  })

  return subjects
}

exports.filterImages = (data) => {
  let values = []
  let images

  data.data.map(result => {
    if (result.cover_image !== null && result.cover_image.toString('hex', 0, 4) !== '47494638') {
      values.push(result.cover_image)
      images = [...new Set(values)]
    }
  })

  return images
}

exports.subjectData = (data, path) => {
  let objects = []

  data.data.map(result => {
    if (result.isbn !== null && result.genre === path) {
      objects.push(result)
    }
  })

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

exports.bookData = (data, isbn) => {
  let object = []

  data.data.map(result => {
    if (result.isbn === isbn) {
      object.push(result)
    }
  })

  return object
}