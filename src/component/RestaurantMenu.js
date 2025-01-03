import { useParams } from "react-router-dom";
import { Shimmer } from "./shimmer";
import useRestaurant from "../utils/useRestaurant";

const RestaurantMenu = () => {
  const { id } = useParams();
  const [restaurant, loading] = useRestaurant(id);

  if (loading === true) return <Shimmer />;

  return (
    <div className="restaurant-menu-container">
      <div className="image-section">
        <img src={restaurant.image} alt={restaurant.name} className="restaurant-image" />
       
      </div>
      <div className="details-section">
        <h1 className="restaurant-name">Restaurant Name: {restaurant.name}</h1>
        <h2 className="menu-title">Menu:</h2>
        <div className="menu-items">
          {restaurant.menu && restaurant.menu.length > 0 ? (
            restaurant.menu.map((menuItem, index) => (
              <div key={index} className="menu-item">
                {menuItem.item} - ${menuItem.price}
                <div className="button-container">
          <button className="order-button">ADD TO CART</button>
        </div>
              </div>
            ))
          ) : (
            <div>
              <Shimmer />
            </div>
          )}
        </div>
        <h2 className="restaurant-address">Address: {restaurant.address}</h2>
      </div>
    </div>
  );
};

export default RestaurantMenu;
