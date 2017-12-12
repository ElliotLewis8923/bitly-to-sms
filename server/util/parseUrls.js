module.exports = parseUrls = message => {
	const regex =  /^(ftp|http|https):\/\/[^ "]+$/
	const urls = message
		.split(' ')
		.reduce((urls, word) => 
			regex.test(word) ? urls.concat(word) : urls
		, [])
    return urls
}