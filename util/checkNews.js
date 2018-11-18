const request = require('request')
const apiQuery = require('./apiQuery')

const checkNews = async (searchTerm) => {
  return request(apiQuery(searchTerm), (err, res, body) => {
    if (err) {
      throw new Error('request ERROR:', { err })
    }
    console.log(body)
  })
}

module.exports = checkNews
