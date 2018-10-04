require('dotenv').config();

const express = require ('express');
const bodyParser = require ('body-parser');
const controller = require ('./controller.js');
const port = 8080;
const cors = require ('cors');
const massive = require ('massive');
const app = express();


app.use(cors());
app.use(bodyParser.json());

//Destructering .ENV file
const{
    CONNECTION_STRING
} = process.env

//Massive connection to database
massive(CONNECTION_STRING)
.then(db => {
    app.set('db', db)
    console.log('database is connected')
})
.catch(error => {
    console.error('error', error)
})


app.get('/', (req, res) => {
    res.send();
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})