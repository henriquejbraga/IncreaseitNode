const express = require('express');

const app = express();

let pjson = require('./package.json');

app.get('/', (_req, res) => {
  res.send({
    title: `${pjson.name}`,
    version: `${pjson.version}`
  })
});

app.listen(3000, () => {
  console.log('Aplicação ouvindo na porta 3000');
});
