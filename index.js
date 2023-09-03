import express from 'express';
const app = express()
import cors from 'cors';
import envs from './src/config/config.js';
import mongo from './src/helper/mongo.js';
import route from './src/helper/route.js';

import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(cors())
app.use(express.static('public'))

app.use(express.urlencoded({
  extended : true
}));

mongo();

app.use('/' ,route);

app.get('/', (req, res) => {
  res.sendFile(__dirname+ '/views/index.html')
});

const listener = app.listen(envs.port || 3000, () => {
  console.log('Your app is listening on port ' + listener.address().port)
})
