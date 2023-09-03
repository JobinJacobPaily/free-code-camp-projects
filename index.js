import express from 'express';
const app = express()
import cors from 'cors';
import envs from './src/config/config.js';
import mongo from './src/helper/mongo.js';

app.use(cors())
app.use(express.static('public'))
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html')
});


mongo();


const listener = app.listen(envs.port || 3000, () => {
  console.log('Your app is listening on port ' + listener.address().port)
})
