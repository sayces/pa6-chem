import express from 'express';
import { Users } from './models.js';

const app = express();

app.get('/', (req, res) => {
  res.send('hello sasha')
});


app.listen(3005);