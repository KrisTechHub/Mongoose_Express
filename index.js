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
    const products = await Product.find({}) //to get/find all products, await for mongoose operation
    res.render('products/index',  { products }); //2nd argument is to let index.ejs access 'products'
})

app.get('/products/new', (req, res) => {
    res.render('products/new')
})

app.get('/products/:id', async (req, res) => {
    const { id } = req.params; //define Id
    const product = await Product.findById(id) //find the id
    res.render('products/show', { product });
})

app.listen(3000, () => {console.log("on port 3000");})
