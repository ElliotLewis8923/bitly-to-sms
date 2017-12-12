const assert = require('assert')
const parseUrls = require('./validate')

describe('parseUrls', () => {

	it('yields false if any input evaluates false', () => {
		assert.false(validate(undefined, '61444444444'))
		assert.false(validate('hello', undefined))
	})

	it('yields false if either argument is the wrong length', () => {
		assert.false(validate('aaaaa', '61444444444444'))
	})

})
