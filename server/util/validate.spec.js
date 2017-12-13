const assert = require('assert')
const validate = require('./validate')

describe('parseUrls', () => {

	it('yields false if any input evaluates false', () => {
		assert(!validate(undefined, '61444444444'))
		assert(!validate('hello', undefined))
	})

	it('yields false if either argument is the wrong length', () => {
		assert(!validate('aaaaa', '61444444444444'))
	})

})
