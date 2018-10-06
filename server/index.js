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

//Destruct .ENV file
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
    console.error('database connection error', error)
})


app.get('/products', (req, res) => {
    const db = req.app.get('db')
    db.get_products()
    .then((products) => {
        res.send(products)
    })
})

app.post('/add_product' , (req, res) => {
    const db = req.app.get('db')
    const {productName, productPrice, img} = req.body

    db.add_product([productName, productPrice, img])
    .then((product) => {
        res.send("Saved Successfully")
    })

})

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})