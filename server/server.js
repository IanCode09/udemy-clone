import express from 'express'
import dotenv from 'dotenv'
import mongoDB from './db/mongoDB.js'

dotenv.config()

mongoDB()

const app = express()

app.get('/', (req, res) => {
    res.send('Api is Running')
})

const PORT = process.env.PORT || 5000

app.listen(
    PORT, 
    console.log(`Server running on PORT: ${PORT}`)
)