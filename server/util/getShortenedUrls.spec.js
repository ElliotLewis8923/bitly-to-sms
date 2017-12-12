const assert = require('assert')
const sinon = require('sinon')
const api = require('../api')
const getShortenedUrls = require('./getShortenedUrls')


describe('getShortenedUrls', () => {

	before(() => {
		sinon.stub(api, 'getShortenedUrl').returns(Promise.resolve({
			data: {
				data: {
					url: 'http://bit.ly/2BVhl4z'
				}
			}
		}))
	})

	it('given a list of urls, returns an object with their shortened counterparts', async () => {
		const urls = ['https://www.xyz.com/', 'http://onetwofour.com.au/', 'https://www.whitehouse.gov/']

		assert.deepEqual(await getShortenedUrls(urls), {
			'https://www.xyz.com/': 'http://bit.ly/2BVhl4z',
			'http://onetwofour.com.au/': 'http://bit.ly/2BVhl4z',
			'https://www.whitehouse.gov/': 'http://bit.ly/2BVhl4z'
		})
	})

})