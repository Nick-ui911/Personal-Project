import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/CartSlice";
import { FaStar } from "react-icons/fa";
import StarRating from "./StarRating";

const SpecificTrending = () => {
  const [item, setItem] = useState({});
  const { id3 } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    TrendingData();
  }, [id3]);

  const TrendingData = async () => {
    const response = await fetch(`http://localhost:3500/api/trending/${id3}`);
    const json = await response.json();
    setItem(json);
  };

  const addTrendingItem = (item) => {
    dispatch(addItem(item));
    alert("Item added to cart!"); // Immediate feedback for the user
  };

  const handleButtonClick = (route) => {
    navigate(route);
  };

  return (
    <div className="instaitem-container">
      {/* Image Section */}
      <div className="image-section">
        <img src={item.image} alt={item.name} className="item-image" />
      </div>

      {/* Details Section */}
      <div className="details-section">
        <h1 className="item-name">{item.name}</h1>
        <h2 className="item-price">Price: ${item.price}</h2>
        <p className="item-description">{item.description}</p>
        <div className="button-container">
          <button onClick={() => addTrendingItem(item)} className="order-button">
            ADD TO CART
          </button>
        </div>
      </div>

      {/* Additional Navigation */}
      <div className="additional-data">
  <div className="nav-buttons">
    <button onClick={() => handleButtonClick("/review")} className="nav-button">
      Reviews
    </button>
    <button onClick={() => handleButtonClick("/soldby")} className="nav-button">
      Sold By
    </button>
  </div>
  <div className="star-rating-section">
    <StarRating />
  </div>
</div>
    </div>
  );
};

export default SpecificTrending;
