const assert = require('assert')
const parseUrls = require('./parseUrls')

describe('parseUrls', () => {

	it('returns an array', () => {
		assert(Array.isArray(parseUrls('abc')))
	})

	it('given a string containing urls, returns them in the array', () => {
		const string = 'abc 123 https://instagram.com/ foo https://facebook.com'
		assert.deepEqual(parseUrls(string), ['https://instagram.com/', 'https://facebook.com'])
	})

	it('given a string containing no urls, returns an empty array', () => {
		const string = 'a b c 123'
		assert.deepEqual(parseUrls(string), [])
	})
})