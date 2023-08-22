const express = require('express');
const app = express();
const path = require('path');
const Product = require('./models/product')
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/farmStand'); // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
  console.log("connected to mongo");
}


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.get('/products', async (req, res) => { //query the product model
    const products = await Product.find({}) //to get/find all products
    res.send(products);
})

app.listen(3000, () => {console.log("on port 3000");})
