import express from 'express'
export const app = express()
const port = 3000

const HTTP_STATUSES = {
    OK_200: 200,
    CREATED_201: 201,
    NO_CONTENT: 204,

    BAD_REQUEST_400: 400,
    NOT_FOUND_404: 4004
}

app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.get('/samurai', (req, res) => {
    res.send('Hello Samura222!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})