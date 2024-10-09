import React from "react";


function Card({ product, singleProduct }) {
    return (
        <div key={product.id} className="bg-gray-200 rounded-lg shadow-md overflow-hidden">
            <img src={ singleProduct.image } className='w-full h-64 object-cover'/>
            <div className="p-2">
              <h3 className="font-semibold">{product.name}</h3>
              <p>{product.description}</p>
              <p>${product.price}</p>
            </div>
          </div>
    );
}

export default Card;