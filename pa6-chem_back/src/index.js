

import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import dbService from './dbService.js';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({
  extended: false,
}));

app.get('/', (req, res) => {
  res.send('hello sasha')
});


app.listen(process.env.PORT, () => console.log('no problems, apps running'));