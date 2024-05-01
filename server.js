const express = require('express');
const crudApi = require('./crudApi');

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

const app = express();
const port = 4000;

// 使用body-parser來解析請求主體

app.get('/helloworld', (req, res) => {
  res.send('Hello, world');
});

app.use('/api', crudApi);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});