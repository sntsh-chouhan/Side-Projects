import express from 'express';
import dotenv from 'dotenv'
import cors from 'cors'
import cookieParser from "cookie-parser"

import connectDB from './src/config/mongo.config.js';

import short_url from './src/routes/short_url.routes.js';
import auth_route from './src/routes/auth.routes.js';
import { redirectFromShortUrl } from './src/controller/short_url.controller.js';
import { errorHandler } from './src/utils/errorHandler.js';
import { attachUser } from "./src/utils/attachUser.js";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(cors({
  origin: "http://localhost:5173", // your frontend origin
  credentials: true,               // allow cookies/credentials
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
}));

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cookieParser())

app.use(attachUser)

app.use("/api/create", short_url)
app.use("/auth", auth_route)
app.get("/:shortUrl", redirectFromShortUrl)

app.use(errorHandler)

app.listen(PORT, ()=>{
    connectDB()
    console.log(`server running on ${PORT}`);
})