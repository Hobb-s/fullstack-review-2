const express = require('express');
const path = require('path');
const router = require('./routes');
const parser = require('body-parser');

const app = express();
const PORT = 3000;
require('./database');

app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));
app.use('/api', router);
app.use(express.static(path.resolve(__dirname, '../client/dist')));

app.listen(PORT, () => {
  console.log(`Successfully connected to PORT: ${PORT}`);
});