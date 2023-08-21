const Product = require('./models/product')
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/farmStand'); // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
  console.log("connected to mongo");
}

const p = new Product({
    name: 'Ruby Grapefruit',
    price: 1.99,
    category: 'fruit'
})
p.save().then(p => { console.log(p)}).catch(e => { console.log(e)});
