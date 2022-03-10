const express = require('express');

const app = express();

app.get('/', (_req, res) => {
  res.send('Hello world')
});

app.listen(3000, () => {
  console.log('Aplicação ouvindo na porta 3000');
});
