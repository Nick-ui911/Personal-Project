import React, { lazy, Suspense, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./component/header";
import Restaurant  from "./component/Restaurant ";
import Footer from "./component/footer";
import Cart from "./component/Cart";
import Contact from "./component/Contact";
import Error from "./component/Error";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import RestaurantMenu from "./component/RestaurantMenu";
import Login from "./component/loginForm";
import Fitness from "./component/Fitness";
import { Shimmer } from "./component/shimmer";
import Instaitem from "./component/InstamartItem";
import About from "./component/About";
import DineInHotel from "./component/DineInHotel";
import UserAddress from "./component/UserAddress";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import store from "./utils/store";
import Home from "./component/Home";
import HomeKitchen from "./component/HomeKitchen";
import Beauty from "./component/Beauty";
import Stationary from "./component/Stationary";
import Electronics from "./component/Electronics";
import Books from "./component/Books";
import Clothing from "./component/Clothing";
import Toys from "./component/Toys";
import Mobiles from "./component/Mobiles";
import SpecificTrending from "./component/SpecificTrending";
import TermCondition from "./component/TermCondition";
import PrivacyPolicy from "./component/PrivacyPolicy";
import Sellers from "./component/Sellers";
import Products from "./component/Products";


// import Dineout from "./component/Dineout";
// import Instamart from "./component/instamart";
const Dineout = lazy(() => import("./component/Dineout"));
const Instamart = lazy(() => import("./component/instamart"));

const Applayout = () => {
  const [user, setUser] = useState({
    name: "user",
    email: "nbaghel392@gmail.com",
  });

  return (
   <Provider store = {store}>
    <UserContext.Provider value={{ user : user,setUser : setUser }}>
      <Header />
      <Outlet />
      <Footer />
    </UserContext.Provider>
   </Provider>
  );
};
// here we do nexted route configuration , in this configuration header and footer component will always there the only what change is outlet according route
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Applayout />,
    errorElement: <Error />, 
    children: [ 
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/restaurant",
        element: <Restaurant/>,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantMenu />,
      },

      {
        path: "/instamart",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Instamart />
          </Suspense>
        ),
      },
      {
        path: "/instamart/:id1",
        element: <Instaitem />,
      },
      {
        path: "/fitness",
        element: <Fitness />,
      },
      {
        path: "/dineout",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Dineout />
          </Suspense>
        ),
      },
      {
        path: "/dineout/:id2",
        element: <DineInHotel />,
      },
      {
        path: "/trending/:id3",
        element: <SpecificTrending />,
      },
      {
        path: "/useraddress",
        element: <UserAddress />,
      },
      {
        path: "/homekitchen",
        element: <HomeKitchen />,
      },
      {
        path: "/stationary",
        element: <Stationary />,
      },
      {
        path: "/beauty",
        element: <Beauty />,
      },
      {
        path: "/electronics",
        element: <Electronics />,
      },
      {
        path: "/homekitchen",
        element: <HomeKitchen/>,
      },
      {
        path: "/books",
        element: <Books />,
      },
      {
        path: "/clothing",
        element: <Clothing/>,
      },
      {
        path: "/toys",
        element: <Toys/>,
      },
      {
        path: "/mobiles",
        element: <Mobiles/>,
      },
      {
        path: "/termcondition",
        element: <TermCondition/>,
      },
      {
        path: "/privacypolicy",
        element: <PrivacyPolicy/>,
      },
      {
        path: "/sellers",
        element: <Sellers/>,
      },
      {
        path: "/products",
        element: <Products/>,
      },


    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
