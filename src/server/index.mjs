import fetch from 'node-fetch'
import path from 'path'
import cors from 'cors'
import {FormData} from 'formdata-polyfill/esm.min.js';
import express from 'express'
import mockAPIResponse from './mockAPI.js'
import dotenv from 'dotenv'
import url from 'url'

dotenv.config();

const app = express()

app.use(cors({
    origin: 'http://localhost:8080'
}))


app.use(express.static('dist'))

app.get('/', function (req, res) {
    res.sendFile(path.resolve('dist/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

app.get('/api', async (req, res) => {
    let data = new FormData()
    data.append('key', process.env.API_KEY)
    data.append('lang', 'en')
    data.append('url', url.parse(req.url, true).query.url)
    const response = await fetch('https://api.meaningcloud.com/sentiment-2.1', { method: 'post', body: data })
    res.send(await response.json())
})
