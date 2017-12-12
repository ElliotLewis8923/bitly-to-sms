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
	},
	sendSMS(message, phoneNumber) {
		const apiUrl = 'https://api.transmitsms.com/send-sms.json'
		return axios({
			method: 'post',
			url: apiUrl,
			data: querystring.stringify({
				message,
				to: phoneNumber
			}),
			auth: {
				username: process.env.BURST_API_KEY,
				password: process.env.BURST_API_SECRET
			}
		})
	}
}
