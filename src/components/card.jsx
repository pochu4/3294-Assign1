import IonIcon from "@reacticons/ionicons";
import React from "react";
import styles from "./card.module.css";


function Card({ product, favourites, handleFavClick }) {


  return (
    <div key={product.id} className="flex-wrap lg:w-1/4 m-2 bg-gray-200 rounded-lg shadow-md overflow-hidden card-container">
      <img src={product.image} className='w-full h-64 object-cover' />
      <div className="p-2">
        <div className="flex justify-between content-center">
          <h3 className="font-semibold text-lg lg:text-md md:text-sm sm:text-sm mb-2">{product.name}</h3>
          <button className="text-yellow-600 pr-2" onClick={() =>
            handleFavClick(product.id)}>
            {favourites.includes(product.id) ? <IonIcon name="heart" size="large" /> : <IonIcon name="heart-outline" size="large" />}
          </button>
        </div>
        <p className="mb-1 text-lg lg:text-md md:text-sm">{product.description}</p>
        <div className="flex justify-between items-end my-2">
          <p className="font-bold text-yellow-600 text-2xl lg:text-xl md:text-sm sm:text-md">${product.price}</p>
          {/* <div className="flex justify-center items-center"> */}
          <button type="button" class="w-auto focus:outline-none text-white bg-yellow-600 hover:bg-yellow-500 font-medium rounded-lg text-sm lg: px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 dark:focus:ring-yellow-900">
            Buy Now!
          </button>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
}

export default Card;