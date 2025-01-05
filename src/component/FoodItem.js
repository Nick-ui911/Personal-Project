import React from "react";
import { removeItem } from "../utils/CartSlice";
import { useDispatch } from "react-redux";


const FoodItem = ({ id, name,item, price, image ,address,time}) => {
  const dispatch = useDispatch();

  const removeCartItem = () => {
    dispatch(removeItem()); 
  };

  return (
    <div className="food-item">
      <img src={image} alt={item} className="food-item-image" />
      <div className="food-item-details">
        <h3 className="food-item-name">{item}</h3>
        <p className="food-item-price">${price}</p>
        <h3 className="food-item-address">{address}</h3>
        <h3 className="food-item-time">{time}</h3>
        <button className="remove-item-btn" onClick={()=>removeCartItem()}>
          Remove
        </button>
      </div>
    </div>
  );
};

export default FoodItem;