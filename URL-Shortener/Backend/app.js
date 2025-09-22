import express from 'express';
import {nanoid} from 'nanoid';
import dotenv from 'dotenv'

import connectDB from './src/config/mongo.config.js';

import short_url from './src/routes/short_url.routes.js';
import { redirectFromShortUrl } from './src/controller/short_url.controller.js';
import { errorHandler } from './src/utils/errorHandler.js';
dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use("/", short_url)
app.get("/:shortUrl", redirectFromShortUrl)


app.use(errorHandler)

app.listen(PORT, ()=>{
    connectDB()
    console.log(`server running on ${PORT}`);
})