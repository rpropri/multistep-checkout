const path = require('path');
const express = require('express');
const app = express();

const port = 3001;

app.use(express.static('public'));

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
