import React, { useEffect, useState } from "react";
import TrendingData from "./TrendingData";
import { Shimmer } from "./shimmer";
import { filterData } from "../utils/helper";
import { Link } from "react-router-dom";

const Trending = () => {
  const [trending, setTrending] = useState([]);
  const [searchTrending, setSearchTrending] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTxt, setSearchTxt] = useState("");

  useEffect(() => {
    TrendingItem();
  }, []);

  async function TrendingItem() {
    try {
      const response = await fetch("http://localhost:3500/api/trending");
      if (!response.ok) {
        throw new Error("Failed to fetch trending data");
      }
      const data = await response.json();
      setTrending(data);
      setSearchTrending(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return (
      <div>
        <Shimmer />
      </div>
    );
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  const handleSearch = () => {
    if (searchTxt.trim() === "") {
      setTrending(searchTrending); // Reset to full list if search text is empty
    } else {
      const filteredData = filterData(searchTxt, searchTrending);
      setTrending(filteredData);
    }
  };

  return (
    <>
      <div className=" Trending-search-Bar">
        <input
          type="text"
          className="inputbox"
          placeholder="Search Trending item...."
          value={searchTxt}
          onChange={(e) => setSearchTxt(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSearch();
          }}
        />
        <button className="searchbtn" onClick={handleSearch}>
          Search
        </button>
      </div>

      <div className="heading">
        <h1>Trendings</h1>
        <p>Explore the latest trends</p>
      </div>
      <div className="allcards">
        {trending.map((item) => (
          <Link className="nick" to={`/trending/${item.id}`} key={item.id}>
            <TrendingData {...item} />
          </Link>
        ))}
      </div>
    </>
  );
};

export default Trending;
