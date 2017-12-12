# Bitly to SMS Challenge

## Setup:

Create a .env file in project root and add the keys:

```
BITLY_TOKEN=<BITLY_TOKEN>
SMS_API_KEY=<SMS_API_KEY>
SMS_API_SECRET=<SMS_API_SECRET>
```

Install dependencies:

```
$ npm install
```

Run tests:

```
$ npm run test
```

Build and start server:

```
$ npm run start
```

## Usage

Go to localhost:3000

Enter a phone number (numeric only) and a message (less than 612 characters) with some urls.

Click submit and wait for your Bitly-fied SMS to arrive

