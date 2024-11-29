const express = require('express');

const app = express();
const port = 3000;

const products = [
  { name: 'Laptop', price: 50000, category: 'Electronics' },
  { name: 'Mobile', price: 20000, category: 'Electronics' },
  { name: 'Shirt', price: 1500, category: 'Apparel' },
  { name: 'Mixer Grinder', price: 4000, category: 'Home Appliances' },
];

const cars = [
  { make: 'Maruti', mileage: 15000, model: 'Swift' },
  { make: 'Hyundai', mileage: 20000, model: 'i20' },
  { make: 'Tata', mileage: 30000, model: 'Nexon' },
];

const movies = [
  { title: '3 Idiots', genre: 'Comedy', rating: 9 },
  { title: 'Dangal', genre: 'Drama', rating: 10 },
  { title: 'Bahubali', genre: 'Action', rating: 8 },
];

const orders = [
  { orderId: 1, customerName: 'Nisith', status: 'shipped' },
  { orderId: 2, customerName: 'Soma', status: 'pending' },
  { orderId: 3, customerName: 'Jhumu', status: 'shipped' },
];

function filterByCategory(products, category) {
  let results = products.filter((product) => product.category === category);
  return results;
}

function filterByMileage(cars, mileage) {
  let results = cars.filter((car) => car.mileage < mileage);
  return results;
}

function filterByRating(movies, rating) {
  let results = movies.filter((movie) => movie.rating > rating);
  return results;
}

function filterByStatus(orders, status) {
  let results = orders.filter((order) => order.status === status);
  return results;
}

app.get('/products/category/:category_name', (req, res) => {
  const category_name = req.params.category_name;
  const response = filterByCategory(products, category_name);
  res.json(response);
});

app.get('/cars/mileage/:mileage', (req, res) => {
  const mileage = req.params.mileage;
  const response = filterByMileage(cars, mileage);
  res.json(response);
});

app.get('/movies/ratings/:rating', (req, res) => {
  const rating = req.params.rating;
  const response = filterByRating(movies, rating);
  res.json(response);
});

app.get('/orders/status/:status', (req, res) => {
  const status = req.params.status;
  const response = filterByStatus(orders, status);
  res.json(response);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
