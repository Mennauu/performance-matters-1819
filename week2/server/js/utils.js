exports.filterObjects = (genres, images) => {
  const data = []
  const staticImagesJpeg = ['/images/coverlist1.jpeg', '/images/coverlist2.jpeg', '/images/coverlist3.jpeg', '/images/coverlist4.jpeg', '/images/coverlist5.jpeg', '/images/coverlist6.jpeg', '/images/coverlist7.jpeg', '/images/coverlist8.jpeg', '/images/coverlist9.jpeg', '/images/coverlist10.jpeg', '/images/coverlist11.jpeg', '/images/coverlist12.jpeg', '/images/coverlist13.jpeg', '/images/coverlist14.jpeg', '/images/coverlist15.jpeg', '/images/coverlist16.jpeg', '/images/coverlist17.jpeg', '/images/coverlist18.jpeg', '/images/coverlist19.jpeg', '/images/coverlist20.jpeg', '/images/coverlist21.jpeg', '/images/coverlist22.jpeg', '/images/coverlist23.jpeg']
  const staticImagesWebP = ['/images/coverlist1.webp', '/images/coverlist2.webp', '/images/coverlist3.webp', '/images/coverlist4.webp', '/images/coverlist5.webp', '/images/coverlist6.webp', '/images/coverlist7.webp', '/images/coverlist8.webp', '/images/coverlist9.webp', '/images/coverlist10.webp', '/images/coverlist11.webp', '/images/coverlist12.webp', '/images/coverlist13.webp', '/images/coverlist14.webp', '/images/coverlist15.webp', '/images/coverlist16.webp', '/images/coverlist17.webp', '/images/coverlist18.webp', '/images/coverlist19.webp', '/images/coverlist20.webp', '/images/coverlist21.webp', '/images/coverlist22.webp', '/images/coverlist23.webp']

  let imageNumber = -1;

  for (const genre of genres) {
    imageNumber++

    const object = {
      cover_image: staticImagesWebP[imageNumber],
      cover_image_fallback: staticImagesJpeg[imageNumber],
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