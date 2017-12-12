const submit = () => {
	const phoneNumber = document.getElementById('phoneNumber').value
	const message = document.getElementById('message').value
	const flashMessage = document.getElementById('flash')

	axios.post('/send-sms', { phoneNumber, message })
		.then(res => {
			flashMessage.textContent = res.data.text
		})
		.catch(err => {
			flashMessage.textContent = 'An error has occed'
		})
}
