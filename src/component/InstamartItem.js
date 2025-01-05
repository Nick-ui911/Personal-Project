import { useParams } from "react-router-dom";
import useSpecificInstaItem from "../utils/useSpecificInstamartItem";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/CartSlice";


const Instaitem = () => {
  const { id1 } = useParams();
  const mitem = useSpecificInstaItem(id1);

  const dispatch = useDispatch();

  const addInstaItem = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div className="instaitem-container">
      <div className="image-section">
        <img src={mitem.image} alt={mitem.name} className="item-image" />
        <div className="button-container">
          <button onClick={()=>addInstaItem(mitem)} className="order-button">ADD TO CART</button>
        </div>
      </div>
      <div className="details-section">
        <h1 className="item-name">Item Name: {mitem.name}</h1>
        <h2 className="item-price">Price: ${mitem.price}</h2>
      </div>
    </div>
  );
};

export default Instaitem;
