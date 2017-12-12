const express = require('express')
const path = require("path")
const app = express()

const PORT = 3000

app.use(express.json());
app.use('/', express.static(`${__dirname}/../static`, { index: 'index.html' }))

app.post('/send-sms', async (req, res) => {
	const { phoneNumber, message } = req.body
	parseUrls(message)
})

app.listen(PORT, () => console.log(`listening on port ${PORT}`))
