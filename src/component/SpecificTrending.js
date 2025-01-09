import React from 'react'
import { useState ,useEffect } from "react";
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addItem } from '../utils/CartSlice';

const SpecificTrending = () => {
    const [item, setItem] = useState([]);
    const { id3 } = useParams();

    useEffect(() => {
      TrendingData();
    }, [id3]); 

    const TrendingData = async () => {
        let response = await fetch(`http://localhost:3500/api/trending/${id3}`); 
        let json = await response.json();
        setItem(json);
        console.log(json)
    };

    const dispatch = useDispatch();

  const addTrendingItem = (item) => {
    dispatch(addItem(item));
    
  };

    return (
        <div className="instaitem-container">
        <div className="image-section">
          <img src={item.image} alt={item.name} className="item-image" />
          <div className="button-container">
            <button onClick={()=>addTrendingItem(item)} className="order-button">ADD TO CART</button>
          </div>
        </div>
        <div className="details-section">
          <h1 className="item-name">Item Name: {item.name}</h1>
          <h2 className="item-price">Price: ${item.price}</h2>
        </div>
      </div>
    );
}

export default SpecificTrending;
