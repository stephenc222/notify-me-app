const { API_KEY } = require('../secret.js')
const { BASE_EVERYTHING_URL } = require('../config')

const queryOpts = (options) =>
  Object.entries(options).reduce(
    (sum, curr) => sum + `&${curr[0]}=${curr[1]}`, '')

const apiQuery = (searchTerm, options) => {
  if (options) {
    return `${BASE_EVERYTHING_URL}${searchTerm}${queryOpts(options)}&apiKey=${API_KEY}`
  }

  return `${BASE_EVERYTHING_URL}${searchTerm}&apiKey=${API_KEY}`
}

module.exports = apiQuery
