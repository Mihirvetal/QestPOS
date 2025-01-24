/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
const ServiceCard = ({ service, addToCart }) => {
  return (
    
      <div className="grid">
        <img src={service.imageUrl} alt={service.name} className="size-45" />
        <h1>{service.name}</h1>
        <p>{service.price}</p>
        <button onClick={() => addToCart(service)}>Add to Cart</button>
      </div>
  );
};

export default ServiceCard;
