const express = require('express')
const app = express()
const path = require('path')
const routes = require('./routes/index')

app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(routes)

// app.get('/', (req, res) => {
// 	res.send('hello fellas, my first ever HTTP server')
// })
app.use(express.static(path.join(__dirname, 'public')))

const PORT = 3000
app.listen(PORT, () => {
	console.log(`App listening on port ${PORT}`)
})
