const express = require('express')
const path = require("path")
const app = express()
const { parseUrls, replaceUrls, getShortenedUrls } = require('./util')

require('dotenv').config()

const PORT = 3000

app.use(express.json());
app.use('/', express.static(`${__dirname}/../static`, { index: 'index.html' }))

app.post('/send-sms', async (req, res) => {
	const { phoneNumber, message } = req.body
	const parsedUrls = parseUrls(message)
	const shortenedUrls = await getShortenedUrls(parsedUrls)
	const smsMessage = replaceUrls(message, shortenedUrls)
	console.log(smsMessage)
})

app.listen(PORT, () => console.log(`listening on port ${PORT}`))
