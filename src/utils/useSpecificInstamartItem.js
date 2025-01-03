import { useEffect, useState } from "react";
import { N_R_L } from "../constants";

 const useSpecificInstaItem = (id1) => {
  const [mitem, setMitem] = useState([]);

  useEffect(() => {
    Martdata();
  }, [id1]);

  const Martdata = async () => {
    let response = await fetch(N_R_L + id1);
    let json = await response.json();
    setMitem(json);
    console.log(json);
  };

  return mitem;
};
export default useSpecificInstaItem;
