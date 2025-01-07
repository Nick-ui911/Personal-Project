import React, { useEffect, useState } from "react";
import TrendingData from "./TrendingData";
import { Shimmer } from "./shimmer";

const Trending = () => {
  const [trending, setTrending] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return <div><Shimmer/></div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    
   <>
   <div className="heading">
        <h1>Trending</h1>
        <p>Explore the latest trends</p>
      </div>
    <div className="allcards" >
         
         {trending.map((item) => (
           <TrendingData key={item.id} {...item} />
         ))}
       </div>
   </>
  );
};

export default Trending;