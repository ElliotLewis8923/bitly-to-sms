const CHAR_LIMIT = 612
const NUM_LIMIT = 12

module.exports = (message, number) =>
	[
		number,
		message,
		message.length <= CHAR_LIMIT,
		number.length <= NUM_LIMIT
	].every(cond => cond)
