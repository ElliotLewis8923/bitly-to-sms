const assert = require('assert')
const replaceUrls = require('./replaceUrls')

describe('replaceUrls', () => {

	it('returns a string', () => {
		assert(typeof replaceUrls('abc', {}) === 'string')
	})  

	it('given a string and a key value store, it replaces occurrences of the keys with their values', () => {
        const string = 'abc 123 https://google.com/ foo'
        const urls = { 'https://google.com/': 'http://bit.ly/19BiSHW' }
		assert.deepEqual(replaceUrls(string, urls), 'abc 123 http://bit.ly/19BiSHW foo')
	})

})