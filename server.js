const path = require('path');
const express = require('express');
const app = express();

app.set('port', 3001);

app.use(express.static('public'));

app.listen('port', () => {
  console.log(`Server listening on `, app.get('port'));
});
