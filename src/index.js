const express = require('express');
require('dotenv').config({path:'../.env'});
const routes = require('./routes');

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(routes);



app.listen(port, () => {
    console.log(`App rodando na porta ${port}!`);
});