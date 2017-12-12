module.exports = (message, urls) =>
  message
		.split(' ')
		.map(word => 
			urls[word] ? urls[word] : word
		, [])
		.join(' ')
