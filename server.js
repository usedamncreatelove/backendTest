const express = require('express');
const crudApi = require('./crudApi');

const app = express();
const port = 4000;



app.get('/helloworld', (req, res) => {
  res.send('Hello, world');
});

app.use('/api', crudApi);

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});