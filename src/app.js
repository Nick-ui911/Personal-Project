import React, { lazy, Suspense, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./component/header";
import Body from "./component/body";
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
import Carousal from "./component/carousal";
import HomeKitchen from "./component/HomeKitchen";
import Beauty from "./component/Beauty";
import Stationary from "./component/Stationary";
import Electronics from "./component/Electronics";
import Books from "./component/Books";
import Carousals from "./component/carousal";
import Clothing from "./component/Clothing";
import Toys from "./component/Toys";
import Mobiles from "./component/Mobiles";


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
        element: <Carousals/>,
      },
      {
        path: "/restaurant",
        element: <Body/>,
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


    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
