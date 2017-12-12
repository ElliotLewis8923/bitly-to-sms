const express = require('express')
const path = require("path")
const app = express()
const api = require('./api')
const { parseUrls, replaceUrls, getShortenedUrls, validate } = require('./util')

require('dotenv').config()

const PORT = 3000

app.use(express.json());
app.use('/', express.static(`${__dirname}/../static`, { index: 'index.html' }))

app.post('/send-sms', async (req, res, next) => {
	const { phoneNumber, message } = req.body

	if(!validate(message, phoneNumber)) {
		return res.sendStatus(400)
	}
	try {
		const parsedUrls = parseUrls(message)
		const shortenedUrls = await getShortenedUrls(parsedUrls)
		const smsMessage = replaceUrls(message, shortenedUrls)

		await api.sendSMS(smsMessage, phoneNumber)
		return res.json({ text: 'Success! SMS sent' })
	} catch(e) {
		console.log(e)
		return res.sendStatus(500)
	}
})

app.listen(PORT, () => console.log(`listening on port ${PORT}`))
