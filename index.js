const express = require('express');
const exercises = require('./routes/exercises');
const equipments = require('./routes/equipments');
const body = require('./routes/body');
const app = express();

app.use(express.json());

//Routes
app.use('/exercises', exercises);
app.use('/equipments', equipments);
app.use('/body', body);

const port = process.env.PORT || 5500;
app.listen(port, () => console.log(`Listening on Port: ${port}`));