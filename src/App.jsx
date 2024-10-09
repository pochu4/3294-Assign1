import React, { useState } from 'react';
// import productsData from './products.json';
import './App.css'
import Card from './components/card';

const productList = [
  {
      "id": 1,
      "name": "Red Panda Plushy",
      "description": "Comes as a set",
      "price": 29.99,
      "image": "../assets/img/redpanda.jpg"
  },
  {
      "id": 2,
      "name": "Dog with Drumstick",
      "description": "Drumstick included(maybe)",
      "price": 39.99,
      "image": "../assets/img/dog.jpg"
  },
  {
      "id": 3,
      "name": "Piggy on Bread Cushion",
      "description": "Bread Sold Separately",
      "price": 19.99,
      "image": "../assets/img/pig.jpg"
  },
  {
      "id": 4,
      "name": "Otter",
      "description": "Buy Him",
      "price": 29.99,
      "image": "../assets/img/otter.jpg"
  },
  {
      "id": 5,
      "name": "Penguins",
      "description": "or are they ducks..",
      "price": 39.99,
      "image": "../assets/img/penguins.jpg"
  },
  {
      "id": 6,
      "name": "Who Knows",
      "description": "His glasses are cool",
      "price": 39.99,
      "image": "../assets/img/cows.jpg"
  }
]

function App() {

  const [products, setProduct] = useState(productList);

  return (
    <div className="container w-10/12 grid grid-cols-3 gap-6">
      { products.map( (singleProduct) => {

        return (
          <Card key={singleProduct.id} Assign1product={singleProduct}/>
        );

      })}
    </div>

  );
}

export default App
