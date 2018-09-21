const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))

app.get('/', (req, res) => res.send('Welcome to the main page.'))
app.get('/hello', (req, res) => res.send('Hello World!'))
app.get('/goodbye', (req, res) => res.send('Bye World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
