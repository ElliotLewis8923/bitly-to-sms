const zipObject = require('lodash.zipobject')
const api = require('../api')

module.exports = async urls => {
	const wrappedApiCalls = urls.map(url => (async () => {
		const res = await api.getShortenedUrl(url)
		return res.data.data.url
	})())
	const shortenedUrls = await Promise.all(wrappedApiCalls)
	return zipObject(urls, shortenedUrls)
}
