import express from 'express';
import dotenv from 'dotenv';

import Connection from './database/db.js';
import router from './routes/route.js';

dotenv.config();

const app = express();

app.use('/', router)

const PORT = 8000;

app.listen(PORT, () => console.log(`severs is running on ${PORT}`))
Connection(process.env.DB_URL);