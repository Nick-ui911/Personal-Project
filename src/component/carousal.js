import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Trending from "./Trending";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Carousal = () => {
  // Example data for carousel items with links
  const carouselItems = [
    {
      id: 1,
      title: "CLOTHING",
      link: "/clothing",
      image:
        "https://t3.ftcdn.net/jpg/03/34/79/68/360_F_334796865_VVTjg49nbLgQPG6rgKDjVqSb5XUhBVsW.jpg",
    },
    {
      id: 2,
      title: "RESTAURANT",
      link: "/restaurant",
      image:
        "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 3,
      title: " GROCERY",
      link: "/instamart",
      image:
        "https://alphasilver.productsalphawizz.com/uploads/media/2024/Grocery_Gourmet_Food1.jpeg",
    },
    {
      id: 4,
      title: " FITNESS",
      link: "/fitness",
      image:
        "https://alphasilver.productsalphawizz.com/uploads/media/2024/Fitness.jpeg",
    },
    {
      id: 5,
      title: " DINEOUT",
      link: "/dineout",
      image:
        "https://www.dineout.co.in/blog/wp-content/uploads/2019/11/rsz_101.jpg",
    },
    {
      id: 6,
      title: "BEAUTY",
      link: "/beauty",
      image:
        "https://alphasilver.productsalphawizz.com/uploads/media/2024/Beauty_Personal_Care_.jpg",
    },
    {
      id: 7,
      title: "HOME&KITCHEN",
      link: "/homekitchen",
      image:
        "https://alphasilver.productsalphawizz.com/uploads/media/2024/Home_Kitchen.jpeg",
    },
    {
      id: 8,
      title: "STATIONARY",
      link: "/stationary",
      image:
        "https://alphasilver.productsalphawizz.com/uploads/media/2024/Stationery_.jpeg",
    },
    {
      id: 9,
      title: "ELECTRONICS",
      link: "/electronics",
      image:
        "https://alphasilver.productsalphawizz.com/uploads/media/2024/Electronicss1.jpeg",
    },
    {
      id: 10,
      title: "BOOKS",
      link: "/books",
      image:
        "https://alphasilver.productsalphawizz.com/uploads/media/2024/Books.jpeg",
    },
    {
      id: 10,
      title: "TOYS",
      link: "/toys",
      image:
        "https://alphasilver.productsalphawizz.com/uploads/media/2024/_Toys_Games.jpeg",
    },
    {
      id: 10,
      title: "MOBILES",
      link: "/mobiles",
      image: "https://images.samsung.com/is/image/samsung/assets/in/explore/brand/5-best-android-mobile-phones-2022-in-india/banner-mobile-720x761-080422.jpg?$720_N_JPG$",
    },
  ];

  return (
    <>
    <div className="main">
      <div className="image-container">
        <img
          className="image"
          alt="image"
          src="https://alphasilver.productsalphawizz.com/uploads/media/2024/7mdfskoasdhgoihgio047805.png"
        />
      </div>

      <div className="carousal">
        <h1>Categories</h1>
        <Carousel responsive={responsive}>
          {carouselItems.map((item) => (
            <a
              key={item.id}
              href={item.link}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <div className="item">
                <img
                  src={item.image}
                  alt={item.title}
                  className="carousel-image"
                />
                <div className="carousel-title">{item.title}</div>
              </div>
            </a>
          ))}
        </Carousel>
      </div>
    </div>
    <div className="trending">
        <Trending/>
    </div>
    </>
  );
};

export default Carousal;
