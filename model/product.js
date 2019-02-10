const fs = require('fs');
const path = require('path');

const filePath = () => path.join(
  path.dirname(process.mainModule.filename),
  'data',
  'products.json'
);

const getProductsFromFile = (cb) => {
  let products = [];
  const p = filePath();
  fs.readFile(p, (err, fileContent) => {
    if (err) {
      return cb([]);
    }
    return cb(JSON.parse(fileContent));
  });
}
module.exports = class Product {
  constructor(title, imageUrl, price, description) {
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

  save() {
    getProductsFromFile(products => {
      products.push(this);
      const p = filePath();
      fs.writeFile(p, JSON.stringify(products), (err) => {
        console.log('Error in writing log', err);
      });
    });
  }

  static fetchAll(cb) {
    getProductsFromFile(cb);
  }
}