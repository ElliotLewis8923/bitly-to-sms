const axios = require('axios')
const querystring = require('querystring')

module.exports = {
	getShortenedUrl(url) {
		const apiUrl = 'https://api-ssl.bitly.com/v3/shorten?'
		const query = querystring.stringify({
			access_token: process.env.BITLY_TOKEN,
			longUrl: url
		})
		return axios.get(`${apiUrl}${query}`)
	}
}
