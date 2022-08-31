import express from 'express'
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.get('/samurai', (req, res) => {
    res.send('Hello Samura222!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})