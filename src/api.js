import express from 'express';

const app = express();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  next();
})

app.get('/', (req, res) => {
  res.send('hello world from api');
})

app.listen(3001, () => {
  console.log('Example app listening on port 3001!');
})
