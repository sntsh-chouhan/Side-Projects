import express from 'express';
import {nanoid} from 'nanoid';
import dotenv from 'dotenv'

import connectDB from './src/config/mongo.config.js';

import urlSchema from './src/models/shorturl.model.js';

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.post("/api/create", (req, res) => {
    const {url} = req.body

    const short_url = nanoid(7);
    
    const newURL = new urlSchema({
        full_url: url,
        short_url: short_url
    })

    newURL.save()
    res.send({
        short_url,
        url,
        "msg" : "hi"
    })
})

app.get("/api/:shortUrl", async (req, res) => {
    const {shortUrl} = req.params

    console.log(shortUrl)

    const url = await urlSchema.findOne({short_url: shortUrl});

    if(url){
        res.redirect(url.full_url)
    }
    else{
        res.status(404).send(`url not found baba on "http://localhost:3000/api/${shortUrl}"`)
    }
})

app.listen(PORT, ()=>{
    connectDB()
    console.log(`server running on ${PORT}`);
})