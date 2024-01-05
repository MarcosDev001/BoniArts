const express = require('express');
const app = express();
const port = 3000;  

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, '170.246.187.192', () => {
  console.log(`Servidor rodando em http://170.246.187.192:${port}`);
});
