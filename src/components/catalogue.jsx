import React, { useEffect, useState } from 'react';
import productsData from './products.json';
import Card from './card.jsx';

function Catalogue() {

    const [products, setProduct] = useState(productsData.productsData);

    const [favs, setFavs] = useState([]);
    const handleFavClick = (productId) => {
        if (favs.includes(productId)) {
            const newFavs = favs.filter((singleFav) => {
                return productId !== singleFav;
            });
            setFavs(newFavs);
        } else {
            setFavs([...favs, productId]);
        }
    }

    return (
        <div className="container m-auto w-8/12 flex flex-row flex-wrap justify-center items-center">
      { products.map( (singleProduct) => {

        return (
          <Card key={singleProduct.id} product={singleProduct} favourites={favs} handleFavClick={handleFavClick}/>
        );

      })}
    </div>
    );
}
export default Catalogue