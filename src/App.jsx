import React, { useEffect, useState } from 'react';
import productsData from './products.json';
import './App.css'
import Card from './components/card';

function App() {

  const [products, setProduct] = useState(productsData.productsData);

  console.log(products);

  return (
    <div className="container w-10/12 grid grid-cols-3 gap-6">
      { products.map( (singleProduct) => {

        return (
          <Card key={singleProduct.id} product={singleProduct}/>
        );

      })}
    </div>

  );
}

export default App



