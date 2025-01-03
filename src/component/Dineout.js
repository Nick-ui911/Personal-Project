import { useEffect, useState } from "react";
import DineoutCard from "./DineoutCard";
import { Shimmer } from "./shimmer";
import useOnline from "../utils/useOnline";
import Offline from "./Offline";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";

const Dineout = () => {
  const [data, setData] = useState([]);
  const [allData, setAllData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchtxt, setSearchTxt] = useState("");
  const [error, setError] = useState(null); // New state for error handling

  let dinedata = async () => {
    try {
      let response = await fetch("http://localhost:4000/api/dineout");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      let data = await response.json();
      setData(data);
      setAllData(data);
    } catch (err) {
      setError(err.message); // Set error message
    } finally {
      setLoading(false); // Ensure loading is set to false
    }
  };

  useEffect(() => {
    dinedata();
  }, []);

  const onlinecheck = useOnline();
  if (!onlinecheck) {
    return <Offline />;
  }

  if (loading) return <Shimmer />;

  // Display error message if there is an error
  if (error) {
    return <h1>Error: {error}</h1>;
  }

  return (
    <>
      <div className="searchBar">
        <input
          type="text"
          className="inputbox"
          placeholder="Search"
          value={searchtxt}
          onChange={(e) => {
            setSearchTxt(e.target.value);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              const data = filterData(searchtxt, allData);
              setData(data);
            }
          }}
        />

        <button
          className="searchbtn"
          onClick={() => {
            const data = filterData(searchtxt, allData);
            setData(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="allcards">
        {data.length > 0 ? (
          data.map((dineIn) => (
            <Link className="nick" to={`/dineout/${dineIn.id}`} key={dineIn.id}>
              <DineoutCard {...dineIn} />
            </Link>
          ))
        ) : (
          <h1>No data available</h1>
        )}
      </div>
    </>
  );
};

export default Dineout;