const express = require('express');
const app = express();
const port = 4000;

app.get('/helloworld', (req, res) => {
  res.send('Hello, world');
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});