const submit = () => {
	let text
	const phoneNumber = document.getElementById('phoneNumber').value
	const message = document.getElementById('message').value
	const flashMessage = document.getElementById('flash')

	axios.post('/send-sms', { phoneNumber, message })
		.then(res => {
			text = res.body.text
			flashMessage.textContent = text
		})
		.catch(err => {
			text = 'An error has occurred'
			flashMessage.textContent = text	
		})
}
