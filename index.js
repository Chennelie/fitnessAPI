const express = require('express');
const exercices = require('./routes/exercices');
const app = express();

app.use(express.json());

app.use('/exercices', exercices);

const port = process.env.PORT || 5500;
app.listen(port, () => console.log(`Listening on Port: ${port}`));