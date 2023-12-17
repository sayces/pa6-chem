import express from 'express';
import { Users } from './models.js';

const app = express();

app.get('/users', async (req, res) => {
  res.send(await Users.findAll())
});


app.listen(3005);